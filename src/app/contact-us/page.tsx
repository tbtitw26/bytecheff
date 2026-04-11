"use client";

import { useSearchParams } from "next/navigation";
import { useUser } from "@/context/UserContext";
import ContactUsForm from "@/components/widgets/contact-form/ContactForm";
import SeoRequestForm from "@/components/extra/seo/seo-form/SeoForm";
import { siteContent } from "@/resources/siteContent";

export default function ContactUsPage() {
    const user = useUser();
    const t = siteContent.contactUs;
    const search = useSearchParams();
    const service = search.get("service");
    const tokens = Number(search.get("tokens") || 30);

    if (!service) {
        return (
            <div className="container" style={{ padding: "60px 0" }}>
                <ContactUsForm />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="container" style={{ padding: "60px 0" }}>
                <h2>{t.loginRequired}</h2>
                <p>{t.loginRequiredMessage}</p>
                <ContactUsForm />
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: "60px 0" }}>
            <SeoRequestForm
                service={service}
                tokens={tokens}
                title={t.requestTitle.replace("{service}", service || "")}
                description={t.requestDescription.replace("{tokens}", tokens.toString())}
            />
        </div>
    );
}
