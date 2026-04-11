import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";

const refundPolicySchema: PageSchema = {
    meta: {
        title: "Refusjons- og returpolicy – Cheffmate",
        description:
            "Offisiell Refusjons- og returpolicy for Cheffmate: refusjoner for tokens, kokkekurs, KI matlagningsplaner og forbrukerrettigheter.",
        keywords: [
            "refusjonspolicy",
            "returpolicy",
            "cheffmate",
            "tokens",
            "KI matlaging",
            "digitalt innhold",
            "forbrukerrettigheter",
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: "Cheffmate – Refusjons- og returpolicy",
            description:
                "Gjennomsiktig refusjons- og returpolicy for Cheffmate matlagningsplattform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        {
            type: "text",
            title: "Refusjons- og returpolicy",
            description: "Gyldig fra: 20. februar 2026",
        },

        {
            type: "text",
            title: "1. Sammendrag",
            bullets: [
                "Behandling av forespørsler: Alle refusjonsforespørsler behandles i henhold til denne policyen og gjeldende britisk forbrukerlov.",
                "Behandlingstid: Vanligvis 5–10 virkedager etter godkjenning.",
                "Token-bruk: Tokens fungerer som ikke-refunderbar digital kreditt.",
                "Digital natur: Ingen fysiske varer å returnere.",
                "Resultatfraskrivelse: Ingen refusjon basert på smak/preferanse.",
                `Kontakt: ${COMPANY_EMAIL}`,
            ],
        },

        {
            type: "text",
            title: "2. Omfang og juridisk merknad",
            description:
                `Denne policyen gjelder alle kjøp gjort via plattformen.\n\nTjenesten drives av ${COMPANY_LEGAL_NAME || COMPANY_NAME} (${COMPANY_NUMBER}), ${COMPANY_ADDRESS}.\n\nIngenting begrenser dine lovfestede rettigheter.`,
        },

        {
            type: "text",
            title: "3. Sentrale definisjoner",
            bullets: [
                "Tokens: Digital kreditt.",
                "Digitalt innhold: Kurs og KI-planer.",
                "Tjenestetyper: Kokkekurs og KI-assistent.",
                "Ordre: Bekreftet kjøp.",
            ],
        },

        {
            type: "text",
            title: "4. Generelle refusjonsprinsipper",
            bullets: [
                "4.1. Tokens er ikke refunderbare etter bruk.",
                "4.2. Refusjon er begrenset til betalt beløp.",
                "4.3. Feil input fra bruker gir ikke refusjon.",
                "4.4. Smak/preferanse gir ikke refusjon.",
            ],
        },

        {
            type: "text",
            title: "5. Token-kjøp",
            bullets: [
                "5.1. Tokens selges som pakker.",
                "5.2. 14-dagers refusjon kun hvis ubrukt.",
                "5.3. Inaktive kontoer kan tømmes etter 24 måneder.",
            ],
        },

        {
            type: "text",
            title: "6. Kansellering",
            bullets: [
                "6.1. Tokens brukt = ingen refusjon.",
            ],
        },

        {
            type: "text",
            title: "7. Tekniske feil",
            bullets: [
                "7.1. Ved feil: tilgang gjenopprettes eller tokens returneres.",
                "7.2. KI-innhold leveres 'som det er'.",
            ],
        },

        {
            type: "text",
            title: "8. Hvordan be om refusjon",
            bullets: [
                `Send e-post til ${COMPANY_EMAIL}`,
                "Oppgi konto e-post",
                "Beskriv problemet",
                "Legg ved bevis",
                "Svar innen 48 timer",
                "Avgjørelse innen 5 dager",
            ],
        },

        {
            type: "text",
            title: "9. Tvister",
            bullets: [
                "9.1. Falske chargebacks anses som svindel.",
                "9.2. Konto kan suspenderes.",
                "9.3. Kontakt support først.",
            ],
        },

        {
            type: "text",
            title: "10. Skatter",
            description:
                "Skatter legges til ved betaling. Refunderes kun hvis lovpålagt.",
        },

        {
            type: "text",
            title: "11. Databeskyttelse",
            description:
                "Data lagres opptil 6 år i samsvar med lovgivning.",
        },

        {
            type: "text",
            title: "12. Eksempler",
            bullets: [
                "Ingen refusjon etter bruk av tokens.",
                "Dobbel betaling refunderes.",
                "Teknisk feil → tokens tilbake.",
            ],
        },

        {
            type: "text",
            title: "13. Kontaktinformasjon",
            bullets: [
                `${COMPANY_LEGAL_NAME}`,
                `Organisasjonsnummer: ${COMPANY_NUMBER}`,
                `Adresse: ${COMPANY_ADDRESS}`,
                `Telefon: ${COMPANY_PHONE}`,
                `E-post: ${COMPANY_EMAIL}`,
            ],
        },
    ],
};

export default refundPolicySchema;