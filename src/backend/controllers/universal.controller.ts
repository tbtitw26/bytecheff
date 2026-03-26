import { universalService } from "../services/universal.service";
import { connectDB } from "../config/db";

export const universalController = {
    async createOrder(userId: string, email: string, body: any) {
        await connectDB();
        const order = await universalService.createOrder(userId, email, body);
        return { order };
    },

    async getOrders(userId: string) {
        await connectDB();
        const orders = await universalService.getOrders(userId);
        return { orders };
    },

    async getOrder(userId: string, id: string, requireReady = false) {
        await connectDB();
        const order = await universalService.getOrderById(userId, id, requireReady);
        if (!order) throw new Error("Order not found");
        return { order };
    },
};
