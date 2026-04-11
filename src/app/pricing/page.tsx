"use client";

import HeroSection from "@/components/constructor/hero/Hero";
import Grid from "@/components/constructor/grid/Grid";
import PricingCard from "@/components/constructor/pricing-card/PricingCard";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import Section from "@/components/constructor/section/Section";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import { siteContent } from "@/resources/siteContent";

export default function PricingPage() {
    const t = siteContent.pricing;

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
                primaryCta={{ text: t.hero.primaryCta, link: "/sign-up" }}
                secondaryCta={{ text: t.hero.secondaryCta, link: "/extra/chefs" }}
                image="image15"
                features={false}
            />

            <HowItWorksSection
                label={t.howItWorks.label}
                title={t.howItWorks.title}
                description={t.howItWorks.description}
                highlights={t.howItWorks.highlights.map((h) => ({
                    title: h.title,
                    description: h.description,
                }))}
                steps={t.howItWorks.steps.map((step, idx) => ({
                    icon: idx === 0 ? "wallet" : idx === 1 ? "brain" : "chef",
                    title: step.title,
                    description: step.description,
                }))}
                note={t.howItWorks.note}
            />

            <Section
                title={t.packages.title}
                description={t.packages.description}
            >
                <Grid columns={4} gap="2rem">
                    <PricingCard
                        index={0}
                        variant="starter"
                        title={t.cards[0].title}
                        price="£5"
                        tokens={500}
                        badgeTop={t.cards[0].badgeTop}
                        description={t.cards[0].description}
                        features={[]}
                        buttonText={t.cards[0].buttonText}
                    />

                    <PricingCard
                        index={1}
                        variant="pro"
                        title={t.cards[1].title}
                        price="£25"
                        tokens={2500}
                        badgeTop={t.cards[1].badgeTop}
                        description={t.cards[1].description}
                        features={[]}
                        buttonText={t.cards[1].buttonText}
                    />

                    <PricingCard
                        index={2}
                        variant="premium"
                        title={t.cards[2].title}
                        price="£75"
                        tokens={7500}
                        badgeTop={t.cards[2].badgeTop}
                        description={t.cards[2].description}
                        features={[]}
                        buttonText={t.cards[2].buttonText}
                    />

                    <PricingCard
                        index={3}
                        variant="custom"
                        title={t.cards[3].title}
                        price="dynamic"
                        tokens={0}
                        badgeTop={t.cards[3].badgeTop}
                        description={t.cards[3].description}
                        features={[]}
                        buttonText={t.cards[3].buttonText}
                    />
                </Grid>
            </Section>

            <Grid columns={2} gap="2rem">
                <PromoFeatureCard
                    icon="brain"
                    title={t.features[0].title}
                    description={t.features[0].description}
                    image="image10"
                    actionText={t.features[0].actionText}
                    actionLink="/get-started"
                />

                <PromoFeatureCard
                    icon="chef"
                    title={t.features[1].title}
                    description={t.features[1].description}
                    image="image9"
                    imagePosition="right"
                    actionText={t.features[1].actionText}
                    actionLink="/extra/chefs"
                />
            </Grid>

            <Section
                title={t.compare.title}
                description={t.compare.description}
            >
                <Grid columns={2} gap="2rem">
                    <InfoBlock
                        eyebrow={t.compare.ai.eyebrow}
                        title={t.compare.ai.title}
                        description={t.compare.ai.description}
                        bullets={t.compare.ai.bullets}
                        image="image1"
                        variant="ai"
                    />

                    <InfoBlock
                        eyebrow={t.compare.chef.eyebrow}
                        title={t.compare.chef.title}
                        description={t.compare.chef.description}
                        bullets={t.compare.chef.bullets}
                        image="image1"
                        variant="chef"
                    />
                </Grid>
            </Section>

            <ValuesIcons
                title={t.values.title}
                description={t.values.description}
                values={t.values.items.map((v, idx) => ({
                    icon: idx === 0 ? "zap" : idx === 1 ? "chef" : idx === 2 ? "settings" : "wallet",
                    title: v.title,
                    description: v.description,
                }))}
            />

            <ValuesIcons
                title={t.tokens.title}
                description={t.tokens.description}
                values={t.tokens.items.map((v, idx) => ({
                    icon:
                        idx === 0
                            ? "subscriptions"
                            : idx === 1
                                ? "flex"
                                : idx === 2
                                    ? "priceTag"
                                    : "clock",
                    title: v.title,
                    description: v.description,
                }))}
            />

            <TextWithButton
                align="center"
                title={t.cta.title}
                description={t.cta.description}
                buttonText={t.cta.buttonText}
                buttonLink="/pricing"
            />
        </>
    );
}