import {media} from "@/resources/media";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE
} from "@/resources/constants";
import { siteContent } from "./siteContent";

export const baseURL =
    typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export const getHeaderContent = () => {
    const t = siteContent;
    return {
        logo: {
            src: media.logo.src,
            alt: t.header.logoAlt,
            href: "/"
        },
        links: [
            {label: t.header.links.about, href: "/about-us"},
            {label: t.header.links.howItWorks, href: "/get-started"},
            {label: t.header.links.chefs, href: "/extra/chefs"},
            {label: t.header.links.pricing, href: "/pricing"},
            {label: t.header.links.career, href: "/join-team"},
            {label: t.header.links.contact, href: "/contact-us"},
            {label: t.header.links.faq, href: "/faq"},
            {label: t.header.links.dashboard, href: "/dashboard"},
        ]
    };
};

export const headerContent = getHeaderContent();

export const getFooterContent = () => {
    const t = siteContent;
    return {
        logo: {src: media.logo.src, alt: t.footer.logoAlt, href: "/"},
        columns: [
            {
                title: t.footer.columns.navigate,
                links: [
                    {label: t.footer.links.about, href: "/about-us"},
                    {label: t.footer.links.howItWorks, href: "/get-started"},
                    {label: t.footer.links.chefs, href: "/extra/chefs"},
                    {label: t.footer.links.pricing, href: "/pricing"},
                    {label: t.footer.links.career, href: "/join-team"},
                    {label: t.footer.links.contact, href: "/contact-us"},
                    {label: t.footer.links.faq, href: "/faq"},
                ]
            },
            {
                title: t.footer.columns.legal,
                links: [
                    {label: t.footer.links.terms, href: "/terms-and-conditions"},
                    {label: t.footer.links.cookie, href: "/cookie-policy"},
                    {label: t.footer.links.refund, href: "/refund-policy"},
                    {label: t.footer.links.privacy, href: "/privacy-policy"},
                ],
            },
        ],
        contact: {
            email: COMPANY_EMAIL,
            phone: COMPANY_PHONE,
            address: COMPANY_ADDRESS,
        },
        legal: {
            companyName: COMPANY_LEGAL_NAME,
            companyNumber: COMPANY_NUMBER,
            address: COMPANY_ADDRESS,
            email: COMPANY_EMAIL,
            phone: COMPANY_PHONE,
            addressLines: COMPANY_ADDRESS ? [COMPANY_ADDRESS] : [] as string[],
        },
        socials: [],
        copyright: t.footer.copyright,
        companyLabel: t.footer.companyLabel,
        followUs: t.footer.followUs,
    };
};

export const footerContent = getFooterContent();
