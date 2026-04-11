"use client";

import React from "react";
import styles from "./FeatureStepsWrapper.module.scss";

const FeatureStepsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.steps}>{children}</div>
            </div>
        </section>
    );
};

export default FeatureStepsWrapper;
