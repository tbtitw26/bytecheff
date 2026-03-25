"use client";

import Image from "next/image";
import { Expert } from "@/types/expert";
import { media } from "@/resources/media";
import styles from "./ExpertProfile.module.scss";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";
import { getTranslatedExpert } from "@/resources/expertTranslations";

type Props = {
    expert: Expert;
};

export default function ExpertProfile({ expert }: Props) {
    const { lang } = useI18n();
    const t = getPageTranslations(lang).chefProfile;
    const translatedExpert = getTranslatedExpert(expert, lang);
    const img = media[translatedExpert.avatar];

    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* LEFT CARD */}
                    <aside className={styles.card}>
                        <div className={styles.avatarWrap}>
                            <Image
                                src={img}
                                alt={translatedExpert.fullName}
                                fill
                                priority
                                className={styles.avatar}
                            />
                        </div>

                        <h2 className={styles.name}>{translatedExpert.fullName}</h2>
                        <p className={styles.role}>{t.role}</p>

                        <div className={styles.meta}>
                            <div>
                                <span>{t.meta.rating}</span>
                                <strong>{translatedExpert.rating}/5.0</strong>
                            </div>

                            <div>
                                <span>{t.meta.experience}</span>
                                <strong>{translatedExpert.experience}</strong>
                            </div>

                            <div>
                                <span>{t.meta.education}</span>
                                <strong>{translatedExpert.education}</strong>
                            </div>

                            <div>
                                <span>{t.meta.level}</span>
                                <strong className={styles.level}>
                                    {t.levelLabels[translatedExpert.experienceLevel as keyof typeof t.levelLabels]}
                                </strong>
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className={styles.content}>
                        <h1 className={styles.headline}>
                            {translatedExpert.profile.headline}
                        </h1>

                        <section className={styles.block}>
                            <h3>{t.sections.about}</h3>
                            {translatedExpert.profile.about.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </section>

                        <section className={styles.block}>
                            <h3>{t.sections.philosophy}</h3>
                            <blockquote>
                                {translatedExpert.profile.philosophy}
                            </blockquote>
                        </section>

                        <section className={styles.block}>
                            <h3>{t.sections.achievements}</h3>
                            <ul>
                                {translatedExpert.profile.achievements.map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
        </section>
    );
}
