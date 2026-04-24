import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `On-Page SEO Optimalisering — ${COMPANY_NAME}`,
        description: `Fullstendig on-page SEO optimalisering av ${COMPANY_NAME}: forbedre din innholdsstruktur, metadata og nøkkelordrelevans for å øke synlighet og organisk trafikk.`,
        keywords: [
            "on-page SEO",
            "innholdsoptimalisering",
            "meta tags SEO",
            "nøkkelordkartlegging",
            "SEO for sider",
            "forbedre CTR SEO",
        ],
        canonical: "/cases/on-page-seo",
    },

    blocks: [
        {
            type: "custom",
            component: "HeroSection",
            title: "On-Page SEO Optimalisering",
            highlight: "Optimaliser. Strukturer. Konverter.",
            description: `${COMPANY_NAME} utfører dyp on-page optimalisering for å gjøre hver side på nettstedet ditt søkemotorvennlig og konverteringsfokusert.  
Vi justerer tekniske tags, struktur og innhold for å maksimere synlighet og brukerengasjement.`,
            image: "image7",
            align: "right",
            primaryCta: { text: "Bestill Optimalisering", link: "/contact-us?service=On-Page SEO&tokens=1800" },
        },

        {
            type: "custom",
            component: "InfoBlock",
            title: "Hvorfor On-Page SEO Er Essensielt",
            description: `Selv det beste innholdet kan mislykkes med å rangere hvis sidene dine ikke er optimalisert for søkeintensjon, struktur og UX.  
Vårt team sikrer at hver side kommuniserer tydelig med Google — og overbeviser brukerne dine til å bli lenger.`,
            bullets: [
                "Bedre nøkkelordmålretting og semantisk struktur",
                "Forbedret CTR gjennom optimaliserte titler og beskrivelser",
                "Forbedret intern lenking og hierarki",
                "Sterkere brukersignaler (tid på side, bounce rate)",
            ],
            align: "center",
        },

        {
            type: "custom",
            component: "Timeline",
            title: "Hvordan Vi Optimaliserer Sidene Dine",
            steps: [
                {
                    title: "1. Innhold & Nøkkelordrevisjon",
                    description:
                        "Vi gjennomgår alle eksisterende sider, analyserer nøkkelordfordeling og oppdager dupliserte eller manglende metadata.",
                },
                {
                    title: "2. Nøkkelordkartlegging",
                    description:
                        "Hver side matches med høyt-intensjon nøkkelord for å sikre søkerelevans og unngå kannibalisering.",
                },
                {
                    title: "3. Metadata & Overskrifter Optimalisering",
                    description:
                        "Vi omskriver meta-titler, beskrivelser og overskrifter for klarhet, klikkrate og semantisk balanse.",
                },
                {
                    title: "4. Innhold & UX Justeringer",
                    description:
                        "Vi forbedrer intern lenking, bilde alt-tekster og innholdslesbarhet — gjør sider sterkere for SEO og brukere.",
                },
                {
                    title: "5. Rapportering & Implementeringsguide",
                    description:
                        "Du mottar en fullstendig rapport med alle endringer, nøkkelordkartleggingsark og klare implementeringssteg.",
                },
            ],
        },

        {
            type: "custom",
            component: "ValuesIcons",
            title: "Hva Du Får Med On-Page SEO",
            description: "Presis optimalisering gir målbare forbedringer på tvers av ytelse, synlighet og engasjement.",
            values: [
                { icon: "🔑", title: "Nøkkelordrelevans", text: "Hver side målretter de riktige spørsmålene for publikummet ditt." },
                { icon: "📈", title: "Høyere Klikkrate", text: "Optimaliserte titler og meta-beskrivelser tiltrekker flere klikk." },
                { icon: "🧩", title: "Bedre Sidestruktur", text: "Forbedret hierarki og overskrifter hjelper både brukere og crawlers." },
                { icon: "👥", title: "Forbedrede Brukersignaler", text: "Lengre økter og bedre konverteringer gjennom brukervennlighet." },
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
            title: "Ekte Resultater fra On-Page Optimalisering",
            description: "Våre kunder ser umiddelbare rangeringforbedringer og målbar trafikkvekst etter våre justeringer.",
            testimonials: [
                {
                    name: "Kateryna S.",
                    role: "Markedsføringssjef, IT-selskap",
                    image: "review4",
                    text: "Etter deres on-page optimalisering vokste vår organiske CTR med 45% og vi kom inn i topp-10 for 12 kjerneord innen to måneder.",
                    rating: 5,
                },
                {
                    name: "Roman D.",
                    role: "Eier, Lokal Tjenestenettsted",
                    image: "review6",
                    text: "Nøkkelordkartleggingen og metadata-omskrivingen ga umiddelbar synlighetsøkning — nå rangerer 80% av sidene våre på Googles første side.",
                    rating: 5,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Klar til å Optimalisere Nettstedet Ditt?",
            description: `La våre SEO-spesialister gjennomgå sidene dine og bygge en tilpasset on-page optimaliseringsplan som driver rangeringer og engasjement.`,
            buttonText: "Bestill On-Page SEO",
            buttonLink: "/contact-us",
        },

        {
            type: "custom",
            component: "MissionBanner",
            title: "Øk Din Synlighet med Smart On-Page SEO",
            description: `Hver side betyr noe. ${COMPANY_NAME} sikrer at hver enkelt er perfekt strukturert, nøkkelordjustert og klar til å prestere.`,
            image: "ctaOnPage",
        },
    ],
};

export default schema;
