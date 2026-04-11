import type { Metadata } from "next";
import noMarketAnalysis from "@/pageSchemas/extra/offPage.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noMarketAnalysis);
}

export default function Page() {
    return <PageCreator schema={noMarketAnalysis} />;
}
