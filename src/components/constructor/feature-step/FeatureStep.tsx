"use client";

import styles from "./FeatureStep.module.scss";
import Image from "next/image";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { media } from "@/resources/media";
import { IoIosArrowRoundForward } from "react-icons/io";

interface FeatureStepProps {
    step: number;
    title: string;
    description?: string;
    bullets?: readonly string[];
    image: keyof typeof media;
    badge?: string;
    buttonText?: string;
    buttonLink?: string;
    imagePosition?: "left" | "right";
}

const FeatureStep: React.FC<FeatureStepProps> = ({
    step,
    title,
    description,
    bullets,
    image,
    badge,
    buttonText,
    buttonLink,
    imagePosition = "left",
}) => {
    return (
        <article className={styles.step}>
            <div
                className={`${styles.stage} ${
                    imagePosition === "right" ? styles.stageRight : styles.stageLeft
                }`}
            >
                <div className={styles.mediaWrap}>
                    <Image
                        src={media[image]}
                        alt={title}
                        fill
                        className={styles.image}
                    />
                </div>

                <div className={styles.introPanel}>
                    <div className={styles.metaRow}>
                        <span className={styles.stepLabel}>Step {String(step).padStart(2, "0")}</span>
                        {badge && <span className={styles.badge}>{badge}</span>}
                    </div>

                    <h3 className={styles.title}>{title}</h3>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.descriptionBlock}>
                    {description && <p className={styles.description}>{description}</p>}
                </div>

                {(bullets?.length || (buttonText && buttonLink)) && (
                    <div className={styles.supporting}>
                        {bullets?.length ? (
                            <ul className={styles.bullets}>
                                {bullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                ))}
                            </ul>
                        ) : (
                            <div />
                        )}

                        {buttonText && buttonLink && (
                            <div className={styles.actions}>
                                <ButtonUI
                                    variant="plain"
                                    shape="default"
                                    hoverEffect="none"
                                    hoverColor="none"
                                    endIcon={<IoIosArrowRoundForward style={{ fontSize: 24 }} />}
                                    onClick={() => {
                                        window.location.href = buttonLink;
                                    }}
                                >
                                    {buttonText}
                                </ButtonUI>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};

export default FeatureStep;
