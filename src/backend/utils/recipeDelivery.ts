import { ENV } from "@/backend/config/env";

type OrderLike = {
    category?: string;
    fields?: Record<string, any>;
};

export function isCulinaryTrainingOrder(order: OrderLike) {
    return order.category === "training" && order.fields?.domain === "culinary";
}

export function isLiveRecipeDeliveryMode() {
    return ENV.RECIPE_DELIVERY_MODE === "LIVE";
}

export function getRandomRecipeDeliveryDate() {
    const minMinutes = 120;
    const maxMinutes = 240;
    const delayMinutes =
        Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;

    return new Date(Date.now() + delayMinutes * 60 * 1000);
}
