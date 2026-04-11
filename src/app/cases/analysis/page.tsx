import type { Metadata } from "next";
import noAnalysis from "@/pageSchemas/extra/analysis.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noAnalysis);
}

export default function Page() {
    return <PageCreator schema={noAnalysis} />;
}
