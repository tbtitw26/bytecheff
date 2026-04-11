"use client";

import styles from "./TestimonialsSlider.module.scss";
import Image from "next/image";
import { media } from "@/resources/media";
import type { StaticImageData } from "next/image";

interface Testimonial {
    name: string;
    image: keyof typeof media;
    text: string;
    rating?: number; // ⭐ НОВЕ
}

interface Props {
    label?: string;
    title: string;
    description?: string;
    testimonials: readonly Testimonial[];
}

export default function TestimonialsSlider({
                                               label,
                                               title,
                                               description,
                                               testimonials,
                                           }: Props) {
    return (
        <section className={styles.section}>
            {/* HEADER */}
            <div className={styles.header}>
                {label && <span className={styles.label}>{label}</span>}
                <h2 className={styles.title}>{title}</h2>
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
            </div>

            {/* GRID */}
            <div className={styles.gridWrap}>
                <div className={styles.grid}>
                    {testimonials.map((item, i) => {
                        const img =
                            (media as Record<string, string | StaticImageData>)[
                                item.image
                                ];

                        const rating = Math.min(
                            5,
                            Math.max(1, item.rating ?? 5)
                        );

                        return (
                            <div key={i} className={styles.card}>
                                {/* ⭐ STARS */}
                                <div className={styles.rating}>
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={
                                                idx < rating
                                                    ? styles.starActive
                                                    : styles.star
                                            }
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>

                                <p className={styles.quote}>
                                    “{item.text}”
                                </p>

                                <div className={styles.user}>
                                    {img && (
                                        <Image
                                            src={
                                                typeof img === "string"
                                                    ? img
                                                    : img.src
                                            }
                                            alt={item.name}
                                            width={44}
                                            height={44}
                                        />
                                    )}
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        );
                    })}

                    {/*test deploy*/}

                </div>
            </div>
        </section>
    );
}
