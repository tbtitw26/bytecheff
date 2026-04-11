"use client";

import React from "react";
import styles from "./StoryGridSection.module.scss";
import Image from "next/image";
import { media } from "@/resources/media";
import type { StaticImageData } from "next/image";

type CardType = "text" | "image" | "quote" | "wideImage";

interface StoryCard {
    type: CardType;
    title?: string;
    text?: string;
    image?: string;
    quote?: string;
    author?: string;
    role?: string;
}

interface StoryGridSectionProps {
    label?: string;
    title: string;
    cards: StoryCard[];
}

export default function StoryGridSection({
                                             label,
                                             title,
                                             cards,
                                         }: StoryGridSectionProps) {
    const introCard = cards.find((card) => card.type === "text");
    const quoteCard = cards.find((card) => card.type === "quote");
    const wideImageCard = cards.find((card) => card.type === "wideImage");
    const imageCards = cards.filter((card) => card.type === "image");
    const textCards = cards.filter((card) => card.type === "text").slice(1);

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    {label && <span className={styles.label}>{label}</span>}
                    <h2 className={styles.title}>{title}</h2>
                </div>

                <div className={styles.layout}>
                    <div className={styles.leftColumn}>
                        {introCard && (
                            <article className={styles.introCard}>
                                {introCard.title && <h3>{introCard.title}</h3>}
                                {introCard.text && <p>{introCard.text}</p>}
                            </article>
                        )}

                        {wideImageCard && (
                            <article className={styles.featureCard}>
                                {wideImageCard.image && (
                                    <Image
                                        src={
                                            (media as Record<string, string | StaticImageData>)[
                                                wideImageCard.image
                                                ]
                                        }
                                        alt={wideImageCard.title || "Feature image"}
                                        fill
                                        className={styles.image}
                                    />
                                )}

                                <div className={styles.featureOverlay}>
                                    {wideImageCard.title && (
                                        <strong>{wideImageCard.title}</strong>
                                    )}
                                    {wideImageCard.text && (
                                        <span>{wideImageCard.text}</span>
                                    )}
                                </div>
                            </article>
                        )}
                    </div>

                    <div className={styles.rightColumn}>
                        {quoteCard && (
                            <article className={styles.quoteCard}>
                                <p className={styles.quote}>“{quoteCard.quote}”</p>

                                <div className={styles.author}>
                                    {quoteCard.author && <strong>{quoteCard.author}</strong>}
                                    {quoteCard.role && <span>{quoteCard.role}</span>}
                                </div>
                            </article>
                        )}

                        {(imageCards.length > 0 || textCards.length > 0) && (
                            <div className={styles.mixedGrid}>
                                {imageCards.map((card, i) => {
                                    const img =
                                        card.image &&
                                        (media as Record<string, string | StaticImageData>)[
                                            card.image
                                            ];

                                    if (!img) return null;

                                    return (
                                        <article key={`image-${i}`} className={styles.imageCard}>
                                            <Image
                                                src={img}
                                                alt={card.title || "Story image"}
                                                fill
                                                className={styles.image}
                                            />
                                        </article>
                                    );
                                })}

                                {textCards.map((card, i) => (
                                    <article key={`text-${i}`} className={styles.textCard}>
                                        {card.title && <h3>{card.title}</h3>}
                                        {card.text && <p>{card.text}</p>}
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}