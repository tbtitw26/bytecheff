"use client";

import React, {useMemo, useState} from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {motion} from "framer-motion";
import styles from "./ManualGenerator.module.scss";
import {useAlert} from "@/context/AlertContext";
import {useUser} from "@/context/UserContext";
import {experts} from "@/data/experts";
import {media} from "@/resources/media";
import {IconKey} from "@/resources/icons";
import {renderIcon} from "@/utils/renderIcon";
import {COURSE_EXTRAS} from "@/components/widgets/manual-generator/cook-extra/cook-extra";

type CoursePath = "ai" | "chef";
type SkillLevel = "beginner" | "intermediate" | "advanced";
type Duration = "1w" | "2w" | "3w" | "1m";

const PATHS: Array<{
    id: CoursePath;
    title: string;
    desc: string;
    badge: string;
    tokens: number;
    icon: IconKey;
}> = [
    {
        id: "ai",
        title: "AI-Crafted Course",
        desc: "Instant, data-driven curriculum available 24/7. Tailored to your specific goals through advanced culinary algorithms.",
        badge: "LOW TOKEN COST",
        tokens: 1500,
        icon: "brain", // 🧠 FaBrain
    },
    {
        id: "chef",
        title: "Chef-Led Course",
        desc: "Personalized feedback and video reviews from professional chefs. Premium curated experience.",
        badge: "PREMIUM FEEDBACK",
        tokens: 5000,
        icon: "chef", // 👨‍🍳 PiChefHatFill
    },
];

const POPULAR_TOPICS = ["Pastry Arts", "Knife Skills", "Plant-Based Cooking"];

const DIETARY = ["None", "Vegan", "Gluten-Free", "Keto", "Dairy-Free"] as const;

const DURATIONS: Array<{ id: Duration; label: string }> = [
    {id: "1w", label: "1 Week"},
    {id: "2w", label: "2 Weeks"},
    {id: "3w", label: "3 Weeks"},
    {id: "1m", label: "1 Month"},
];

interface Values {
    path: CoursePath;
    topic: string;
    skill: SkillLevel;
    duration: Duration;
    dietary: string[]; // DIETARY + custom
    dietaryOther: string;
    chefId?: string; // 👈 НОВЕ
    extras: string[];

}

const schema = Yup.object({
    path: Yup.mixed<CoursePath>().oneOf(["ai", "chef"]).required(),
    topic: Yup.string().trim().min(3, "Enter at least 3 characters").required("Required"),
    skill: Yup.mixed<SkillLevel>().oneOf(["beginner", "intermediate", "advanced"]).required(),
    duration: Yup.mixed<Duration>().oneOf(["1w", "2w", "3w", "1m"]).required(),
    dietary: Yup.array().of(Yup.string()).required(),
    dietaryOther: Yup.string(),
});

function PathIcon({icon}: { icon: IconKey; active: boolean; }) {
    return (
        <div className={styles.iconCircle}>
            {renderIcon(icon)}
        </div>
    );
}

function ChefValue({chefId}: { chefId: string }) {
    const chef = experts.find((c) => c.id === chefId);
    if (!chef) return null;

    return (
        <div className={styles.chefValue}>
            <img
                src={media[chef.avatar].src}
                alt={chef.fullName}
                className={styles.chefAvatar}
            />
            <span>{chef.fullName}</span>
        </div>
    );
}

export default function CourseGeneratorForm() {
    const {showAlert} = useAlert();
    const user = useUser();
    const [chefOpen, setChefOpen] = useState(false);

    const initialValues: Values = {
        path: "ai",
        topic: "",
        skill: "beginner",
        duration: "2w",
        dietary: ["None"],
        dietaryOther: "",
        extras: [],
    };

    const FREE_WEEKS = 1;

    function durationToWeeks(d: Duration) {
        if (d === "1w") return 1;
        if (d === "2w") return 2;
        if (d === "3w") return 3;
        return 4;
    }

    function calcDurationTokens(path: CoursePath, duration: Duration) {
        const weeks = durationToWeeks(duration);
        const extraWeeks = Math.max(0, weeks - FREE_WEEKS);

        if (path === "chef") {
            return extraWeeks * 1000;
        }

        return extraWeeks * 500;
    }

    function calcTotalTokens(values: Values) {
        const pathTokens =
            PATHS.find((p) => p.id === values.path)?.tokens ?? 0;

        const durationTokens = calcDurationTokens(
            values.path,
            values.duration
        );

        const extrasTokens = COURSE_EXTRAS
            .filter((e) => values.extras.includes(e.id))
            .reduce((sum, e) => sum + e.tokens, 0);

        return pathTokens + durationTokens + extrasTokens;
    }

    return (
        <Formik<Values>
            initialValues={initialValues}
            validationSchema={schema}
            validateOnMount
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                try {
                    const payload = {
                        // 🔑 бек уже знає training
                        category: "training",

                        // 🔑 AI vs Chef → default vs reviewed
                        planType: values.path === "chef" ? "reviewed" : "default",

                        language: "English",
                        extras: values.extras,
                        totalTokens: calcTotalTokens(values),
                        email: user?.email,

                        fields: {
                            domain: "culinary",
                            deliveryMode: values.path === "chef" ? "expert" : "ai",

                            topic: values.topic,
                            skillLevel: values.skill,
                            durationWeeks: durationToWeeks(values.duration),
                            dietary: normalizeDietary(values.dietary, values.dietaryOther),

                            chef:
                                values.path === "chef"
                                    ? experts.find(c => c.id === values.chefId)?.fullName
                                    : undefined,
                        },
                    };

                    const res = await fetch("/api/universal/create-order", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        credentials: "include",
                        body: JSON.stringify(payload),
                    });

                    const data = await res.json();
                    if (res.ok) {
                        const status = data?.order?.status;
                        const message =
                            status === "queued"
                                ? "Course request queued. Your recipe will be delivered in 2-4 hours."
                                : "Course request saved and ready immediately.";
                        showAlert("Success", message, "success");
                    } else {
                        showAlert("Error", data?.message || "Failed to save", "error");
                    }
                } catch (e) {
                    showAlert("Error", "Network or server issue", "error");
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({values, setFieldValue, errors, touched, isSubmitting}) => {
                 const estimatedTokens = useMemo(
                     () => calcTotalTokens(values),
                     [values.path, values.duration, values.extras]
                 );

                 const showOther =
                     values.dietary.includes("+AddOther") || values.dietary.includes("Other");

                 return (
                     <Form className={styles.page}>
                         <div className={styles.card}>
                            {/* Header */}
                            <div className={styles.header}>
                                <div>
                                    <h1>Create Your Personalized Course</h1>
                                    <p>Configure your perfect culinary learning experience</p>
                                </div>
                            </div>

                            {/* Step 1 */}
                            <section className={styles.section}>
                                <div className={styles.sectionTitle}>
                                    <span className={styles.stepDot}>1</span>
                                    <h2>Step 1: Choose Your Path</h2>
                                </div>

                                <div className={styles.pathGrid}>
                                    {PATHS.map((p) => {
                                        const active = values.path === p.id;

                                        return (
                                            <button
                                                key={p.id}
                                                type="button"
                                                className={`${styles.pathCard} ${active ? styles.pathActive : ""}`}
                                                onClick={() => {
                                                    setFieldValue("path", p.id);
                                                    if (p.id === "ai") setFieldValue("chefId", undefined);
                                                }}
                                            >
                                                <div className={styles.pathTop}>
                                                    <PathIcon icon={p.icon} active={active}/>

                                                    <div className={styles.pathMeta}>
                                                        <div className={styles.pathTitleRow}>
                                                            <h3>{p.title}</h3>
                                                            <span className={styles.radioMark}>
                <span className={active ? styles.radioOn : styles.radioOff}/>
              </span>
                                                        </div>
                                                        <p>{p.desc}</p>
                                                    </div>
                                                </div>

                                                <div className={styles.pathBottom}>
                                                    <span className={styles.badge}>{p.badge}</span>
                                                    <span className={styles.tokens}>{p.tokens} Tokens</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                                {values.path === "chef" && (
                                    <motion.div
                                        initial={{opacity: 0, y: 12}}
                                        animate={{opacity: 1, y: 0}}
                                        className={styles.chefSelect}
                                    >
                                        <label className={styles.label}>Choose Your Chef</label>

                                        <div className={styles.chefDropdown}>
                                            <button
                                                type="button"
                                                className={styles.chefTrigger}
                                                onClick={() => setChefOpen((v) => !v)}
                                            >
                                                {values.chefId ? (
                                                    <ChefValue chefId={values.chefId}/>
                                                ) : (
                                                    <span className={styles.chefPlaceholder}>Select a chef</span>
                                                )}
                                                <span className={styles.chevron}>▾</span>
                                            </button>

                                            {chefOpen && (
                                                <div className={styles.chefMenu}>
                                                    {experts.map((chef) => (
                                                        <button
                                                            key={chef.id}
                                                            type="button"
                                                            className={styles.chefItem}
                                                            onClick={() => {
                                                                setFieldValue("chefId", chef.id);
                                                                setChefOpen(false);
                                                            }}
                                                        >
                                                            <img
                                                                src={media[chef.avatar].src}
                                                                alt={chef.fullName}
                                                                className={styles.chefAvatar}
                                                            />
                                                            <div>
                                                                <div className={styles.chefName}>{chef.fullName}</div>
                                                                <div className={styles.chefSub}>
                                                                    ⭐ {chef.rating} · {chef.subtitle}
                                                                </div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                            </section>

                            {/* Step 2 */}
                            <section className={styles.section}>
                                <div className={styles.sectionTitle}>
                                    <span className={styles.stepDot}>2</span>
                                    <h2>Step 2: Course Details</h2>
                                </div>

                                <label className={styles.label}>What do you want to learn?</label>
                                <div className={styles.inputWrap}>
                                    <input
                                        className={`${styles.input} ${
                                            touched.topic && errors.topic ? styles.inputError : ""
                                        }`}
                                        value={values.topic}
                                        onChange={(e) => setFieldValue("topic", e.target.value)}
                                        placeholder="e.g. Mastering Sourdough, Thai Street Food, Italian Basics"
                                    />
                                </div>

                                <div className={styles.chipsRow}>
                                    <span className={styles.chipsLabel}>Popular</span>
                                    <div className={styles.chips}>
                                        {POPULAR_TOPICS.map((t) => (
                                            <button
                                                key={t}
                                                type="button"
                                                className={styles.chip}
                                                onClick={() => setFieldValue("topic", t)}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.twoCols}>
                                    {/* Skill */}
                                    <div>
                                        <label className={styles.label}>Skill Level</label>
                                        <div className={styles.segment}>
                                            {(["beginner", "intermediate", "advanced"] as SkillLevel[]).map((lvl) => (
                                                <button
                                                    key={lvl}
                                                    type="button"
                                                    className={`${styles.segmentBtn} ${
                                                        values.skill === lvl ? styles.segmentActive : ""
                                                    }`}
                                                    onClick={() => setFieldValue("skill", lvl)}
                                                >
                                                    {lvl === "beginner"
                                                        ? "Beginner"
                                                        : lvl === "intermediate"
                                                            ? "Intermediate"
                                                            : "Advanced"}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div>
                                        <label className={styles.label}>Duration Preference</label>

                                        <div className={styles.rangeWrap}>
                                            <div className={styles.rangeLine}/>
                                            <div
                                                className={styles.rangeThumb}
                                                style={{left: `${durationToPercent(values.duration)}%`}}
                                            />
                                            <div className={styles.rangeMarks}>
                                                {DURATIONS.map((d) => {
                                                    const active = values.duration === d.id;
                                                    return (
                                                        <button
                                                            key={d.id}
                                                            type="button"
                                                            className={`${styles.rangeMark} ${
                                                                active ? styles.rangeMarkActive : ""
                                                            }`}
                                                            onClick={() => setFieldValue("duration", d.id)}
                                                        >
                                                            {d.label}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Step 3 */}
                            <section className={styles.section}>
                                <div className={styles.sectionTitle}>
                                    <span className={styles.stepDot}>3</span>
                                    <h2>Step 3: Personalization</h2>
                                </div>

                                <label className={styles.label}>Dietary Restrictions</label>

                                <div className={styles.pills}>
                                    {DIETARY.map((d) => {
                                        const active = values.dietary.includes(d);
                                        return (
                                            <button
                                                key={d}
                                                type="button"
                                                className={`${styles.pill} ${active ? styles.pillActive : ""}`}
                                                onClick={() => {
                                                    // "None" — взаємовиключне
                                                    if (d === "None") {
                                                        setFieldValue("dietary", ["None"]);
                                                        setFieldValue("dietaryOther", "");
                                                        return;
                                                    }

                                                    // якщо тикаємо не None — прибираємо None
                                                    const base = values.dietary.filter((x) => x !== "None");

                                                    if (active) {
                                                        setFieldValue(
                                                            "dietary",
                                                            base.filter((x) => x !== d)
                                                        );
                                                    } else {
                                                        setFieldValue("dietary", [...base, d]);
                                                    }
                                                }}
                                            >
                                                {d}
                                            </button>
                                        );
                                    })}

                                    <button
                                        type="button"
                                        className={`${styles.pill} ${showOther ? styles.pillActive : ""}`}
                                        onClick={() => {
                                            const has = showOther;
                                            const cleared = values.dietary.filter((x) => x !== "+AddOther" && x !== "Other");
                                            setFieldValue("dietary", has ? cleared : [...cleared.filter((x) => x !== "None"), "+AddOther"]);
                                        }}
                                    >
                                        + Add Other
                                    </button>
                                </div>

                                {showOther && (
                                    <motion.div
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        className={styles.otherRow}
                                    >
                                        <input
                                            className={styles.input}
                                            value={values.dietaryOther}
                                            onChange={(e) => setFieldValue("dietaryOther", e.target.value)}
                                            placeholder="Type your restriction (e.g. Nut-Free)"
                                        />
                                    </motion.div>
                                )}
                            </section>

                            <section className={styles.section}>
                                <div className={styles.sectionTitle}>
                                    <span className={styles.stepDot}>4</span>
                                    <h2>Step 4: PDF Enhancements</h2>
                                </div>

                                <div className={styles.extrasGrid}>
                                    {COURSE_EXTRAS
                                        .filter((e) => !e.chefOnly || values.path === "chef")
                                        .map((extra) => {
                                            const active = values.extras.includes(extra.id);

                                            return (
                                                <button
                                                    key={extra.id}
                                                    type="button"
                                                    className={`${styles.extraCard} ${active ? styles.extraActive : ""}`}
                                                    onClick={() => {
                                                        setFieldValue(
                                                            "extras",
                                                            active
                                                                ? values.extras.filter((id) => id !== extra.id)
                                                                : [...values.extras, extra.id]
                                                        );
                                                    }}
                                                >
                                                    <div className={styles.extraTop}>
                                                        <div className={styles.iconCircle}>
                                                            {renderIcon(extra.icon)}
                                                        </div>
                                                        <div>
                                                            <h4>{extra.title}</h4>
                                                            <p>{extra.description}</p>
                                                        </div>
                                                    </div>

                                                    <div className={styles.extraBottom}>
                                                        +{extra.tokens} Tokens
                                                    </div>
                                                </button>
                                            );
                                        })}
                                </div>
                            </section>

                            {/* Footer */}
                            <div className={styles.footer}>
                                <div className={styles.costBox}>
                                    <div className={styles.costLabel}>ESTIMATED COST</div>
                                    <div className={styles.costValue}>
                                        <span className={styles.tokenDot}/>
                                        <span>{estimatedTokens}</span>
                                        <span className={styles.tokenText}>Tokens</span>
                                    </div>
                                </div>

                                <div className={styles.actions}>
                                    <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
                                        {isSubmitting ? "Saving..." : "Save Draft"}
                                    </button>
                                </div>
                            </div>

                            <div className={styles.micro}>
                                <span>✅ 100% Satisfaction Guarantee</span>
                                <span>🕒 24/7 AI Assistance</span>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

function durationToPercent(d: Duration) {
    if (d === "1w") return 0;
    if (d === "2w") return 33;
    if (d === "3w") return 66;
    return 100;
}

function normalizeDietary(dietary: string[], other: string) {
    const base = dietary.filter((x) => x !== "+AddOther" && x !== "Other" && x !== "None");
    if (dietary.includes("None")) return ["None"];
    if (other.trim()) return [...base, other.trim()];
    return base.length ? base : ["None"];
}
