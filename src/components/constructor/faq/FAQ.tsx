"use client";

import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.scss";
import { siteContent } from "@/resources/siteContent";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: readonly FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
    const title = siteContent.home.common.faqTitle;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) =>
        setOpenIndex(openIndex === idx ? null : idx);

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.sidebar}>
                    <span className={styles.kicker}>Support</span>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.intro}>
                        Everything you may want to know before getting started,
                        explained in a clearer and more structured way.
                    </p>
                </div>

                <div className={styles.list}>
                    {items.map((item, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                layout
                                className={`${styles.item} ${isOpen ? styles.active : ""}`}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <button
                                    className={styles.question}
                                    onClick={() => toggle(idx)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${idx}`}
                                >
                                    <span className={styles.index}>
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>

                                    <span className={styles.questionText}>
                                        {item.question}
                                    </span>

                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0, y: isOpen ? 1 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className={styles.arrow}
                                    >
                                        <IoIosArrowDown />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-answer-${idx}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className={styles.answerWrapper}
                                        >
                                            <div className={styles.answerInner}>
                                                <div className={styles.answer}>
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
