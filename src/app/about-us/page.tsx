"use client";

import HeroSection from "@/components/constructor/hero/Hero";
import StoryGridSection from "@/components/sections/story-grid-section/StoryGridSection";
import Grid from "@/components/constructor/grid/Grid";
import Card from "@/components/constructor/card/Card";
import MissionBanner from "@/components/constructor/missio-banner/MissionBanner";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import FAQ from "@/components/constructor/faq/FAQ";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import { siteContent } from "@/resources/siteContent";

export default function AboutPage() {
    const t = siteContent.about;

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
                primaryCta={{ text: t.hero.primaryCta, link: "/get-started" }}
                secondaryCta={{ text: t.hero.secondaryCta, link: "/extra/chefs" }}
                image="image2"
                features={false}
            />

            <StoryGridSection
                label={t.origins.label}
                title={t.origins.title}
                cards={[
                    {
                        type: "text",
                        title: t.origins.cards[0].title,
                        text: t.origins.cards[0].text,
                    },
                    {
                        type: "quote",
                        quote: t.origins.cards[1].quote,
                        author: t.origins.cards[1].author,
                        role: t.origins.cards[1].role,
                    },
                    {
                        type: "wideImage",
                        image: "image3",
                        title: t.origins.cards[2].title,
                        text: t.origins.cards[2].text,
                    },
                    {
                        type: "text",
                        title: t.origins.cards[3].title,
                        text: t.origins.cards[3].text,
                    },
                ]}
            />

            <Grid columns={3} gap="2rem">
                <Card
                    icon="chef"
                    title={t.pillars[0].title}
                    description={t.pillars[0].description}
                />

                <Card
                    icon="brain"
                    title={t.pillars[1].title}
                    description={t.pillars[1].description}
                />

                <Card
                    icon="community"
                    title={t.pillars[2].title}
                    description={t.pillars[2].description}
                />
            </Grid>

            <MissionBanner
                title={t.mission.title}
                description={t.mission.description}
                image="image4"
            />

            <Grid columns={2} gap="2rem">
                <PromoFeatureCard
                    icon="chef"
                    title={t.balance.chef.title}
                    description={t.balance.chef.description}
                    image="image5"
                    actionText={t.balance.chef.actionText}
                    actionLink="/extra/chefs"
                />

                <PromoFeatureCard
                    icon="brain"
                    title={t.balance.ai.title}
                    description={t.balance.ai.description}
                    image="image6"
                    imagePosition="right"
                    actionText={t.balance.ai.actionText}
                    actionLink="/get-started"
                />
            </Grid>

            <HowItWorksSection
                label={t.howItWorks.label}
                title={
                    <>
                        {t.howItWorks.title.split(t.howItWorks.titleHighlight)[0]}
                        <br />
                        <span>{t.howItWorks.titleHighlight}</span>
                    </>
                }
                description={t.howItWorks.description}
                highlights={t.howItWorks.highlights.map((h) => ({
                    title: h.title,
                    description: h.description,
                }))}
                steps={t.howItWorks.steps.map((step, idx) => ({
                    icon: idx === 0 ? "chef" : idx === 1 ? "brain" : "user",
                    title: step.title,
                    description: step.description,
                }))}
                note={t.howItWorks.note}
            />

            <ValuesIcons
                title={t.coreValues.title}
                description={t.coreValues.description}
                values={t.coreValues.values.map((v, idx) => ({
                    icon:
                        idx === 0
                            ? "accessibility"
                            : idx === 1
                                ? "settings"
                                : idx === 2
                                    ? "bulb"
                                    : "community",
                    title: v.title,
                    description: v.description,
                }))}
            />

            <FAQ items={t.faq.items} />

            <TextWithButton
                title={t.cta.title}
                description={t.cta.description}
                buttonText={t.cta.buttonText}
                buttonLink="/get-started"
            />
        </>
    );
}