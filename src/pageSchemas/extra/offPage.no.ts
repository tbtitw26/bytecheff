import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Off-Page SEO & Link Building — ${COMPANY_NAME}`,
        description: `Øk nettstedets autoritet med ${COMPANY_NAME} gjennom trygg, høy kvalitet link building, digital PR og merkevareomtale. Bygg tillit og ranger høyere.`,
        keywords: [
            "off-page SEO",
            "link building",
            "SEO backlinks",
            "digital PR",
            "merkevareomtale",
            "SEO autoritetsvekst",
        ],
        canonical: "/cases/off-page-seo",
    },

    blocks: [
        {
            type: "custom",
            component: "HeroSection",
            title: "Off-Page SEO & Link Building",
            highlight: "Bygg Autoritet. Få Tillit.",
            description: `${COMPANY_NAME} hjelper nettstedet ditt med å vokse utover sine grenser — gjennom kraftfulle backlinks, merkevareomtale og PR-strategier som øker domenautoritet og synlighet.`,
            image: "image10",
            align: "right",
            primaryCta: { text: "Bestill Link Building", link: "/contact-us?service=Off-Page SEO&tokens=1800" },
        },

        {
            type: "custom",
            component: "InfoBlock",
            title: "Hvorfor Off-Page SEO Betyr Noe",
            description: `Google ser lenker som tillitsstemmer.  
Jo flere kvalitetsnettsteder som peker til ditt — jo mer troverdig blir innholdet ditt i søkemotorenes øyne.  
Vi bygger trygge, relevante og varige backlinks som virkelig gjør en forskjell.`,
            bullets: [
                "Forbedrer domenautoritet og tillit",
                "Styrker nøkkelordrangeringer",
                "Bringer henvisningstrafikk fra partnernettsteder",
                "Støtter langsiktig SEO-stabilitet",
            ],
            align: "center",
        },

        {
            type: "custom",
            component: "Timeline",
            title: "Vår Off-Page SEO Prosess",
            steps: [
                {
                    title: "1. Backlink Profilrevisjon",
                    description:
                        "Vi analyserer dine eksisterende backlinks, avviser skadelige og identifiserer autoritetsgap.",
                },
                {
                    title: "2. Strategi & Prospektering",
                    description:
                        "Vi lager en tilpasset outreach-plan og samler relevante, høy-autoritetsdomener i din nisje.",
                },
                {
                    title: "3. Innhold & Outreach",
                    description:
                        "Vårt team skriver og publiserer kontekstuell gjestepost, PR-artikler eller omtale med naturlig ankertekst.",
                },
                {
                    title: "4. Lenkeplassering & Verifisering",
                    description:
                        "Vi verifiserer manuelt hver lenke for å sikre at den er indeksert, relevant og live på pålitelige nettsteder.",
                },
                {
                    title: "5. Rapportering & Resultater",
                    description:
                        "Du får en gjennomsiktig rapport med alle plasseringer, metrikker (DA/DR) og ytelsessporing.",
                },
            ],
        },

        {
            type: "custom",
            component: "ValuesIcons",
            title: "Hva Du Får fra Off-Page SEO",
            description:
                "Hver backlink vi bygger er et skritt mot sterkere autoritet og høyere rangeringer.",
            values: [
                { icon: "🌐", title: "Autoritetsvekst", text: "Øk nettstedets omdømme med lenker fra pålitelige kilder." },
                { icon: "🤝", title: "Merkevareomtale", text: "Få eksponering gjennom bransjerelevant PR og omtale." },
                { icon: "🔗", title: "Trygg Link Building", text: "Kun manuelle, white-hat metoder — ingen spam eller automatisering." },
                { icon: "📊", title: "Gjennomsiktig Rapportering", text: "Du ser alltid hvor, når og hvordan lenker ble plassert." },
            ],
        },

        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    type: "pricing",
                    variant: "starter",
                    title: "Starter SEO Revisjon",
                    price: "€15",
                    tokens: 1500,
                    badgeTop: "Inngangsplan",
                    description:
                        "Få en fullstendig nettstedskanning, rangeringrapport og 10-siders revisjon med handlingsrettede løsninger.",
                    features: [
                        "Teknisk sjekk",
                        "Mobil ytelse",
                        "Hastighetsanbefalinger",
                        "Grunnleggende nøkkelordanalyse",
                    ],
                    buttonText: "Kjøp Points",
                    buttonLink: "/pricing",
                },
                {
                    type: "pricing",
                    variant: "pro",
                    title: "Full SEO Pakke",
                    price: "€45",
                    tokens: 4500,
                    badgeTop: "Populær",
                    description:
                        "Alt du trenger for vekst: revisjon, lenkestrategi og innholdsplan.",
                    features: [
                        "Fullstendig revisjonsrapport",
                        "10 backlinks / måned",
                        "Innholdsstrategi",
                        "Månedlig sporing",
                    ],
                    buttonText: "Start SEO Kampanje",
                    buttonLink: "/pricing",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Enterprise SEO",
                    price: "€90",
                    tokens: 9000,
                    badgeTop: "Alt-i-ett Plan",
                    description:
                        "For store bedrifter og e-handel. Dedikert team, analyse og kontinuerlig vekst.",
                    features: [
                        "Dedikert SEO-sjef",
                        "20+ backlinks / måned",
                        "Tilpassede dashboards",
                        "Prioritetsstøtte",
                    ],
                    buttonText: "Kontakt for Oppsett",
                    buttonLink: "/contact",
                },
                {
                    type: "pricing",
                    variant: "custom",
                    title: "Tilpassede SEO Løsninger",
                    price: "dynamic",
                    tokens: 0,
                    badgeTop: "Skreddersydd Plan",
                    description:
                        "Trenger du noe spesifikt? Vi lager skreddersydde SEO-strategier for unike behov.",
                    features: [
                        "Personalisert strategi",
                        "Fleksible tjenester",
                        "Skalerbare løsninger",
                        "Dedikert støtte",
                    ],
                    buttonText: "Få Tilbud",
                    buttonLink: "/contact",
                }
            ],
        },

        {
            type: "custom",
            component: "TestimonialsSlider",
            title: "Kunderesultater fra Off-Page SEO",
            description: "Vår link building og PR outreach-kampanjer forbedrer konsekvent autoritet, tillit og rangeringer.",
            testimonials: [
                {
                    name: "Iryna B.",
                    role: "Gründer, Motee-handel",
                    image: "review2",
                    text: "Vi vokste fra DR 24 til DR 52 på fem måneder takket være deres outreach og gjestepostkampanje.",
                    rating: 5,
                },
                {
                    name: "Oleksandr G.",
                    role: "CMO, SaaS Startup",
                    image: "review5",
                    text: "Alle lenker var fra ekte medianettsteder — ingen spam. Trafikk og merkevareomtale doblet seg innen et kvartal.",
                    rating: 5,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Klar til å Styrke Din Autoritet?",
            description: `La ${COMPANY_NAME} bygge en lenkeprofil som søkemotorer — og kunder — stoler på.`,
            buttonText: "Start Off-Page SEO",
            buttonLink: "/contact-us",
        },

        {
            type: "custom",
            component: "MissionBanner",
            title: "Utvid Din Rekkevidde med Off-Page SEO",
            description: `Høy kvalitet backlinks og PR-kampanjer er ryggraden i langsiktig suksess.  
Samarbeid med ${COMPANY_NAME} og gjør nettstedet ditt til en anerkjent autoritet i din bransje.`,
            image: "ctaOffPage",
        },
    ],
};

export default schema;
