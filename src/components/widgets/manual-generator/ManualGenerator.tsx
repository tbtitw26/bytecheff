"use client";

import React, {useState} from "react";
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
        badge: "LOW POINT COST",
        tokens: 1500,
        icon: "brain",
    },
    {
        id: "chef",
        title: "Chef-Led Course",
        desc: "Personalized feedback and video reviews from professional chefs. Premium curated experience.",
        badge: "PREMIUM FEEDBACK",
        tokens: 5000,
        icon: "chef",
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
    dietary: string[];
    dietaryOther: string;
    chefId?: string;
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
    return <div className={styles.iconCircle}>{renderIcon(icon)}</div>;
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
            onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true);
                try {
                    const payload = {
                        category: "training",
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
                } catch {
                    showAlert("Error", "Network or server issue", "error");
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({values, setFieldValue, errors, touched, isSubmitting}) => {
                const estimatedTokens = calcTotalTokens(values);

                const showOther =
                    values.dietary.includes("+AddOther") || values.dietary.includes("Other");

                const selectedPath = PATHS.find((item) => item.id === values.path);
                const selectedDuration = DURATIONS.find((item) => item.id === values.duration);
                const selectedChef = experts.find((chef) => chef.id === values.chefId);
                const selectedExtras = COURSE_EXTRAS.filter((extra) => values.extras.includes(extra.id));
                const dietaryPreview = normalizeDietary(values.dietary, values.dietaryOther);

                return (
                    <Form className={styles.page}>
                        <div className={styles.shell}>
                            <aside className={styles.introPanel}>
                                <div className={styles.introSurface}>
                                    <div className={styles.eyebrow}>Culinary Course Builder</div>
                                    <h1>Create a premium training flow for your next culinary goal</h1>
                                    <p className={styles.introText}>
                                        Configure learning style, pacing, dietary context, and PDF enhancements in one structured setup.
                                    </p>

                                    <div className={styles.heroMetrics}>
                                        <div className={styles.metricCard}>
                                            <span className={styles.metricLabel}>Delivery mode</span>
                                            <strong>{selectedPath?.title ?? "AI-Crafted Course"}</strong>
                                            <span>{values.path === "chef" ? "Reviewed by an expert" : "Instant AI output"}</span>
                                        </div>
                                        <div className={styles.metricCard}>
                                            <span className={styles.metricLabel}>Current duration</span>
                                            <strong>{selectedDuration?.label ?? "2 Weeks"}</strong>
                                            <span>{durationToWeeks(values.duration)} structured learning blocks</span>
                                        </div>
                                    </div>

                                    <div className={styles.featureStack}>
                                        <div className={styles.featureCard}>
                                            <span className={styles.featureKicker}>Why this flow</span>
                                            <p>
                                                The builder keeps curriculum choices, personalization, and downloadable add-ons separated so long-form setup stays easy to scan.
                                            </p>
                                        </div>
                                        <div className={styles.featureList}>
                                            <div className={styles.featureListItem}>Personalized culinary curriculum</div>
                                            <div className={styles.featureListItem}>AI or chef-guided delivery</div>
                                            <div className={styles.featureListItem}>Point estimate updates live</div>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            <div className={styles.builderPanel}>
                                <div className={styles.formCard}>
                                    <div className={styles.formHeader}>
                                        <div className={styles.formHeaderCopy}>
                                            <span className={styles.kicker}>Setup Flow</span>
                                            <h2>Course configuration</h2>
                                            <p>Complete each section below. All options and submission behavior remain the same.</p>
                                        </div>

                                        <div className={styles.formProgress} aria-hidden="true">
                                            <span>4 Sections</span>
                                            <div className={styles.progressTrack}>
                                                <div className={styles.progressFill}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.contentGrid}>
                                        <div className={styles.formSections}>
                                            <section className={styles.sectionCard}>
                                                <div className={styles.sectionHeading}>
                                                    <div className={styles.sectionBadge}>01</div>
                                                    <div>
                                                        <h3>Choose your learning path</h3>
                                                        <p>Select the course delivery model and, if needed, the reviewing chef.</p>
                                                    </div>
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
                                                                            <h4>{p.title}</h4>
                                                                            <span className={styles.radioMark}>
                                                                                <span className={active ? styles.radioOn : styles.radioOff}/>
                                                                            </span>
                                                                        </div>
                                                                        <p>{p.desc}</p>
                                                                    </div>
                                                                </div>

                                                                <div className={styles.pathBottom}>
                                                                    <span className={styles.badge}>{p.badge}</span>
                                                                    <span className={styles.tokens}>{p.tokens} Points</span>
                                                                </div>
                                                            </button>
                                                        );
                                                    })}
                                                </div>

                                                {values.path === "chef" && (
                                                    <motion.div
                                                        initial={{opacity: 0, y: 12}}
                                                        animate={{opacity: 1, y: 0}}
                                                        className={styles.fieldCluster}
                                                    >
                                                        <div className={styles.fieldMeta}>
                                                            <label className={styles.label}>Choose your chef</label>
                                                            <span className={styles.helperText}>Select who will review and personalize the course.</span>
                                                        </div>

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

                                            <section className={styles.sectionCard}>
                                                <div className={styles.sectionHeading}>
                                                    <div className={styles.sectionBadge}>02</div>
                                                    <div>
                                                        <h3>Define the course brief</h3>
                                                        <p>Capture the topic, level, and pacing of the course.</p>
                                                    </div>
                                                </div>

                                                <div className={styles.fieldCluster}>
                                                    <div className={styles.fieldMeta}>
                                                        <label className={styles.label}>What do you want to learn?</label>
                                                        <span className={styles.helperText}>Be specific so the curriculum focuses on the right techniques and outcomes.</span>
                                                    </div>

                                                    <div className={styles.inputWrap}>
                                                        <input
                                                            className={`${styles.input} ${touched.topic && errors.topic ? styles.inputError : ""}`}
                                                            value={values.topic}
                                                            onChange={(e) => setFieldValue("topic", e.target.value)}
                                                            placeholder="e.g. Mastering Sourdough, Thai Street Food, Italian Basics"
                                                        />
                                                        {touched.topic && errors.topic ? (
                                                            <span className={styles.errorText}>{errors.topic}</span>
                                                        ) : null}
                                                    </div>

                                                    <div className={styles.topicSuggestions}>
                                                        <span className={styles.suggestionLabel}>Quick starts</span>
                                                        <div className={styles.chips}>
                                                            {POPULAR_TOPICS.map((topic) => (
                                                                <button
                                                                    key={topic}
                                                                    type="button"
                                                                    className={styles.chip}
                                                                    onClick={() => setFieldValue("topic", topic)}
                                                                >
                                                                    {topic}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={styles.twoCols}>
                                                    <div className={styles.fieldCluster}>
                                                        <div className={styles.fieldMeta}>
                                                            <label className={styles.label}>Skill level</label>
                                                            <span className={styles.helperText}>Sets the difficulty and explanation depth inside the course.</span>
                                                        </div>

                                                        <div className={styles.segment}>
                                                            {(["beginner", "intermediate", "advanced"] as SkillLevel[]).map((lvl) => (
                                                                <button
                                                                    key={lvl}
                                                                    type="button"
                                                                    className={`${styles.segmentBtn} ${values.skill === lvl ? styles.segmentActive : ""}`}
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

                                                    <div className={styles.fieldCluster}>
                                                        <div className={styles.fieldMeta}>
                                                            <label className={styles.label}>Duration preference</label>
                                                            <span className={styles.helperText}>Longer courses add more structured weeks and point cost.</span>
                                                        </div>

                                                        <div className={styles.timelineRail}>
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
                                                                                className={`${styles.rangeMark} ${active ? styles.rangeMarkActive : ""}`}
                                                                                onClick={() => setFieldValue("duration", d.id)}
                                                                            >
                                                                                <span>{d.label}</span>
                                                                            </button>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <section className={styles.sectionCard}>
                                                <div className={styles.sectionHeading}>
                                                    <div className={styles.sectionBadge}>03</div>
                                                    <div>
                                                        <h3>Add dietary context</h3>
                                                        <p>Include restrictions so recommendations and course examples stay relevant.</p>
                                                    </div>
                                                </div>

                                                <div className={styles.fieldCluster}>
                                                    <div className={styles.fieldMeta}>
                                                        <label className={styles.label}>Dietary restrictions</label>
                                                        <span className={styles.helperText}>Choose predefined options or add a custom restriction.</span>
                                                    </div>

                                                    <div className={styles.pills}>
                                                        {DIETARY.map((d) => {
                                                            const active = values.dietary.includes(d);
                                                            return (
                                                                <button
                                                                    key={d}
                                                                    type="button"
                                                                    className={`${styles.pill} ${active ? styles.pillActive : ""}`}
                                                                    onClick={() => {
                                                                        if (d === "None") {
                                                                            setFieldValue("dietary", ["None"]);
                                                                            setFieldValue("dietaryOther", "");
                                                                            return;
                                                                        }

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
                                                </div>
                                            </section>

                                            <section className={styles.sectionCard}>
                                                <div className={styles.sectionHeading}>
                                                    <div className={styles.sectionBadge}>04</div>
                                                    <div>
                                                        <h3>Choose PDF enhancements</h3>
                                                        <p>Optional upgrades expand the delivered course without changing the core request.</p>
                                                    </div>
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

                                                                    <div className={styles.extraBottom}>+{extra.tokens} Points</div>
                                                                </button>
                                                            );
                                                        })}
                                                </div>
                                            </section>
                                        </div>

                                        <aside className={styles.summaryColumn}>
                                            <div className={styles.summaryCard}>
                                                <div className={styles.summaryHeader}>
                                                    <span className={styles.summaryEyebrow}>Live summary</span>
                                                    <h3>Course snapshot</h3>
                                                    <p>Review the current setup before saving the request.</p>
                                                </div>

                                                <div className={styles.summaryStack}>
                                                    <div className={styles.summaryItem}>
                                                        <span>Path</span>
                                                        <strong>{selectedPath?.title}</strong>
                                                    </div>
                                                    <div className={styles.summaryItem}>
                                                        <span>Topic</span>
                                                        <strong>{values.topic || "Not selected yet"}</strong>
                                                    </div>
                                                    <div className={styles.summaryItem}>
                                                        <span>Skill level</span>
                                                        <strong>{values.skill}</strong>
                                                    </div>
                                                    <div className={styles.summaryItem}>
                                                        <span>Duration</span>
                                                        <strong>{selectedDuration?.label}</strong>
                                                    </div>
                                                    <div className={styles.summaryItem}>
                                                        <span>Dietary profile</span>
                                                        <strong>{dietaryPreview.join(", ")}</strong>
                                                    </div>
                                                    {values.path === "chef" ? (
                                                        <div className={styles.summaryItem}>
                                                            <span>Chef</span>
                                                            <strong>{selectedChef?.fullName || "Not selected yet"}</strong>
                                                        </div>
                                                    ) : null}
                                                </div>

                                                <div className={styles.summaryExtras}>
                                                    <div className={styles.summarySubhead}>Enhancements</div>
                                                    {selectedExtras.length ? (
                                                        <div className={styles.summaryPills}>
                                                            {selectedExtras.map((extra) => (
                                                                <span key={extra.id} className={styles.summaryPill}>
                                                                    {extra.title}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <p className={styles.summaryEmpty}>No optional PDF enhancements selected.</p>
                                                    )}
                                                </div>

                                                <div className={styles.ctaPanel}>
                                                    <div className={styles.costBox}>
                                                        <span className={styles.costLabel}>Estimated total</span>
                                                        <div className={styles.costValue}>
                                                            <span>{estimatedTokens}</span>
                                                            <span className={styles.tokenText}>Points</span>
                                                        </div>
                                                    </div>

                                                    <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
                                                        {isSubmitting ? "Saving..." : "Save Draft"}
                                                    </button>

                                                    <div className={styles.reassurance}>
                                                        <span>100% Satisfaction Guarantee</span>
                                                        <span>24/7 AI Assistance</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
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
