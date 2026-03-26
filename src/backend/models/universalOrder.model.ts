import mongoose, { Schema, Document } from "mongoose";
import { UniversalOrderStatus } from "../types/universal.types";

export interface UniversalOrderDocument extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;

    category: string; // e.g. "training", "cv", "marketing"
    fields: Record<string, any>;
    extras: string[];
    totalTokens: number;
    planType: "default" | "reviewed";
    language?: string;

    response: string;
    extrasData: Record<string, string>;

    status: UniversalOrderStatus;
    readyAt?: Date;
    scheduledFor?: Date;
    startedAt?: Date;
    completedAt?: Date;
    attempts?: number;
    lastError?: string;
    deliveryNotifiedAt?: Date;
    createdAt: Date;
}

const universalOrderSchema = new Schema<UniversalOrderDocument>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        email: { type: String, required: true },
        category: { type: String, default: "general" },

        fields: { type: Schema.Types.Mixed, default: {} },
        extras: [{ type: String }],
        totalTokens: { type: Number, required: true },
        planType: { type: String, enum: ["default", "reviewed"], default: "default" },

        // 🌍 необов’язкове поле
        language: { type: String, required: false, default: "English" },

        response: { type: String, default: "" },
        extrasData: { type: Map, of: String, default: {} },

        status: {
            type: String,
            enum: ["pending", "queued", "processing", "ready", "failed"],
            default: "ready",
        },
        readyAt: { type: Date },
        scheduledFor: { type: Date },
        startedAt: { type: Date },
        completedAt: { type: Date },
        attempts: { type: Number, default: 0 },
        lastError: { type: String, default: "" },
        deliveryNotifiedAt: { type: Date },
        createdAt: { type: Date, default: Date.now },
    },
    { strict: false }
);

universalOrderSchema.index({ category: 1, status: 1, scheduledFor: 1 });

universalOrderSchema.set("toJSON", {
    transform: (_, ret) => {
        if (ret.extrasData instanceof Map)
            ret.extrasData = Object.fromEntries(ret.extrasData);
        return ret;
    },
});

export const UniversalOrder =
    mongoose.models.UniversalOrder ||
    mongoose.model<UniversalOrderDocument>("UniversalOrder", universalOrderSchema);
