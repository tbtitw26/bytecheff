"use client";

import React from "react";
import ProfileHead from "@/components/features/profile-head/ProfileHead";
import BalanceCard from "@/components/features/balance-card/BalanceCard";
import Dashboard from "@/components/features/dashboard/Dashboard";
import styles from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={styles.profilePage}>
            <section className={styles.overviewGrid}>
                <ProfileHead/>
                <BalanceCard/>
            </section>

            <section className={styles.workspaceFrame}>
                <div className={styles.workspaceHeader}>
                    <div>
                        <span className={styles.workspaceEyebrow}>Workspace</span>
                        <h2 className={styles.workspaceTitle}>Account activity and order management</h2>
                    </div>
                    <p className={styles.workspaceText}>
                        Review your requests, billing history, and account state from a single dashboard surface.
                    </p>
                </div>

                <Dashboard/>
            </section>
        </div>
    );
};

export default Profile;
