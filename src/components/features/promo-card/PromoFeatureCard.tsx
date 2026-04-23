"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PromoFeatureCard.module.scss";
import { media } from "@/resources/media";
import { ICONS } from "@/resources/icons";
import type { IconKey } from "@/resources/icons";

interface PromoFeatureCardProps {
    icon?: IconKey;
    title: string;
    description: string;
    actionText?: string;
    actionLink?: string;
    image: keyof typeof media;
    imagePosition?: "left" | "right";
}

const PromoFeatureCard: React.FC<PromoFeatureCardProps> = ({
                                                               icon,
                                                               title,
                                                               description,
                                                               actionText,
                                                               actionLink,
                                                               image,
                                                               imagePosition = "left",
                                                           }) => {
    const img = media[image];
    const Icon = icon ? ICONS[icon] : null;

    return (
        <article
            className={`${styles.card} ${
                imagePosition === "right" ? styles.reverse : ""
            }`}
        >
            <div className={styles.mediaCol}>
                <div className={styles.imageWrap}>
                    {img && (
                        <Image
                            src={img}
                            alt={title}
                            fill
                            quality={95}
                            sizes="(max-width: 900px) 100vw, 50vw"
                            className={styles.image}
                        />
                    )}
                    <div className={styles.imageOverlay} />
                </div>
            </div>

            <div className={styles.contentCol}>
                <div className={styles.contentInner}>
                    {Icon && (
                        <div className={styles.iconBox}>
                            <div className={styles.icon}>
                                <Icon />
                            </div>
                        </div>
                    )}

                    <div className={styles.copy}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.text}>{description}</p>
                    </div>

                    {(actionText && actionLink) && (
                        <div className={styles.footer}>
                            <Link href={actionLink} className={styles.action}>
                                <span>{actionText}</span>
                                <span className={styles.actionArrow}>→</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

export default PromoFeatureCard;
