import { NextRequest, NextResponse } from "next/server";
import { ENV } from "@/backend/config/env";
import { universalService } from "@/backend/services/universal.service";

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get("authorization");
    const expectedHeader = `Bearer ${ENV.CRON_SECRET}`;

    if (authHeader !== expectedHeader) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const result = await universalService.processQueuedRecipeOrders();
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json(
            { message: error?.message || "Queue processing failed" },
            { status: 500 }
        );
    }
}
