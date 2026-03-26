export type UniversalOrderStatus =
    | "pending"
    | "queued"
    | "processing"
    | "ready"
    | "failed";

export interface UniversalOrderUI {
    _id: string;
    userId: string;

    email: string;
    category: string;

    fields: Record<string, any>;
    extras: string[];

    totalTokens: number;
    planType: "default" | "reviewed";
    language?: string;

    response: string;
    extrasData?: Record<string, string>;

    status: UniversalOrderStatus;
    readyAt?: string;
    scheduledFor?: string;
    startedAt?: string;
    completedAt?: string;
    attempts?: number;
    lastError?: string;
    deliveryNotifiedAt?: string;
    createdAt: string;
}
