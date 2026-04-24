"use client";

import React from "react";
import { useAllOrders } from "@/context/AllOrdersContext";
import styles from "./AllOrders.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import { downloadUniversalPDF } from "@/pdf-creator/PdfCreator";
import { UniversalOrderUI } from "@/types/universal-order";

const AllOrders: React.FC = () => {
    const { aiOrders, loading, refreshOrders } = useAllOrders();
    const orders = aiOrders as unknown as UniversalOrderUI[];

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    const formatDateTime = (dateStr?: string) => {
        if (!dateStr) return "Not scheduled";

        return new Date(dateStr).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatId = (id: string) => id.slice(-6);

    const timeLeft = (dateStr?: string) => {
        if (!dateStr) return "Waiting";
        const ms = new Date(dateStr).getTime() - Date.now();
        if (ms <= 0) return "Ready soon";

        const h = Math.floor(ms / 3600000);
        const m = Math.floor((ms % 3600000) / 60000);
        return `${h}h ${m}m left`;
    };

    const isReady = (order: UniversalOrderUI) => order.status === "ready";

    const getStatusLabel = (order: UniversalOrderUI) => {
        if (order.status === "ready") return "Ready";
        if (order.status === "processing") return "Processing";
        if (order.status === "failed") return order.lastError ? `Failed: ${order.lastError}` : "Failed";
        if (order.status === "pending" || order.status === "queued") {
            return `Queued • ${timeLeft(order.scheduledFor || order.readyAt)}`;
        }

        return order.status;
    };

    const getActionLabel = (order: UniversalOrderUI) => {
        if (order.status === "ready") return "Download";
        if (order.status === "processing") return "Processing";
        if (order.status === "failed") return "Unavailable";
        return "Queued";
    };

    const handleDownload = async (order: UniversalOrderUI) => {
        try {
            if (!isReady(order)) {
                return;
            }

            if (order.extrasData && Object.keys(order.extrasData).length > 0) {
                await downloadUniversalPDF(order as any);
                return;
            }

            const res = await fetch(`/api/universal/get-order?id=${order._id}`);
            const data = await res.json();

            if (data?.order) {
                await downloadUniversalPDF(data.order);
            }
        } catch (e) {
            console.error("❌ Download error", e);
        }
    };

    if (loading) {
        return <p className={styles.loading}>Loading orders…</p>;
    }

    if (orders.length === 0) {
        return (
            <div className={styles.empty}>
                <p>No orders yet.</p>
                <Link href="/dashboard">
                    <ButtonUI size="md" color="primary">
                        Create your first order
                    </ButtonUI>
                </Link>
            </div>
        );
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <div>
                    <h3>Your Orders</h3>
                    <p>Generated content and downloads</p>
                </div>

                <ButtonUI size="sm" onClick={refreshOrders}>
                    Refresh
                </ButtonUI>
            </header>

            <div className={styles.table}>
                {/* TABLE HEAD */}
                <div className={styles.head}>
                    <span>ID</span>
                    <span>Email</span>
                    <span>Date</span>
                    <span>Points</span>
                    <span>Status</span>
                    <span className={styles.actionsHead}>Actions</span>
                </div>

                {/* TABLE ROWS */}
                {orders.map((order) => (
                    <div className={styles.row} key={order._id}>
                        <span className={styles.id}>
                            #{formatId(order._id)}
                        </span>

                        <span className={styles.email}>
                            {order.email}
                        </span>

                        <span className={styles.date}>
                            {formatDate(order.createdAt)}
                        </span>

                        <span className={styles.tokens}>
                            -{order.totalTokens}
                        </span>

                        <span className={styles.date} title={formatDateTime(order.scheduledFor || order.readyAt)}>
                            {getStatusLabel(order)}
                        </span>

                        <div className={styles.actions}>
                            <button
                                type="button"
                                className={styles.download}
                                disabled={!isReady(order)}
                                onClick={() => handleDownload(order)}
                            >
                                {getActionLabel(order)}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllOrders;
