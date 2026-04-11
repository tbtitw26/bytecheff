import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const servicesSchema: PageSchema = {
    meta: {
        title: `Våre Tjenester — ${COMPANY_NAME}`,
        description: `Utforsk ${COMPANY_NAME} tjenester: personaliserte treningsplaner, ernæringsveiledning, fremdriftssporing og et fleksibelt tokensystem for fitnessentusiaster på alle nivåer.`,
        keywords: [
            `${COMPANY_NAME} tjenester`,
            "fitness planer",
            "treningsprogrammer",
            "ernæring",
            "fremdriftssporing",
            "treningsplattform",
            "helsecoaching",
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Tjenester`,
            description: "Personalisert trening, ernæring og fitnesssporing i én plattform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Alt du trenger for å transformere din fitness",
                description: `${COMPANY_NAME} kombinerer KI-drevet planlegging med profesjonell innsikt. Fra personaliserte treningsøkter til ernæring og fremdriftssporing — alt i én app.`,
                centerTitle: true,
                centerDescription: true,
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "3rem",
            cards: [
                {
                    image: "image1",
                    title: "Personaliserte Treningsplaner",
                    description: "KI-genererte treningsøkter som matcher ditt nivå og tilpasser seg etter hvert som du utvikler deg.",
                    buttonLink: "/get-started",
                    buttonText: "Få din plan",
                },
                {
                    image: "image2",
                    title: "Smart Ernæringsveiledning",
                    description: "Balansert måltidsveiledning for å støtte dine treningsøkter og gjenoppretting.",
                    buttonLink: "/get-started",
                    buttonText: "Utforsk Ernæring",
                },
            ],
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "Styrketrening",
                    description: "Tilpassede treningsøkter for å bygge muskler effektivt.",
                    buttonLink: "/sign-up",
                    buttonText: "Start Nå",
                },
                {
                    image: "image8",
                    title: "Kardio Programmer",
                    description: "Planer for utholdenhet, fettforbrenning og hjertehelse.",
                    buttonLink: "/sign-up",
                    buttonText: "Prøv Kardio",
                },
                {
                    image: "image9",
                    title: "Fleksibilitet & Bevegelighet",
                    description: "Forbedre bevegelsesomfanget og forebygge skader.",
                    buttonLink: "/sign-up",
                    buttonText: "Treng Fleksibilitet",
                },
                {
                    image: "image10",
                    title: "Gjenopprettingsøkter",
                    description: "Strekking, yoga og lett aktivitet for gjenoppretting.",
                    buttonLink: "/sign-up",
                    buttonText: "Gjenopprett Smartere",
                },
            ],
        },
        {
            type: "custom",
            component: "HighlightStrip",
            messages: [
                "🏋️ Personaliserte treningsøkter oppdatert ukentlig",
                "🥗 Ernæringsveiledning tilpasset dine mål",
                "📊 Fremdriftssporing med klare statistikker",
                "🎯 Motivasjon gjennom prestasjoner",
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Fremdriftssporing dashboard",
            },
            right: {
                type: "text",
                title: "Spor din fremgang",
                description: `Visualiser din reise med grafer, personlige rekorder og prestasjoner. ${COMPANY_NAME} hjelper deg med å holde deg motivert og konsistent.`,
                bullets: [
                    "Treningshistorikk lagres automatisk",
                    "Personlige rekorder registrert",
                    "Ukentlige og månedlige innsikter",
                ],
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image4",
                    title: "Fleksibelt Tokensystem",
                    description: "Kjøp tokens én gang og bruk dem på treningsøkter, ernæring eller ekstra funksjoner.",
                    buttonLink: "/pricing",
                    buttonText: "Se Planer",
                },
                {
                    image: "image5",
                    title: "Fellesskapsstøtte",
                    description: "Koble til med andre, del fremgang og hold deg ansvarlig.",
                    buttonLink: "/sign-up",
                    buttonText: "Bli med i fellesskapet",
                },
                {
                    image: "image6",
                    title: "Ekspertcoaching (Valgfritt)",
                    description: "Trenger du ekstra hjelp? Bestill økter med sertifiserte trenere.",
                    buttonLink: "/sign-up",
                    buttonText: "Bestill Coaching",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Hvorfor velge oss?",
                description: `Fordi fitness skal være enkelt, motiverende og personalisert. ${COMPANY_NAME} tilpasser seg deg — ikke omvendt.`,
                bullets: [
                    "KI-assistert personalisering",
                    "Fleksibel prising med tokens",
                    "Alt-i-ett løsning: trening + ernæring + sporing",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: `Hvilke tjenester tilbyr ${COMPANY_NAME}?`,
                    answer: "Vi tilbyr treningsplaner, ernæringsveiledning, fremdriftssporing og valgfri ekspertcoaching.",
                },
                {
                    question: "Trenger jeg tokens for å starte?",
                    answer: "Du kan prøve noen funksjoner gratis, men tokens låser opp avanserte treningsøkter og ernæringsplaner.",
                },
                {
                    question: "Hvor fleksibelt er tokensystemet?",
                    answer: "Svært. Du kjøper én gang og bruker bare på det du trenger — ingen bortkastede abonnementer.",
                },
                {
                    question: "Kan jeg bruke dette som nybegynner?",
                    answer: `Absolutt. ${COMPANY_NAME} tilpasser planer basert på ditt nivå og mål.`,
                },
            ],
        },
    ],
};

export default servicesSchema;
