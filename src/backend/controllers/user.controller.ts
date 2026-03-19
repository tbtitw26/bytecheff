import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";
import { transactionService } from "@/backend/services/transaction.service";
import { emailService } from "@/backend/services/email.service";

export const userController = {
    async buyTokens(userId: string, amount: number): Promise<UserType> {
        await connectDB();

        const user = await userService.addTokens(userId, amount);

        console.log("💳 Adding tokens for user:", userId);
        await transactionService.record(user._id, user.email, amount, "add", user.tokens);
        console.log("✅ Transaction created successfully");

        void emailService.sendOrderConfirmationEmail({
            email: user.email,
            firstName: user.firstName,
            subject: "Payment Confirmation",
            summary: `Your token purchase was completed successfully. ${amount} tokens have been added to your account.`,
            amountLabel: `${amount} tokens purchased`,
            transactionDate: new Date(),
            details: [
                { label: "Product", value: "Tokens" },
                { label: "Quantity", value: `${amount}` },
                { label: "New balance", value: `${user.tokens} tokens` },
            ],
        }).catch((error) => {
            console.error("❌ Token purchase email failed:", error);
        });

        return formatUser(user);
    },

    async spendTokens(userId: string, amount: number, _reason?: string): Promise<UserType> {
        await connectDB();

        const user = await userService.getUserById(userId);
        if (!user) throw new Error("User not found");
        if ((user.tokens || 0) < amount) throw new Error("Not enough tokens");

        user.tokens -= amount;
        await user.save();

        await transactionService.record(user._id, user.email, amount, "spend", user.tokens);

        return formatUser(user);
    },
};

function formatUser(user: any): UserType {
    return {
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
        tokens: user.tokens ?? 0,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
}
