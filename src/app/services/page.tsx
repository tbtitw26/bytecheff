import type { Metadata } from "next";

import noServices from "@/pageSchemas/services/servicesPage.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noServices);
}

export default function Page() {
    return <PageCreator schema={noServices} />;
}
