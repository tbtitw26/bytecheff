import type { Metadata } from "next";
import noPrivacy from "@/pageSchemas/privacy-policy/privacyPage.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";
import styles from "@/resources/PolicyPage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noPrivacy);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schema={noPrivacy} />
        </div>
    );
}
