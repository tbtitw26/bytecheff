"use client";

import styles from "./ExpertFilterBar.module.scss";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { siteContent } from "@/resources/siteContent";

type Props = {
    search: string;
    onSearchChange: (v: string) => void;
    cuisine: string;
    onCuisineChange: (v: string) => void;
    level: string;
    onLevelChange: (v: string) => void;
    cuisines: string[];
};

export default function ExpertsFilterBar({
                                             search,
                                             onSearchChange,
                                             cuisine,
                                             onCuisineChange,
                                             level,
                                             onLevelChange,
                                             cuisines,
                                         }: Props) {
    const t = siteContent.chefs.filter;
    const POPULAR_CUISINES = t.popularCuisines;
    const hasActiveFilters = Boolean(search || cuisine || level);

    return (
        <section className={styles.wrapper} aria-label={t.quickFiltersLabel}>
            <div className={styles.panel}>
                <div className={styles.bar}>
                    <label className={styles.searchWrap} aria-label={t.searchPlaceholder}>
                        <input
                            className={styles.search}
                            placeholder={t.searchPlaceholder}
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </label>

                    <label className={styles.selectWrap}>
                        <span className={styles.hiddenLabel}>{t.cuisineLabel}</span>
                        <Select
                            value={cuisine || null}
                            placeholder={t.cuisineLabel}
                            onChange={(_, value) => onCuisineChange(value ?? "")}
                            className={styles.muiSelect}
                            size="md"
                            variant="plain"
                        >
                            {cuisines.map((c) => (
                                <Option key={c} value={c}>
                                    {c}
                                </Option>
                            ))}
                        </Select>
                    </label>

                    <label className={styles.selectWrap}>
                        <span className={styles.hiddenLabel}>{t.expertiseLabel}</span>
                        <Select
                            value={level || null}
                            placeholder={t.expertiseLabel}
                            onChange={(_, value) => onLevelChange(value ?? "")}
                            className={styles.muiSelect}
                            size="md"
                            variant="plain"
                        >
                            <Option value="beginner">{t.expertiseOptions.beginner}</Option>
                            <Option value="intermediate">{t.expertiseOptions.intermediate}</Option>
                            <Option value="advanced">{t.expertiseOptions.advanced}</Option>
                        </Select>
                    </label>
                </div>

                <div className={styles.tags}>
                    {POPULAR_CUISINES.map((tag) => {
                        const isActive = cuisine === tag;

                        return (
                            <button
                                key={tag}
                                type="button"
                                className={`${styles.tag} ${isActive ? styles.tagActive : ""}`}
                                onClick={() => onCuisineChange(isActive ? "" : tag)}
                            >
                                {tag}
                            </button>
                        );
                    })}

                    {hasActiveFilters && (
                        <button
                            type="button"
                            className={styles.clearTag}
                            onClick={() => {
                                onSearchChange("");
                                onCuisineChange("");
                                onLevelChange("");
                            }}
                        >
                            {t.clearFilters}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
