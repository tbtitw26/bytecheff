"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./InfoBlock.module.scss";
import { media } from "@/resources/media";

interface InfoBlockProps {
    eyebrow?: string;
    title: string;
    description?: string;
    image?: keyof typeof media; // ✅ як у всіх
    bullets?: readonly string[];
    variant?: "chef" | "ai";
}

const InfoBlock: React.FC<InfoBlockProps> = ({
                                                 eyebrow,
                                                 title,
                                                 description,
                                                 image,
                                                 bullets,
                                                 variant = "chef",
                                             }) => {
    const imageSrc = image ? media[image] : null;

    return (
        <motion.div
            className={`${styles.infoBlock} ${styles[variant]}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {imageSrc && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        quality={95}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            )}

            <div className={styles.content}>
                {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

                <h3 className={styles.title}>{title}</h3>

                {description && (
                    <p className={styles.description}>{description}</p>
                )}

                {bullets && (
                    <ul className={styles.bullets}>
                        {bullets.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
};

export default InfoBlock;
