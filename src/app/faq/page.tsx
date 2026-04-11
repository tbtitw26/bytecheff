import type { Metadata } from "next";

import noFaq from "@/pageSchemas/faq/faqPage.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noFaq);
}

export default function Page() {
    return <PageCreator schema={noFaq} />;
}
