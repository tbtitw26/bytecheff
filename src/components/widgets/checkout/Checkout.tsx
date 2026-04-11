"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./Checkout.module.scss";
import { useCurrency } from "@/context/CurrencyContext";
import { useCheckoutStore } from "@/utils/store";
import { siteContent } from "@/resources/siteContent";

const TOKENS_PER_GBP = 100;

const Checkout = () => {
    const t = siteContent.checkout;
    const { plan, setPlan, clearPlan } = useCheckoutStore();
    const [activePlan, setActivePlan] = useState(plan);
    const { currency, sign, convertFromGBP, convertToGBP } = useCurrency();
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!plan) {
            const stored = localStorage.getItem("selectedPlan");
            if (stored) {
                const parsed = JSON.parse(stored);
                setPlan(parsed);
                setActivePlan(parsed);
            }
        } else {
            setActivePlan(plan);
        }
    }, [plan, setPlan]);

    if (!activePlan) {
        return (
            <div className={styles.checkoutEmpty}>
                <p>
                    {t.noPlanSelected}{" "}
                    <a href="/pricing">{t.pricing}</a>.
                </p>
            </div>
        );
    }

    const basePrice = useMemo(() => {
        return convertFromGBP(activePlan.price);
    }, [activePlan.price, convertFromGBP]);

    const vat = useMemo(() => basePrice * 0.2, [basePrice]);
    const total = useMemo(() => basePrice + vat, [basePrice, vat]);

    const amountForBackend = useMemo(() => {
        const gbp = activePlan.tokens / TOKENS_PER_GBP;
        return convertFromGBP(gbp);
    }, [activePlan.tokens, convertFromGBP]);

    const handlePay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreed || loading) return;

        try {
            setLoading(true);

            const res = await fetch("/api/user/buy-tokens", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    currency,
                    amount: amountForBackend,
                }),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message);
            }

            localStorage.removeItem("selectedPlan");
            clearPlan();
            window.location.href = "/profile";
        } catch {
            alert(t.paymentFailed);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.checkout}>
            <div className={styles.header}>
                <h1>{t.title}</h1>
                <p>{t.subtitle}</p>
            </div>

            <div className={styles.main}>
                <div className={styles.summary}>
                    <h2>{t.orderSummary}</h2>

                    <div className={styles.itemRow}>
                        <div className={styles.itemInfo}>
                            <h3>{activePlan.title}</h3>
                            <p>
                                {activePlan.tokens.toLocaleString('en-US')} {t.tokens}
                            </p>
                        </div>
                        <span>
                            {sign}
                            {basePrice.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.line} />

                    <div className={styles.itemRow}>
                        <p>{t.subtotal}</p>
                        <span>
                            {sign}
                            {basePrice.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.itemRow}>
                        <p>{t.vat}</p>
                        <span>
                            {sign}
                            {vat.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.totalRow}>
                        <h3>{t.total}</h3>
                        <h3>
                            {sign}
                            {total.toFixed(2)} {currency}
                        </h3>
                    </div>
                </div>

                <div className={styles.payment}>
                    <h2>{t.paymentDetails}</h2>

                    <form onSubmit={handlePay}>
                        <input type="text" placeholder={t.cardNumber} />
                        <div className={styles.row}>
                            <input type="text" placeholder={t.expiryDate} />
                            <input type="text" placeholder={t.cvv} />
                        </div>
                        <input type="text" placeholder={t.cardholderName} />
                        <input type="text" placeholder={t.billingAddress} />

                        <div className={styles.agreement}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) =>
                                        setAgreed(e.target.checked)
                                    }
                                />{" "}
                                {t.agreeTerms}{" "}
                                <a href="/terms" target="_blank">
                                    {t.termsLink}
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!agreed || loading}
                            className={styles.payButton}
                        >
                            {loading
                                ? t.processing
                                : `${t.pay} ${sign}${total.toFixed(
                                    2
                                )} ${currency}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
