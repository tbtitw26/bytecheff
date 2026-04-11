"use client";

import React from "react";
import Image from "next/image";
import styles from "./Card.module.scss";
import {media} from "@/resources/media";
import Link from "next/link";
import {Expert} from "@/types/expert";
import { siteContent } from "@/resources/siteContent";
import { getTranslatedExpert } from "@/resources/expertTranslations";

type ExpertCardProps = {
    expert: Expert;
    onAction?: (expert: Expert) => void;
};

const ExpertCard: React.FC<ExpertCardProps> = ({expert, onAction}) => {
    const pageT = siteContent.chefs;
    const translatedExpert = getTranslatedExpert(expert);
    const {
        avatar,
        fullName,
        subtitle,
        specialties,
    } = translatedExpert;

    const img = media[avatar];
    const levelLabel = pageT.filter.expertiseOptions[expert.experienceLevel];
    const meta = specialties[0] ?? subtitle;

    return (
        <Link
            href={`/extra/chefs/${expert.slug}`}
            className={styles.item}
            onClick={() => onAction?.(expert)}
        >
            <article className={styles.content}>
                <div className={styles.avatarWrapper}>
                    {img && (
                        <Image
                            src={img}
                            alt={fullName}
                            fill
                            className={styles.avatar}
                        />
                    )}
                </div>

                <div className={styles.text}>
                    <h3 className={styles.name}>{fullName}</h3>
                    <p className={styles.meta}>
                        {meta}
                        {meta !== levelLabel ? ` · ${levelLabel}` : ""}
                    </p>
                </div>
            </article>
        </Link>
    );
};

export default ExpertCard;
