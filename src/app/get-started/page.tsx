"use client";

import HeroSection from "@/components/constructor/hero/Hero";
import FeatureStep from "@/components/constructor/feature-step/FeatureStep";
import FAQ from "@/components/constructor/faq/FAQ";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import FeatureStepsWrapper from "@/components/constructor/feature-step/wrapper/FeatureStepsWrapper";
import { siteContent } from "@/resources/siteContent";

export default function GetStartedPage() {
    const t = siteContent.getStarted;

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
                image="image7"
            />

            <FeatureStepsWrapper>
                <FeatureStep
                    step={1}
                    title={t.steps[0].title}
                    description={t.steps[0].description}
                    bullets={t.steps[0].bullets}
                    image="image8"
                    badge={t.steps[0].badge}
                    buttonText={t.steps[0].buttonText}
                    buttonLink="/sign-up"
                    imagePosition="left"
                />

                <FeatureStep
                    step={2}
                    title={t.steps[1].title}
                    description={t.steps[1].description}
                    bullets={t.steps[1].bullets}
                    image="image11"
                    badge={t.steps[1].badge}
                    buttonText={t.steps[1].buttonText}
                    buttonLink="/pricing"
                    imagePosition="right"
                />

                <FeatureStep
                    step={3}
                    title={t.steps[2].title}
                    description={t.steps[2].description}
                    bullets={t.steps[2].bullets}
                    image="image12"
                    badge={t.steps[2].badge}
                    buttonText={t.steps[2].buttonText}
                    buttonLink="/extra/chefs"
                    imagePosition="left"
                />

                <FeatureStep
                    step={4}
                    title={t.steps[3].title}
                    description={t.steps[3].description}
                    bullets={t.steps[3].bullets}
                    image="image13"
                    badge={t.steps[3].badge}
                    buttonText={t.steps[3].buttonText}
                    buttonLink="/dashboard"
                    imagePosition="right"
                />

                <FeatureStep
                    step={5}
                    title={t.steps[4].title}
                    description={t.steps[4].description}
                    bullets={t.steps[4].bullets}
                    image="image14"
                    badge={t.steps[4].badge}
                    imagePosition="left"
                />
            </FeatureStepsWrapper>

            <FAQ items={t.faq.items} />

            <TextWithButton
                title={t.cta.title}
                description={t.cta.description}
                buttonText={t.cta.buttonText}
                buttonLink="/sign-up"
            />
        </>
    );
}