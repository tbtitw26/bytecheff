"use client";

import React from "react";
import styles from "./SignUpAside.module.scss";
import {media} from "@/resources/media";
import Image from "next/image";

const avatars = [
    media.review1,
    media.review2,
    media.review3,
];

const SignUpAside: React.FC = () => {
    return (
        <aside className={styles.aside}>
            <span className={styles.badge}>Join our community</span>

            <h3 className={styles.title}>
                Master the art of cooking <br /> with CheffMate.
            </h3>

            <p className={styles.subtitle}>
                Join thousands of students learning from world-class chefs
                and our proprietary culinary AI.
            </p>

            <ul className={styles.features}>
                <li>
                    <span className={styles.icon}>✳</span>
                    <div>
                        <strong>Exclusive Courses</strong>
                        <p>Access 500+ recipes and techniques from Michelin-starred chefs.</p>
                    </div>
                </li>

                <li>
                    <span className={styles.icon}>◆</span>
                    <div>
                        <strong>Premium Tokens</strong>
                        <p>Buy tokens to unlock specialized masterclasses and live AI feedback.</p>
                    </div>
                </li>

                <li>
                    <span className={styles.icon}>●</span>
                    <div>
                        <strong>AI Sous-Chef</strong>
                        <p>Get real-time answers to your culinary questions 24/7.</p>
                    </div>
                </li>
            </ul>

            <div className={styles.socialProof}>
                <div className={styles.avatars}>
                    {avatars.map((img, index) => (
                        <div key={index} className={styles.avatar}>
                            <Image
                                src={img}
                                alt={`Chef avatar ${index + 1}`}
                                width={28}
                                height={28}
                                quality={90}
                            />
                        </div>
                    ))}
                </div>

                <span className={styles.socialText}>
                    Join 15,000+ active chefs-in-training
                </span>
            </div>
        </aside>
    );
};

export default SignUpAside;