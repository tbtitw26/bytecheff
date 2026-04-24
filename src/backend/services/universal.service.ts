import mongoose from "mongoose";
import OpenAI from "openai";
import { ENV } from "../config/env";
import { connectDB } from "../config/db";
import { UniversalOrder, UniversalOrderDocument } from "../models/universalOrder.model";
import { User } from "../models/user.model";
import { transactionService } from "../services/transaction.service";
import { emailService } from "@/backend/services/email.service";
import {
    getRandomRecipeDeliveryDate,
    isCulinaryTrainingOrder,
    isLiveRecipeDeliveryMode,
} from "@/backend/utils/recipeDelivery";

const openai = new OpenAI({ apiKey: ENV.OPENAI_API_KEY });
const GENERATOR_MODEL = "gpt-4o-mini";

type UniversalOrderPayload = {
    category: string;
    fields: Record<string, any>;
    extras?: string[];
    language?: string;
    planType: "default" | "reviewed";
};

function buildPrompt(body: UniversalOrderPayload): string {
    const { fields } = body;

    const domain = fields.domain || "general";
    const mode = fields.deliveryMode || "ai";
    const language = body.language || "English";
    const context = JSON.stringify(fields, null, 2);

    const persona =
        domain === "culinary"
            ? mode === "expert"
                ? `
You are a Michelin-level professional chef and culinary educator.
You explain not only WHAT to do, but WHY.
You include techniques, mistakes, substitutions, and professional insights.
Tone: confident, expert, premium.
`
                : `
You are an AI culinary assistant.
You generate clear, structured, practical cooking courses.
Tone: friendly and concise.
`
            : mode === "expert"
                ? `
You are a senior domain expert and professional consultant.
You provide deep, expert-level explanations.
`
                : `
You are a helpful AI assistant.
You generate clear and structured content.
`;

    const task =
        domain === "culinary"
            ? mode === "expert"
                ? `
Design a comprehensive culinary course.
Include:
- Skill progression
- Weekly structure
- Techniques explanation
- Common mistakes
- Ingredient substitutions
- Professional chef notes
`
                : `
Design a clear culinary course.
Include:
- Weekly plan
- Recipes
- Short tips
`
            : `
Generate content based on the provided context.
`;

    const outputRules =
        mode === "expert"
            ? `
Output must be detailed, structured with headings and subheadings.
Assume the reader wants mastery.
`
            : `
Keep the output concise and easy to follow.
`;

    return `
${persona}

${task}

### Client Input
${context}

### Output Rules
${outputRules}

Write the entire output in ${language}.
`;
}

function buildExtraPrompt(
    extra: string,
    category: string,
    fields: Record<string, any>,
    language?: string
): string {
    const context = JSON.stringify(fields, null, 2);
    const langNote = language ? `Write in ${language}.` : "";

    switch (extra) {
        case "progressTracking":
            return `Create a weekly progress tracking table for ${category}.\n${langNote}\n${context}`;
        case "motivationTips":
            return `Write 10 motivational phrases related to this ${category} context.\n${langNote}\n${context}`;
        case "summaryReport":
            return `Write a short summary report showing how the plan achieves goals.\n${langNote}\n${context}`;
        case "marketingStrategy":
            return `Create a structured Marketing Strategy (ICP, positioning, channels, messaging, KPIs) for this business.\n${langNote}\n${context}`;
        case "financialProjection":
            return `Produce a 3-year financial projection (revenue, COGS, gross margin, OpEx buckets, EBITDA) with key assumptions and unit economics. Use markdown tables.\n${langNote}\n${context}`;
        case "riskAnalysis":
            return `List top risks across Market, Product, Team, Finance, Legal and propose mitigations. Prioritize by impact x probability. Use a table.\n${langNote}\n${context}`;
        case "growthRoadmap":
            return `Draft a 12–24 month growth roadmap with milestones by quarter, owners, and success metrics.\n${langNote}\n${context}`;
        case "competitorReview":
            return `Create a competitor analysis matrix (competitors, features/pricing, strengths/weaknesses, our edge). Use a comparison table.\n${langNote}\n${context}`;
        case "pitchDeck":
            return `Outline a 12–15 slide investor pitch deck with slide titles and bullet points tailored to this business.\n${langNote}\n${context}`;
        case "brandingGuide":
            return `Write a lightweight branding & visual identity brief (voice & tone, value pillars, color/typography suggestions, logo usage ideas) suited to the target audience.\n${langNote}\n${context}`;
        case "teamStructure":
            return `Propose an organizational structure with key roles, responsibilities (RACI hints), and near-term hires with priorities.\n${langNote}\n${context}`;
        case "customerJourney":
            return `Map a customer journey (Awareness → Consideration → Purchase → Onboarding → Retention → Advocacy) with key touchpoints and metrics.\n${langNote}\n${context}`;
        case "salesForecast":
            return `Build a simple sales forecast table (quarters, leads, conversion rates, ACV/ARPU, bookings/revenue) with assumptions.\n${langNote}\n${context}`;
        case "fundingPlan":
            return `Draft a funding strategy (target round size, use of proceeds, milestones to next round, suggested investor profile) tailored to this business.\n${langNote}\n${context}`;
        default:
            return `Generate a useful "${extra}" section for the ${category} context.\n${langNote}\n${context}`;
    }
}

async function generateUniversalContent(body: UniversalOrderPayload) {
    const mainPrompt = buildPrompt(body);
    let mainText = "";

    try {
        const mainRes = await openai.chat.completions.create({
            model: GENERATOR_MODEL,
            messages: [
                {
                    role: "system",
                    content:
                        "You are a structured professional generator. Always output final readable content.",
                },
                { role: "user", content: mainPrompt },
            ],
        });
        mainText = mainRes.choices?.[0]?.message?.content?.trim() || "";
    } catch {
        throw new Error("AI generation failed, please retry later");
    }

    const extrasData: Record<string, string> = {};
    if (Array.isArray(body.extras) && body.extras.length > 0) {
        for (const extra of body.extras) {
            try {
                const extraPrompt = buildExtraPrompt(
                    extra,
                    body.category,
                    body.fields,
                    body.language
                );
                const extraRes = await openai.chat.completions.create({
                    model: GENERATOR_MODEL,
                    messages: [{ role: "user", content: extraPrompt }],
                });
                extrasData[extra] = extraRes.choices?.[0]?.message?.content?.trim() || "";
            } catch {
                // Preserve partial success for optional extras.
            }
        }
    }

    return { mainText, extrasData };
}

function normalizeOrder<T extends UniversalOrderDocument | Record<string, any>>(doc: T | null) {
    if (!doc) return null;

    const order = doc as any;
    if (order.extrasData instanceof Map) {
        order.extrasData = Object.fromEntries(order.extrasData);
    }

    return order;
}

function getOrderConfirmationStatusLabel(order: {
    status: string;
    category: string;
    fields?: Record<string, any>;
}) {
    if (isCulinaryTrainingOrder(order)) {
        if (order.status === "queued") return "Queued for delivery (2-4 hours)";
        if (order.status === "processing") return "Processing";
    }

    if (order.status === "pending") return "Pending review";
    if (order.status === "failed") return "Failed";
    return "Ready";
}

export const universalService = {
    async createOrder(userId: string, email: string, body: any) {
        await connectDB();

        if (!body || typeof body !== "object") throw new Error("Invalid request body");
        if (!body.category) throw new Error("Missing category");
        if (!body.fields || typeof body.fields !== "object") throw new Error("Missing fields");
        if (!body.totalTokens || isNaN(body.totalTokens)) {
            throw new Error("Invalid totalTokens value");
        }

        if (body.planType === "instant") body.planType = "default";
        if (!["default", "reviewed"].includes(body.planType)) {
            throw new Error("Invalid planType (must be 'default' or 'reviewed')");
        }

        const user = await User.findById(userId);
        if (!user) throw new Error("User not found");

        const languageCost = body.language && body.language !== "English" ? 5 : 0;
        const totalCost = Number(body.totalTokens) + languageCost;
        if (user.tokens < totalCost) {
            throw new Error(`Insufficient points (have ${user.tokens}, need ${totalCost})`);
        }

        user.tokens -= totalCost;
        await user.save();
        await transactionService.record(user._id, email, totalCost, "spend", user.tokens);

        const culinaryLiveQueue =
            isCulinaryTrainingOrder(body) && isLiveRecipeDeliveryMode();

        let response = "";
        let extrasData: Record<string, string> = {};
        let status: UniversalOrderDocument["status"] =
            body.planType === "reviewed" ? "pending" : "ready";
        let readyAt: Date | undefined =
            body.planType === "reviewed"
                ? new Date(Date.now() + 24 * 60 * 60 * 1000)
                : new Date();
        let scheduledFor: Date | undefined;

        if (culinaryLiveQueue) {
            status = "queued";
            scheduledFor = getRandomRecipeDeliveryDate();
            readyAt = scheduledFor;
        } else {
            const generated = await generateUniversalContent(body);
            response = generated.mainText;
            extrasData = generated.extrasData;

            if (isCulinaryTrainingOrder(body)) {
                status = "ready";
                readyAt = new Date();
            }
        }

        const order = await UniversalOrder.create({
            userId: new mongoose.Types.ObjectId(userId),
            email,
            category: body.category,
            fields: body.fields,
            planType: body.planType,
            extras: body.extras || [],
            totalTokens: totalCost,
            language: body.language || "English",
            response,
            extrasData,
            status,
            readyAt,
            scheduledFor,
        });

        try {
            await emailService.sendOrderConfirmationEmail({
                email: user.email,
                firstName: user.firstName,
                subject: "Order Confirmation",
                summary: culinaryLiveQueue
                    ? `Your ${body.category} order has been queued and will be delivered in 2-4 hours.`
                    : `Your ${body.category} order has been created successfully.`,
                amountLabel: `${totalCost} points`,
                transactionDate: order.createdAt ?? new Date(),
                details: [
                    { label: "Service", value: body.category },
                    { label: "Plan", value: body.planType },
                    {
                        label: "Extras",
                        value:
                            Array.isArray(body.extras) && body.extras.length > 0
                                ? body.extras.join(", ")
                                : "None",
                    },
                    { label: "Language", value: body.language || "English" },
                    { label: "Points used", value: `${totalCost}` },
                    {
                        label: "Status",
                        value: getOrderConfirmationStatusLabel({
                            status,
                            category: body.category,
                            fields: body.fields,
                        }),
                    },
                ],
            });
        } catch (error) {
            console.error("Universal order confirmation email failed:", error);
        }

        return normalizeOrder(order.toObject({ flattenMaps: true }));
    },

    async getOrders(userId: string) {
        await connectDB();
        const docs = await UniversalOrder.find({ userId })
            .sort({ createdAt: -1 })
            .lean<UniversalOrderDocument[]>({ virtuals: true });

        return docs.map((doc) => normalizeOrder(doc));
    },

    async getOrderById(userId: string, orderId: string, requireReady = false) {
        await connectDB();

        const doc = await UniversalOrder.findOne({ _id: orderId, userId }).lean<UniversalOrderDocument>({
            virtuals: true,
        });
        if (!doc) return null;

        const order = normalizeOrder(doc);
        if (
            requireReady &&
            order &&
            isCulinaryTrainingOrder(order) &&
            order.status !== "ready"
        ) {
            throw new Error("OrderNotReady");
        }

        return order;
    },

    async processQueuedRecipeOrders(limit = 10) {
        await connectDB();

        if (!isLiveRecipeDeliveryMode()) {
            return { processed: 0, failed: 0, skipped: true };
        }

        let processed = 0;
        let failed = 0;

        while (processed + failed < limit) {
            const now = new Date();
            const claimedOrder = await UniversalOrder.findOneAndUpdate(
                {
                    category: "training",
                    "fields.domain": "culinary",
                    status: "queued",
                    scheduledFor: { $lte: now },
                },
                {
                    $set: {
                        status: "processing",
                        startedAt: now,
                        lastError: "",
                    },
                    $inc: { attempts: 1 },
                },
                {
                    sort: { scheduledFor: 1, createdAt: 1 },
                    new: true,
                }
            ).lean<UniversalOrderDocument>();

            if (!claimedOrder) break;

            try {
                const generated = await generateUniversalContent({
                    category: claimedOrder.category,
                    fields: claimedOrder.fields,
                    extras: claimedOrder.extras,
                    language: claimedOrder.language,
                    planType: claimedOrder.planType,
                });

                const completedAt = new Date();
                await UniversalOrder.updateOne(
                    { _id: claimedOrder._id, status: "processing" },
                    {
                        $set: {
                            response: generated.mainText,
                            extrasData: generated.extrasData,
                            status: "ready",
                            readyAt: completedAt,
                            completedAt,
                        },
                    }
                );

                const user = await User.findById(claimedOrder.userId).select("firstName email");
                if (user?.email) {
                    try {
                        await emailService.sendOrderReadyEmail({
                            email: user.email,
                            firstName: user.firstName,
                            category: claimedOrder.category,
                            orderId: String(claimedOrder._id),
                        });

                        await UniversalOrder.updateOne(
                            { _id: claimedOrder._id },
                            { $set: { deliveryNotifiedAt: new Date() } }
                        );
                    } catch (emailError) {
                        console.error("Universal ready email failed:", emailError);
                    }
                }

                processed += 1;
            } catch (error: any) {
                await UniversalOrder.updateOne(
                    { _id: claimedOrder._id, status: "processing" },
                    {
                        $set: {
                            status: "failed",
                            completedAt: new Date(),
                            lastError: error?.message || "Unknown processing error",
                        },
                    }
                );

                failed += 1;
            }
        }

        return { processed, failed, skipped: false };
    },
};
