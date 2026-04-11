"use client";

import React from "react";
import styles from "./HowItWorksSection.module.scss";
import { ICONS } from "@/resources/icons";
import type { IconKey } from "@/resources/icons";

interface Step {
    icon?: IconKey;
    title?: string;
    description?: string;
}

interface Highlight {
    title: string;
    description?: string;
}

interface HowItWorksSectionProps {
    label?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    steps?: Step[];
    highlights?: Highlight[];
    note?: React.ReactNode;
}

export default function HowItWorksSection({
                                              label,
                                              title,
                                              description,
                                              steps,
                                              highlights,
                                              note,
                                          }: HowItWorksSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                {(label || title || description || highlights?.length) && (
                    <div className={styles.left}>
                        <div className={styles.leftTop}>
                            {label && <span className={styles.label}>{label}</span>}
                            {title && <h2 className={styles.title}>{title}</h2>}
                            {description && (
                                <div className={styles.description}>{description}</div>
                            )}
                        </div>

                        {highlights?.length ? (
                            <ul className={styles.highlights}>
                                {highlights.map((item, i) => (
                                    <li key={i} className={styles.highlightItem}>
                                        <span className={styles.check}>✓</span>
                                        <div className={styles.highlightContent}>
                                            <strong>{item.title}</strong>
                                            {item.description && <p>{item.description}</p>}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                )}

                {(steps?.length || note) && (
                    <div className={styles.right}>
                        <div className={styles.timelineCard}>
                            {steps?.length ? (
                                <div className={styles.steps}>
                                    {steps.map((step, i) => {
                                        const Icon = step.icon ? ICONS[step.icon] : null;
                                        const stepNumber = String(i + 1).padStart(2, "0");

                                        return (
                                            <div key={i} className={styles.step}>
                                                <div className={styles.stepRail}>
                                                    <span className={styles.stepNumber}>{stepNumber}</span>
                                                    <span className={styles.railLine} />
                                                </div>

                                                <div className={styles.stepBody}>
                                                    {Icon && (
                                                        <div className={styles.iconWrapper}>
                                                            <Icon />
                                                        </div>
                                                    )}

                                                    <div className={styles.stepText}>
                                                        {step.title && <strong>{step.title}</strong>}
                                                        {step.description && <p>{step.description}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : null}

                            {note && (
                                <div className={styles.note}>
                                    <span className={styles.noteIcon}>i</span>
                                    <div className={styles.noteText}>{note}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}