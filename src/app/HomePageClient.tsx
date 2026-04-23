import React from "react";
import HeroSection from "@/components/constructor/hero/Hero";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import Grid from "@/components/constructor/grid/Grid";
import FAQ from "@/components/constructor/faq/FAQ";
import PricingCard from "@/components/constructor/pricing-card/PricingCard";
import TestimonialsSlider from "@/components/constructor/testimonials-slider/TestimonialsSlider";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TeamGrid from "@/components/constructor/team-grid/TeamGrid";
import Section from "@/components/constructor/section/Section";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import { experts } from "@/data/experts";
import { siteContent } from "@/resources/siteContent";

export default function HomePageClient() {
    const t = siteContent.home;

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
                image="image1"
            />

            <Section
                title={t.twoWays.title}
                description={t.twoWays.description}
            >
                <Grid columns={2} gap="2rem">
                    <InfoBlock
                        eyebrow={t.twoWays.chef.eyebrow}
                        title={t.twoWays.chef.title}
                        description={t.twoWays.chef.description}
                        bullets={t.twoWays.chef.bullets}
                        image="image9"
                        variant="chef"
                    />

                    <InfoBlock
                        eyebrow={t.twoWays.ai.eyebrow}
                        title={t.twoWays.ai.title}
                        description={t.twoWays.ai.description}
                        bullets={t.twoWays.ai.bullets}
                        image="image10"
                        variant="ai"
                    />
                </Grid>
            </Section>

            <HowItWorksSection
                label={t.howItWorks.label}
                title={t.howItWorks.title}
                description={t.howItWorks.description}
                steps={t.howItWorks.steps.map((step, idx) => ({
                    icon: idx === 0 ? "user" : idx === 1 ? "wallet" : "chef",
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

            <Grid columns={4} gap="2rem">
                <PricingCard
                    index={0}
                    variant="starter"
                    title={t.pricing.cards[0].title}
                    price="£5"
                    tokens={500}
                    badgeTop={t.pricing.cards[0].badgeTop}
                    description={t.pricing.cards[0].description}
                    features={[]}
                    buttonText={t.pricing.cards[0].buttonText}
                />

                <PricingCard
                    index={1}
                    variant="pro"
                    title={t.pricing.cards[1].title}
                    price="£25"
                    tokens={2500}
                    badgeTop={t.pricing.cards[1].badgeTop}
                    description={t.pricing.cards[1].description}
                    features={[]}
                    buttonText={t.pricing.cards[1].buttonText}
                />

                <PricingCard
                    index={2}
                    variant="premium"
                    title={t.pricing.cards[2].title}
                    price="£75"
                    tokens={7500}
                    badgeTop={t.pricing.cards[2].badgeTop}
                    description={t.pricing.cards[2].description}
                    features={[]}
                    buttonText={t.pricing.cards[2].buttonText}
                />

                <PricingCard
                    index={3}
                    variant="custom"
                    title={t.pricing.cards[3].title}
                    price="dynamic"
                    tokens={0}
                    badgeTop={t.pricing.cards[3].badgeTop}
                    description={t.pricing.cards[3].description}
                    features={[]}
                    buttonText={t.pricing.cards[3].buttonText}
                />
            </Grid>

            <ValuesIcons
                title={t.tokens.title}
                description={t.tokens.description}
                values={t.tokens.values.map((v, idx) => ({
                    icon: idx === 0 ? "wallet" : idx === 1 ? "settings" : idx === 2 ? "check" : "clock",
                    title: v.title,
                    description: v.description,
                }))}
            />

            <TeamGrid
                title={t.team.title}
                description={t.team.description}
                viewAllText={t.team.viewAllText}
                viewAllLink="/extra/chefs"
                members={experts.slice(0, 4).map((expert) => ({
                    name: expert.fullName,
                    role: expert.subtitle,
                    image: expert.avatar,
                }))}
            />

            <TestimonialsSlider
                title={t.testimonials.title}
                description={t.testimonials.description}
                testimonials={t.testimonials.items as React.ComponentProps<typeof TestimonialsSlider>["testimonials"]}
            />

            <FAQ items={t.faq.items} />
        </>
    );
}
