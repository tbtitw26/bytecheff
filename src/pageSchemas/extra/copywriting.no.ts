import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `SEO Kopiering — ${COMPANY_NAME}`,
        description: `Profesjonelle SEO kopieringstjenester av ${COMPANY_NAME}: innhold som rangerer, konverterer og bygger din merkevareautoritet.`,
        keywords: [
            "SEO kopiering",
            "SEO innholdsskriving",
            "nettsted kopi optimalisering",
            "nøkkelordrikt innhold",
            "bloggskriving SEO",
            "landingsside SEO",
        ],
        canonical: "/cases/seo-copywriting",
    },

    blocks: [
        {
            type: "custom",
            component: "HeroSection",
            title: "SEO Kopiering",
            highlight: "Skriv. Ranger. Konverter.",
            description: `${COMPANY_NAME} lager innhold som ikke bare høres bra ut — det rangerer.  
Våre SEO-kopiere skaper landingssider, blogginnlegg og produktbeskrivelser optimalisert for både brukere og søkemotorer.`,
            image: "image12",
            align: "right",
            primaryCta: { text: "Bestill SEO Kopi", link: "/contact-us?service=SEO%20Copywriting&tokens=1000" },
        },

        {
            type: "custom",
            component: "InfoBlock",
            title: "Hvorfor SEO Kopiering Betyr Noe",
            description: `Uten høykvalitetsinnhold vil selv den mest optimaliserte nettsiden ikke prestere.  
Vi kombinerer markedsføringspsykologi, nøkkelordstrategi og historiefortelling for å lage sider som bringer både trafikk og konverteringer.`,
            bullets: [
                "Nøkkelordrikt men naturlig skriving",
                "Optimalisert struktur og lesbarhet",
                "Unik tone og merkevarekonsistens",
                "SEO-drevne CTAs og engasjement",
            ],
            align: "center",
        },

        {
            type: "custom",
            component: "Timeline",
            title: "Vår Kopieringsprosess",
            steps: [
                {
                    title: "1. Nøkkelord & Intensjonsforskning",
                    description:
                        "Vi identifiserer målrettede spørsmål og analyserer hvilket innhold som rangerer best for publikummets intensjon.",
                },
                {
                    title: "2. Innholdsdisposisjon Opprettelse",
                    description:
                        "Vi bygger en logisk struktur med nøkkelordplassering, overskrifter og historiefortellingsflyt.",
                },
                {
                    title: "3. Skriving & Optimalisering",
                    description:
                        "Våre kopiere skaper engasjerende tekst optimalisert for lesbarhet, CTR og SEO-metrikker.",
                },
                {
                    title: "4. Intern Lenking & Meta Oppsett",
                    description:
                        "Vi forbereder metadata, titler og legger til kontekstuelle interne lenker for høyere relevans.",
                },
                {
                    title: "5. Gjennomgang & Publiseringsguide",
                    description:
                        "Du mottar polert tekst klar for opplasting — eller vi håndterer publiseringen for deg.",
                },
            ],
        },

        {
            type: "custom",
            component: "ValuesIcons",
            title: "Hva Du Får fra SEO Kopiering",
            description: "Innhold som rangerer, bygger tillit og selger.",
            values: [
                { icon: "📝", title: "Optimalisert Innhold", text: "Tekster skapt for å prestere godt på Google og engasjere brukere." },
                { icon: "🎯", title: "Nøkkelordstrategi", text: "Fokusert skriving som driver organisk trafikk." },
                { icon: "💬", title: "Merkevarestemme", text: "Hver side skrevet i din tone og stil." },
                { icon: "💰", title: "Konverteringer", text: "Kopi som ikke bare informerer — den selger." },
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
            title: "Kunderesultater fra Vår Kopiering",
            description: "Vårt innhold har hjulpet kunder med å vokse synlighet, klikk og konverteringer.",
            testimonials: [
                {
                    name: "Olha T.",
                    role: "Markedsføringssjef, Nettbutikk",
                    image: "review6",
                    text: "Deres SEO-artikler bringer konsekvent organisk trafikk — 60% vekst i bloggbesøkende etter optimalisering.",
                    rating: 5,
                },
                {
                    name: "Denys P.",
                    role: "Gründer, Digitalt Byrå",
                    image: "review2",
                    text: "Endelig innhold som selger og rangerer. CTR opp med 38% og gjennomsnittlig økttid doblet.",
                    rating: 5,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Trenger Innhold Som Fungerer?",
            description: `La ${COMPANY_NAME} skrive sider som søkemotorer elsker og lesere stoler på.`,
            buttonText: "Få SEO Kopiering",
            buttonLink: "/contact-us",
        },

        {
            type: "custom",
            component: "MissionBanner",
            title: "Gjør Ord til Rangeringer",
            description: `${COMPANY_NAME} gjør nettstedets innhold til en vekstmotor — optimalisert, overbevisende og kraftfull.`,
            image: "ctaSeoCopy",
        },
    ],
};

export default schema;
