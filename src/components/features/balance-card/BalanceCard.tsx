"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import styles from "./BalanceCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { siteContent } from "@/resources/siteContent";

export default function BalanceCard() {
    const user = useUser();
    const t = siteContent.profile.balance;

    if (!user) return null;

    return (
        <section className={styles.card}>
            <div className={styles.cardTop}>
                <div className={styles.left}>
                    <p className={styles.label}>{t.label}</p>
                    <h3 className={styles.amount}>
                        {t.tokensLabel.replace("{amount}", user.tokens.toString())}
                    </h3>
                    <p className={styles.desc}>
                        {t.description}
                    </p>
                </div>

                <div className={styles.icon} aria-hidden="true">
                    <span>T ✦</span>
                </div>
            </div>

            <div className={styles.cardFooter}>
                <div className={styles.supporting}>
                    <div className={styles.supportItem}>
                        <span className={styles.supportLabel}>Status</span>
                        <strong>Active wallet</strong>
                    </div>
                    <div className={styles.supportItem}>
                        <span className={styles.supportLabel}>Access</span>
                        <strong>Ready for new orders</strong>
                    </div>
                </div>

                <Link href="/pricing">
                    <ButtonUI variant="solid" color="primary" size="lg">
                        {t.buttonText}
                    </ButtonUI>
                </Link>
            </div>
        </section>
    );
}
