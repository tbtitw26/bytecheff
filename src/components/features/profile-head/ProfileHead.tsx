"use client";

import {FaUserCircle} from "react-icons/fa";
import {useUser} from "@/context/UserContext";
import styles from "./ProfileHead.module.scss";
import {LogoutButton} from "@/components/ui/logout-button/LogoutButton";
import { siteContent } from "@/resources/siteContent";

const ProfileHead = () => {
    const user = useUser();
    const t = siteContent.profile.head;

    const createdDate = user?.createdAt
        ? new Date(user.createdAt).toISOString().split('T')[0]
        : null;

    return (
        <header className={styles.hero}>
            <div className={styles.identityShell}>
                <div className={styles.identityTop}>
                    <div className={styles.avatarWrap}>
                        <span className={styles.avatarHalo} aria-hidden="true"/>
                        <FaUserCircle className={styles.avatar}/>
                    </div>

                    <div className={styles.text}>
                        <span className={styles.eyebrow}>Account overview</span>
                        <h1>
                            {t.welcomeBack.replace("{firstName}", user?.firstName || "").replace("{lastName}", user?.lastName || "")}
                        </h1>
                        <p className={styles.lead}>{t.memberSince.replace("{date}", createdDate ?? "—")}</p>
                    </div>
                </div>

                <div className={styles.identityMeta}>
                    <div className={styles.metaCard}>
                        <span className={styles.metaLabel}>Email</span>
                        <strong>{user?.email}</strong>
                    </div>
                    <div className={styles.metaCard}>
                        <span className={styles.metaLabel}>Location</span>
                        <strong>{user?.address.country} {user?.address.city}</strong>
                    </div>
                </div>
            </div>

            <div className={styles.actionArea}>
                <div className={styles.actionHint}>
                    <span className={styles.actionHintLabel}>Session</span>
                    <p>Manage your profile access securely.</p>
                </div>
                <LogoutButton/>
            </div>
        </header>
    );
};

export default ProfileHead;
