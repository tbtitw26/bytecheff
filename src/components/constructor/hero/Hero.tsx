"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { media } from "@/resources/media";
import type { StaticImageData } from "next/image";
import { siteContent } from "@/resources/siteContent";

interface HeroSectionProps {
    title: React.ReactNode;
    description?: string;
    primaryCta?: { text: string; link: string };
    secondaryCta?: { text: string; link: string };
    image: string;
    badgeText?: string;
    features?: boolean;
}

export default function HeroSection({
                                        title,
                                        description,
                                        primaryCta,
                                        secondaryCta,
                                        image,
                                        badgeText,
                                        features = true,
                                    }: HeroSectionProps) {
    const featureTexts = siteContent.home.common.heroFeatures;

    const img = (media as Record<string, string | StaticImageData>)[image];

    const isStaticImport =
        typeof img === "object" && img !== null && "src" in img;

    return (
        <section className={styles.hero}>
            <div className={styles.mediaLayer}>
                <Image
                    src={img}
                    alt="Hero background"
                    fill
                    priority
                    quality={95}
                    sizes="100vw"
                    className={styles.backgroundImage}
                    {...(isStaticImport && "blurDataURL" in img
                        ? {
                            placeholder: "blur" as const,
                            blurDataURL: img.blurDataURL,
                        }
                        : {})}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.inner}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {badgeText && <div className={styles.badge}>{badgeText}</div>}

                    <h1 className={styles.title}>{title}</h1>

                    {description && (
                        <p className={styles.description}>{description}</p>
                    )}

                    <div className={styles.actions}>
                        {primaryCta && (
                            <Link href={primaryCta.link}>
                                <ButtonUI size="lg" shape="default">
                                    {primaryCta.text}
                                </ButtonUI>
                            </Link>
                        )}

                        {secondaryCta && (
                            <Link
                                href={secondaryCta.link}
                                className={styles.secondaryLink}
                            >
                                {secondaryCta.text}
                            </Link>
                        )}
                    </div>

                    {features && (
                        <div className={styles.features}>
                            {featureTexts.map((feature) => (
                                <div key={feature} className={styles.featureItem}>
                                    <span className={styles.featureDot} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
