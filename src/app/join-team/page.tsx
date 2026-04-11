"use client";

import React from "react";
import HeroSection from "@/components/constructor/hero/Hero";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import Grid from "@/components/constructor/grid/Grid";
import JoinTeamForm from "@/components/widgets/join-team-form/JoinTeamForm";
import { siteContent } from "@/resources/siteContent";

export default function JoinTeamPage() {
    const t = siteContent.joinTeamPage;

    return (
        <>
            <Grid columns={2} gap="2rem">
                <PromoFeatureCard
                    icon="community"
                    title={t.promoCards[0].title}
                    description={t.promoCards[0].description}
                    image="image16"
                />

                <PromoFeatureCard
                    icon="bulb"
                    title={t.promoCards[1].title}
                    description={t.promoCards[1].description}
                    image="image17"
                    imagePosition="right"
                />
            </Grid>

            <ValuesIcons
                title={t.values.title}
                description={t.values.description}
                values={t.values.items.map((v, idx) => ({
                    icon:
                        idx === 0
                            ? "check"
                            : idx === 1
                                ? "flex"
                                : idx === 2
                                    ? "shield"
                                    : "community",
                    title: v.title,
                    description: v.description,
                }))}
            />

            <div id="join-form">
                <JoinTeamForm />
            </div>
        </>
    );
}