import type { Metadata } from "next";
import noAudit from "@/pageSchemas/extra/audit.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noAudit);
}

export default function Page() {
    return <PageCreator schema={noAudit} />;
}
