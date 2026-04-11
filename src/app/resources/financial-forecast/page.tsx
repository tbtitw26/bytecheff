import type { Metadata } from "next";
import noFinancialForecast from "@/pageSchemas/extra/analysis.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noFinancialForecast);
}

export default function Page() {
    return <PageCreator schema={noFinancialForecast} />;
}
