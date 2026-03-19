import bcrypt from "bcryptjs";
import { Types } from "mongoose";
import { User } from "../models/user.model";
import { RefreshSession } from "../models/refreshSession.model";
import { sha256, randomToken } from "../utils/crypto";
import { signAccessToken, signRefreshToken } from "../utils/jwt";
import { ENV } from "../config/env";
import { emailService } from "@/backend/services/email.service";
import { findAllowedCountry } from "@/utils/countries";

function parseDurationToSec(input: string): number {
    const m = input.match(/^(\d+)([smhd])?$/i);
    if (!m) return 60 * 60 * 24 * 30;

    const n = parseInt(m[1], 10);
    const unit = (m[2] || "s").toLowerCase();
    const mult =
        unit === "s" ? 1 : unit === "m" ? 60 : unit === "h" ? 3600 : 86400;

    return n * mult;
}

const REFRESH_TTL_SEC = parseDurationToSec(ENV.REFRESH_TOKEN_EXPIRES);

function isValidDateOnly(value: string): boolean {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

    const date = new Date(`${value}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime())) return false;

    return date.toISOString().slice(0, 10) === value;
}

function trimRequired(value: unknown, fieldName: string): string {
    const normalized = typeof value === "string" ? value.trim() : "";
    if (!normalized) throw new Error(`${fieldName} is required`);
    return normalized;
}

function normalizeRegistrationData(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    dateOfBirth: string;
    street: string;
    city: string;
    country: string;
    postCode: string;
}) {
    const firstName = trimRequired(data.firstName, "First name");
    const lastName = trimRequired(data.lastName, "Last name");
    const email = trimRequired(data.email, "Email").toLowerCase();
    const password = typeof data.password === "string" ? data.password : "";
    const phoneNumber = trimRequired(data.phoneNumber, "Phone number");
    const dateOfBirth = trimRequired(data.dateOfBirth, "Date of birth");
    const street = trimRequired(data.street, "Street");
    const city = trimRequired(data.city, "City");
    const countryInput = trimRequired(data.country, "Country");
    const postCode = trimRequired(data.postCode, "Post code");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Enter a valid email");
    }

    if (password.length < 8) {
        throw new Error("Password must be at least 8 characters");
    }

    if (!isValidDateOnly(dateOfBirth)) {
        throw new Error("Enter a valid date of birth");
    }

    const allowedCountry = findAllowedCountry(countryInput);
    if (!allowedCountry) {
        throw new Error("Registration from this country is not allowed");
    }

    return {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        dateOfBirth,
        street,
        city,
        country: allowedCountry.name,
        postCode,
    };
}

export const authService = {
    async register(data: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phoneNumber: string;
        dateOfBirth: string;
        street: string;
        city: string;
        country: string;
        postCode: string;
    }) {
        const normalized = normalizeRegistrationData(data);

        const existing = await User.findOne({ email: normalized.email });
        if (existing) throw new Error("Email already registered");

        const hashed = await bcrypt.hash(normalized.password, 12);
        const parsedDateOfBirth = new Date(`${normalized.dateOfBirth}T00:00:00.000Z`);

        const user = await User.create({
            firstName: normalized.firstName,
            lastName: normalized.lastName,
            email: normalized.email,
            password: hashed,
            phoneNumber: normalized.phoneNumber,
            dateOfBirth: parsedDateOfBirth,
            street: normalized.street,
            city: normalized.city,
            country: normalized.country,
            postCode: normalized.postCode,

            // Legacy mirrored fields for existing consumers.
            phone: normalized.phoneNumber,
            birthDate: parsedDateOfBirth,
            address: {
                street: normalized.street,
                city: normalized.city,
                country: normalized.country,
                zip: normalized.postCode,
            },
        });

        const result = await this.issueTokensAndSession(
            user._id,
            user.email,
            user.role,
            undefined,
            undefined
        );

        try {
            await emailService.sendWelcomeEmail({
                email: user.email,
                firstName: user.firstName,
            });
        } catch (error) {
            console.error("❌ Welcome email failed:", error);
        }

        return { user, ...result };
    },

    async login(email: string, password: string, userAgent?: string, ip?: string) {
        const normalizedEmail = email.toLowerCase().trim();

        const user = await User.findOne({ email: normalizedEmail }).select("+password");
        if (!user) throw new Error("Invalid credentials");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Invalid credentials");

        await RefreshSession.deleteMany({ userId: user._id });

        const result = await this.issueTokensAndSession(
            user._id,
            user.email,
            user.role,
            userAgent,
            ip
        );

        console.log(`[authService.login] ✅ New login for ${user.email}, old sessions cleared.`);

        return { user, ...result };
    },

    async issueTokensAndSession(
        userId: Types.ObjectId,
        email: string,
        role: string,
        userAgent?: string,
        ip?: string
    ) {
        const rawRefresh = randomToken(64);
        const tokenHash = sha256(rawRefresh);

        const expiresAt = new Date(Date.now() + REFRESH_TTL_SEC * 1000);

        const session = await RefreshSession.create({
            userId,
            tokenHash,
            userAgent,
            ip,
            expiresAt,
        });

        const accessToken = await signAccessToken({
            sub: userId.toString(),
            email,
            role,
        });

        const refreshJWT = await signRefreshToken(
            { sub: userId.toString(), sid: (session as any)._id.toString() },
            ENV.REFRESH_TOKEN_EXPIRES
        );

        return { accessToken, refreshToken: refreshJWT, session };
    },

    async refresh(refreshJWT: string, userAgent?: string, ip?: string) {
        const { verifyRefreshToken } = await import("../utils/jwt");
        let payload: { sub: string; sid: string };

        try {
            payload = await verifyRefreshToken(refreshJWT);
        } catch {
            throw new Error("SessionInvalid");
        }

        const session = await RefreshSession.findById(payload.sid);
        if (!session || session.revokedAt || session.expiresAt.getTime() < Date.now()) {
            throw new Error("SessionInvalid");
        }

        session.revokedAt = new Date();
        await session.save();

        const user = await User.findById(session.userId);
        if (!user) throw new Error("UserNotFound");

        const { accessToken, refreshToken } = await this.issueTokensAndSession(
            user._id,
            user.email,
            user.role,
            userAgent,
            ip
        );

        return { user, accessToken, refreshToken };
    },

    async me(userId: string) {
        const user = await User.findById(userId).select("-password");
        if (!user) throw new Error("UserNotFound");
        return user;
    },

    async logout(refreshJWT: string) {
        const { verifyRefreshToken } = await import("../utils/jwt");

        try {
            const payload = await verifyRefreshToken<{ sub: string; sid: string }>(refreshJWT);
            await RefreshSession.findByIdAndUpdate(payload.sid, {
                $set: { revokedAt: new Date() },
            });
        } catch {
            // idempotent
        }
    },

    async logoutAll(userId: string) {
        await RefreshSession.updateMany(
            { userId },
            { $set: { revokedAt: new Date() } }
        );
    },
};
