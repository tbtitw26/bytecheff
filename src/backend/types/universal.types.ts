import { Types } from "mongoose";

export type UniversalOrderStatus =
    | "pending"
    | "queued"
    | "processing"
    | "ready"
    | "failed";

export interface UniversalOrderType {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    email: string;
    category: string;
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

export interface CreateUniversalOrderRequest {
    category: string;
    fields: Record<string, any>;
    extras: string[];
    totalTokens: number;
    planType: "default" | "reviewed";
    language?: string;
    email: string;
}

export interface CreateUniversalOrderResponse {
    order: UniversalOrderType;
}
