"use client";

import {useMemo, useState} from "react";
import ExpertCard from "@/components/extra/experts/expert-card/Card";
import {experts} from "@/data/experts";
import ExpertsFilterBar from "@/components/extra/experts/expert-filter-bar/ExpertFilterBar";
import HeroSection from "@/components/constructor/hero/Hero";
import { siteContent } from "@/resources/siteContent";
import { getTranslatedExpert } from "@/resources/expertTranslations";
import styles from "./page.module.scss";

export default function Page() {
    const t = siteContent.chefs;
    const translatedExperts = useMemo(
        () => experts.map((expert) => getTranslatedExpert(expert)),
        []
    );
    const [search, setSearch] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [level, setLevel] = useState("");

    const cuisines = useMemo(() => {
        return Array.from(
            new Set(translatedExperts.flatMap((e) => e.specialties))
        ).sort();
    }, [translatedExperts]);

    const filteredExperts = useMemo(() => {
        return translatedExperts.filter((translatedExpert) => {
            const byName =
                translatedExpert.fullName.toLowerCase().includes(search.toLowerCase()) ||
                translatedExpert.specialties.some((s) =>
                    s.toLowerCase().includes(search.toLowerCase())
                );

            const byCuisine =
                !cuisine || translatedExpert.specialties.includes(cuisine);

            const byLevel =
                !level || translatedExpert.experienceLevel === level;

            return byName && byCuisine && byLevel;
        });
    }, [search, cuisine, level, translatedExperts]);

    const activeFilters = [search, cuisine, level].filter(Boolean);
    const resultsLabel = t.results.showing.replace("{count}", String(filteredExperts.length));

    return (
        <>
            <HeroSection
                title={
                    <>
                        {t.hero.title.split(t.hero.titleHighlight)[0]}
                        <span>{t.hero.titleHighlight}</span>
                        {t.hero.title.split(t.hero.titleHighlight)[1]}
                    </>
                }
                description={t.hero.description}
                image="image18"
            />

            <main className={styles.page}>
                <section className={styles.directorySection}>
                    <div className={styles.directoryIntro}>
                        <span className={styles.eyebrow}>{t.directory.label}</span>
                        <h2 className={styles.directoryTitle}>{t.directory.title}</h2>
                        <p className={styles.directoryDescription}>{t.directory.description}</p>
                    </div>

                    <ExpertsFilterBar
                        search={search}
                        onSearchChange={setSearch}
                        cuisine={cuisine}
                        onCuisineChange={setCuisine}
                        level={level}
                        onLevelChange={setLevel}
                        cuisines={cuisines}
                    />

                    <div className={styles.resultsHeader}>
                        <p className={styles.resultsLabel}>{resultsLabel}</p>
                        {activeFilters.length > 0 && (
                            <div className={styles.activeFilterList} aria-label={t.results.showing}>
                                {search && <span className={styles.activeFilterChip}>{search}</span>}
                                {cuisine && <span className={styles.activeFilterChip}>{cuisine}</span>}
                                {level && (
                                    <span className={styles.activeFilterChip}>
                                        {t.filter.expertiseOptions[level as keyof typeof t.filter.expertiseOptions]}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {filteredExperts.length > 0 ? (
                        <div className={styles.chefGrid}>
                            {filteredExperts.map((expert) => (
                                <ExpertCard
                                    key={expert.id}
                                    expert={expert}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <h3 className={styles.emptyTitle}>{t.results.emptyTitle}</h3>
                            <p className={styles.emptyDescription}>{t.results.emptyDescription}</p>
                            <button
                                type="button"
                                className={styles.resetButton}
                                onClick={() => {
                                    setSearch("");
                                    setCuisine("");
                                    setLevel("");
                                }}
                            >
                                {t.results.reset}
                            </button>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
