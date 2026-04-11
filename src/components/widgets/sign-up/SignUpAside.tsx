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
            <span className={styles.badge}>Bli med i fellesskapet vårt</span>

            <h3 className={styles.title}>
                Mestre kunsten å lage mat <br /> med CheffMate.
            </h3>

            <p className={styles.subtitle}>
                Bli med tusenvis av studenter som lærer av kokker i verdensklasse
                og vår egen kulinariske KI.
            </p>

            <ul className={styles.features}>
                <li>
                    <span className={styles.icon}>✳</span>
                    <div>
                        <strong>Eksklusive kurs</strong>
                        <p>Få tilgang til 500+ oppskrifter og teknikker fra Michelin-kokker.</p>
                    </div>
                </li>

                <li>
                    <span className={styles.icon}>◆</span>
                    <div>
                        <strong>Premium-tokens</strong>
                        <p>Kjøp tokens for å låse opp spesialiserte mesterklasser og KI-tilbakemeldinger i sanntid.</p>
                    </div>
                </li>

                <li>
                    <span className={styles.icon}>●</span>
                    <div>
                        <strong>KI-soussjef</strong>
                        <p>Få svar på dine kulinariske spørsmål i sanntid, døgnet rundt.</p>
                    </div>
                </li>
            </ul>

            <div className={styles.socialProof}>
                <div className={styles.avatars}>
                    {avatars.map((img, index) => (
                        <div key={index} className={styles.avatar}>
                            <Image
                                src={img}
                                alt={`Kokkavatar ${index + 1}`}
                                width={28}
                                height={28}
                                quality={90}
                            />
                        </div>
                    ))}
                </div>

                <span className={styles.socialText}>
                    Bli med 15 000+ aktive kokker under opplæring
                </span>
            </div>
        </aside>
    );
};

export default SignUpAside;
