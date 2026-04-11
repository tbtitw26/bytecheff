import type { Metadata } from "next";

import noExtraSuccess from "@/pageSchemas/extra/onPage.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noExtraSuccess);
}

export default function Page() {
    return <PageCreator schema={noExtraSuccess} />;
}
