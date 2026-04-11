"use client";

import Image from "next/image";
import { Expert } from "@/types/expert";
import { media } from "@/resources/media";
import styles from "./ExpertProfile.module.scss";
import { siteContent } from "@/resources/siteContent";
import { getTranslatedExpert } from "@/resources/expertTranslations";

type Props = {
    expert: Expert;
};

export default function ExpertProfile({ expert }: Props) {
    const t = siteContent.chefProfile;
    const translatedExpert = getTranslatedExpert(expert);
    const img = media[translatedExpert.avatar];
    const levelLabel =
        t.levelLabels[translatedExpert.experienceLevel as keyof typeof t.levelLabels];

    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <aside className={styles.identityRail}>
                        <div className={styles.mediaFrame}>
                            <div className={styles.avatarWrap}>
                                <Image
                                    src={img}
                                    alt={translatedExpert.fullName}
                                    fill
                                    priority
                                    className={styles.avatar}
                                />
                            </div>
                        </div>

                        <div className={styles.identityCopy}>
                            <span className={styles.eyebrow}>{t.role}</span>
                            <h1 className={styles.name}>{translatedExpert.fullName}</h1>
                            <p className={styles.subtitle}>{translatedExpert.subtitle}</p>
                        </div>

                        <dl className={styles.metrics}>
                            <div className={styles.metric}>
                                <dt>{t.meta.rating}</dt>
                                <dd>{translatedExpert.rating}/5.0</dd>
                            </div>
                            <div className={styles.metric}>
                                <dt>{t.meta.experience}</dt>
                                <dd>{translatedExpert.experience}</dd>
                            </div>
                            <div className={styles.metric}>
                                <dt>{t.meta.education}</dt>
                                <dd>{translatedExpert.education}</dd>
                            </div>
                            <div className={styles.metric}>
                                <dt>{t.meta.level}</dt>
                                <dd>{levelLabel}</dd>
                            </div>
                        </dl>

                        <div className={styles.specialties}>
                            {translatedExpert.specialties.map((specialty) => (
                                <span key={specialty} className={styles.specialty}>
                                    {specialty}
                                </span>
                            ))}
                        </div>
                    </aside>

                    <main className={styles.content}>
                        <header className={styles.intro}>
                            <p className={styles.headline}>{translatedExpert.profile.headline}</p>
                            <p className={styles.bio}>{translatedExpert.bio}</p>
                        </header>

                        <div className={styles.sectionGrid}>
                            <section className={styles.section}>
                                <div className={styles.sectionHead}>
                                    <span className={styles.sectionLabel}>{t.sections.about}</span>
                                </div>
                                <div className={styles.sectionBody}>
                                    {translatedExpert.profile.about.map((text, index) => (
                                        <p key={index}>{text}</p>
                                    ))}
                                </div>
                            </section>

                            <section className={`${styles.section} ${styles.philosophySection}`}>
                                <div className={styles.sectionHead}>
                                    <span className={styles.sectionLabel}>{t.sections.philosophy}</span>
                                </div>
                                <blockquote className={styles.philosophy}>
                                    {translatedExpert.profile.philosophy}
                                </blockquote>
                            </section>

                            <section className={styles.section}>
                                <div className={styles.sectionHead}>
                                    <span className={styles.sectionLabel}>{t.sections.achievements}</span>
                                </div>
                                <ul className={styles.achievementList}>
                                    {translatedExpert.profile.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}
