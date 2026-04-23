"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./TeamGrid.module.scss";
import Text from "@/components/constructor/text/Text";
import { media } from "@/resources/media";

interface TeamMember {
    name: string;
    role: string;
    image: keyof typeof media; // ✅ строго ключ з media
}

interface TeamGridProps {
    title?: string;
    description?: string;
    members: TeamMember[];
    viewAllText?: string;
    viewAllLink?: string;
}

const TeamGrid: React.FC<TeamGridProps> = ({
                                               title,
                                               description,
                                               members,
                                               viewAllText = "View all chefs →",
                                               viewAllLink = "/chefs",
                                           }) => {
    return (
        <section className={styles.section}>
            <div className={styles.head}>
                <div className={styles.headText}>
                    <Text
                        title={title}
                        titleLevel={2}
                        description={description}
                    />
                </div>

                {viewAllLink && (
                    <Link href={viewAllLink} className={styles.viewAll}>
                        {viewAllText}
                    </Link>
                )}
            </div>

            <div className={styles.grid}>
                {members.map((m, i) => {
                    // ✅ КЛЮЧОВЕ ВИПРАВЛЕННЯ
                    const img = media[m.image] as StaticImageData;

                    return (
                        <motion.div
                            key={`${m.name}-${i}`}
                            className={styles.card}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.avatar}>
                                <Image
                                    src={img}
                                    alt={m.name}
                                    fill
                                    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc((100vw - 72px) / 2), 410px"
                                    quality={95}
                                    priority={i < 2}
                                    className={styles.image}
                                />
                            </div>

                            <h3 className={styles.name}>{m.name}</h3>
                            <span className={styles.role}>{m.role}</span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default TeamGrid;
