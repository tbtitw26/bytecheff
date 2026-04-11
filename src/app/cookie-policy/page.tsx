import type {Metadata} from "next";
import noCookie from "@/pageSchemas/cookie-policy/cookiePolicy.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchema } from "@/utils/metadata";
import styles from "@/resources/PolicyPage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchema(noCookie);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schema={noCookie} />
        </div>
    );
}

