import type { Metadata } from "next";

import noResources from "@/pageSchemas/extra/copywriting.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noResources);
}

export default function Page() {
    return <PageCreator schema={noResources} />;
}
