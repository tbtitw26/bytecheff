"use client";

import React, { useState } from "react";
import AllOrders from "@/components/widgets/all-orders/AllOrders";
import TransactionHistory from "@/components/widgets/all-transactions/AllTransactions";
import styles from "./Dashboard.module.scss";
import { siteContent } from "@/resources/siteContent";

export default function Dashboard() {
    const t = siteContent.profile.dashboard;
    const [activeTab, setActiveTab] = useState<"orders" | "transactions">("orders");

    return (
        <section className={styles.dashboard}>
            <div className={styles.dashboardHeader}>
                <div className={styles.headerCopy}>
                    <span className={styles.eyebrow}>Operations</span>
                    <h3>Track your activity</h3>
                    <p>Switch between order progress and payment history without leaving your workspace.</p>
                </div>

                <nav className={styles.tabs} aria-label="Dashboard sections">
                    <button
                        className={activeTab === "orders" ? styles.active : ""}
                        onClick={() => setActiveTab("orders")}
                    >
                        <span className={styles.tabLabel}>{t.tabs.orders}</span>
                        <span className={styles.tabHint}>Requests and fulfillment</span>
                    </button>
                    <button
                        className={activeTab === "transactions" ? styles.active : ""}
                        onClick={() => setActiveTab("transactions")}
                    >
                        <span className={styles.tabLabel}>{t.tabs.transactions}</span>
                        <span className={styles.tabHint}>Billing and token activity</span>
                    </button>
                </nav>
            </div>

            <div className={styles.contentShell}>
                <div className={styles.content}>
                    {activeTab === "orders" ? <AllOrders /> : <TransactionHistory />}
                </div>
            </div>
        </section>
    );
}
