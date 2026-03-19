import { connectDB } from "../config/db";
import { authService } from "../services/auth.service";
import { LogoutResponse } from "@/backend/types/auth.types";
import { UserType } from "@/backend/types/user.types";

export const authController = {
    async register(body: any) {
        await connectDB();
        const { user, accessToken, refreshToken } =
            await authService.register(body);

        return {
            user: {
                _id: user._id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber ?? user.phone ?? "",
                dateOfBirth: user.dateOfBirth ?? user.birthDate ?? null,
                street: user.street ?? user.address?.street ?? "",
                city: user.city ?? user.address?.city ?? "",
                country: user.country ?? user.address?.country ?? "",
                postCode: user.postCode ?? user.address?.zip ?? "",
                phone: user.phoneNumber ?? user.phone ?? "",
                birthDate: user.dateOfBirth ?? user.birthDate ?? null,
                address: {
                    street: user.street ?? user.address?.street ?? "",
                    city: user.city ?? user.address?.city ?? "",
                    country: user.country ?? user.address?.country ?? "",
                    zip: user.postCode ?? user.address?.zip ?? "",
                },
                role: user.role,
                tokens: user.tokens,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
            tokens: { accessToken, refreshToken },
        };
    },


    async login(body: { email: string; password: string }, userAgent?: string, ip?: string) {
        await connectDB();
        const { user, accessToken, refreshToken } = await authService.login(body.email, body.password, userAgent, ip);
        return { user: toUser(user), tokens: { accessToken, refreshToken } };
    },

    async refresh(refreshJWT: string, userAgent?: string, ip?: string) {
        await connectDB();
        const { user, accessToken, refreshToken } = await authService.refresh(refreshJWT, userAgent, ip);
        return { user: toUser(user), tokens: { accessToken, refreshToken } };
    },

    async me(userId: string): Promise<UserType> {
        await connectDB();
        const user = await authService.me(userId);
        return toUser(user);
    },

    async logout(refreshJWT: string): Promise<LogoutResponse> {
        await connectDB();
        await authService.logout(refreshJWT);
        return { message: "Logged out successfully" };
    },

    async logoutAll(userId: string): Promise<LogoutResponse> {
        await connectDB();
        await authService.logoutAll(userId);
        return { message: "All sessions revoked" };
    },
};

function toUser(u: any): UserType {
    return {
        _id: u._id.toString(),

        firstName: u.firstName,
        lastName: u.lastName,

        email: u.email,
        phoneNumber: u.phoneNumber ?? u.phone ?? "",
        dateOfBirth: u.dateOfBirth ?? u.birthDate ?? null,
        street: u.street ?? u.address?.street ?? "",
        city: u.city ?? u.address?.city ?? "",
        country: u.country ?? u.address?.country ?? "",
        postCode: u.postCode ?? u.address?.zip ?? "",
        phone: u.phoneNumber ?? u.phone ?? "",
        birthDate: u.dateOfBirth ?? u.birthDate ?? null,

        address: {
            street: u.street ?? u.address?.street ?? "",
            city: u.city ?? u.address?.city ?? "",
            country: u.country ?? u.address?.country ?? "",
            zip: u.postCode ?? u.address?.zip ?? "",
        },

        role: u.role,
        tokens: u.tokens,

        createdAt: u.createdAt,
        updatedAt: u.updatedAt,
    };
}
