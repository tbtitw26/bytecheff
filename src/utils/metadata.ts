import type { Metadata } from "next";
import { getSiteMetadata } from "@/resources/siteMetadata";
import { metadataFromSchema } from "./fromSchema";
import type { MetaSchema } from "@/components/constructor/page-render/types";

export async function generateMetadataFromSchema(
    schema: { meta: MetaSchema }
): Promise<Metadata> {
    return await metadataFromSchema(schema.meta);
}

export async function generateMetadataForPage(pageKey: string): Promise<Metadata> {
    const meta = getSiteMetadata(pageKey as keyof typeof import("@/resources/siteMetadata").siteMetadata);

    const canonicalMap: Record<string, string> = {
        home: "/",
        pricing: "/pricing",
        about: "/about-us",
        getStarted: "/get-started",
        chefs: "/extra/chefs",
        chefProfile: "/extra/chefs",
        joinTeam: "/join-team",
        signIn: "/sign-in",
        signUp: "/sign-up",
        contactUs: "/contact-us",
        profile: "/profile",
        checkout: "/checkout",
    };

    const metaSchema: MetaSchema = {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        canonical: canonicalMap[pageKey] || `/${pageKey}`,
        ogTitle: meta.ogTitle || meta.title,
        ogDescription: meta.ogDescription || meta.description,
    };

    return await metadataFromSchema(metaSchema);
}
