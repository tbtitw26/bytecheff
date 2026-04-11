import type {Metadata} from "next";
import noTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";
import styles from "@/resources/PolicyPage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noTerms);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schema={noTerms} />
        </div>
    );
}

