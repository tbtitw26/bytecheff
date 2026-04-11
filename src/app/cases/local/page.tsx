import type { Metadata } from "next";
import noLocal from "@/pageSchemas/extra/local.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noLocal);
}

export default function Page() {
    return <PageCreator schema={noLocal} />;
}
