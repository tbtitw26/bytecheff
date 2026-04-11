"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Media.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { media as mediaMap } from "@/resources/media";

interface MediaProps {
    src: string | StaticImageData;
    type?: "image" | "video";
    alt?: string;
    className?: string;
    objectFit?: "cover" | "contain" | "fill";
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    aspectRatio?: string;

    // 🆕 Нові пропси
    hoverEnabled?: boolean;
    hoverText?: string;
    hoverButton?: { text: string; link: string };
}

const Media: React.FC<MediaProps> = ({
                                         src,
                                         type = "image",
                                         alt = "media",
                                         className = "",
                                         objectFit = "cover",
                                         controls = true,
                                         autoPlay = false,
                                         loop = false,
                                         muted = false,
                                         aspectRatio = "16/9",
                                         hoverEnabled = false,
                                         hoverText,
                                         hoverButton,
                                     }) => {

    function resolveMedia(key?: string | StaticImageData): string | StaticImageData | undefined {
        if (key === undefined) return undefined;
        if (typeof key !== "string") return key;
        const entry = (mediaMap as Record<string, string | StaticImageData>)[key];
        return entry;
    }

    const resolvedSrc = type === "image" ? resolveMedia(src) : undefined;
    const isStaticImport =
        typeof resolvedSrc === "object" && resolvedSrc !== null && "src" in resolvedSrc;

    return (
        <div
            className={`${styles.mediaWrapper} ${hoverEnabled ? styles.hoverable : ""} ${className}`}
            style={{ aspectRatio }}
        >
            {type === "image" && resolvedSrc != null ? (
                <Image
                    src={resolvedSrc}
                    alt={alt}
                    fill
                    quality={95}
                    sizes="100vw"
                    style={{ objectFit }}
                    className={styles.image}
                    {...(isStaticImport && "blurDataURL" in resolvedSrc
                        ? {
                            placeholder: "blur" as const,
                            blurDataURL: resolvedSrc.blurDataURL,
                        }
                        : {})}
                />
            ) : type === "video" && typeof src === "string" ? (
                <video
                    src={src}
                    controls={controls}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    className={styles.video}
                    style={{ objectFit }}
                />
            ) : null}

            {/* 🧾 Hover Overlay */}
            {hoverEnabled && (hoverText || hoverButton) && (
                <div className={styles.overlay}>
                    {hoverText && <p className={styles.hoverText}>{hoverText}</p>}
                    {hoverButton && (
                        <a href={hoverButton.link}>
                            <ButtonUI
                                text={hoverButton.text}
                                color="primary"
                                variant="solid"
                                size="md"
                                hoverEffect="scale"
                            />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default Media;
