import type { Metadata } from "next";
import noOffPage from "@/pageSchemas/extra/offPage.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noOffPage);
}

export default function Page() {
    return <PageCreator schema={noOffPage} />;
}
