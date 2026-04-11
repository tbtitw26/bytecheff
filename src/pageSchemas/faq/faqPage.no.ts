import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME} Kulinarisk Plattform`,
        description: `Ofte stilte spørsmål om å lære å lage mat med ${COMPANY_NAME} — KI-kokk, ekte kokker, tokens, kurs og resultater.`,
        keywords: [
            "koke kurs FAQ",
            "KI kokk matlaging",
            "online kulinarisk opplæring",
            "lære matlaging med KI",
            "kokk veiledning online",
            "kulinariske tokens",
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} — Kulinarisk FAQ`,
            description:
                "Svar på de vanligste spørsmålene om å lære med KI-kokker og profesjonelle kulinariske mentorer.",
            bg: "#1E2F1E",
            color: "#ffffff",
        },
    },

    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `Hva er ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} er en moderne kulinarisk læringsplattform hvor du forbedrer dine matlagingsferdigheter ved å bruke KI-kokker eller profesjonelle menneskelige kokker gjennom strukturerte, ukesbaserte læringsplaner.`,
                },
                {
                    question: "Hvordan fungerer læring på plattformen?",
                    answer:
                        "Du kjøper tokens og bruker dem på ukentlige læringsplaner. Hver plan inkluderer oppskrifter, veiledning, tilbakemeldinger og klare mål — enten drevet av KI eller ledet av en ekte kokk.",
                },
                {
                    question: "Hva er tokens?",
                    answer:
                        "Tokens er plattformens interne valuta. Du bruker dem til å låse opp læringsplaner, kokk veiledning, KI-guidance og nedlastbare læringsmateriell.",
                },
                {
                    question: "Hva er forskjellen mellom en KI-kokk og en ekte kokk?",
                    answer:
                        "KI-kokker er raskere og mer rimelige, ideelle for raske resultater og daglig praksis. Menneskelige kokker tilbyr dypere ekspertise, personlig stil og avansert teknikkforbedring — de koster mer, men gir rikere veiledning.",
                },
                {
                    question: "Hvilket alternativ bør jeg velge — KI eller kokk?",
                    answer:
                        "Hvis du vil ha hastighet, struktur og umiddelbar tilbakemelding, start med KI. Hvis du vil ha dybde, kulinarisk filosofi og profesjonell forbedring, velg en ekte kokk — eller kombiner begge.",
                },
                {
                    question: "Hvor lenge varer en læringsplan?",
                    answer:
                        "De fleste planer er strukturert for én uke, med fokus på spesifikke ferdigheter, kjøkkener eller teknikker. Du kan gjenta, oppgradere eller bytte mentorer når som helst.",
                },
                {
                    question: "Trenger jeg tidligere matlagingserfaring?",
                    answer:
                        "Nei. Plattformen tilpasser seg ditt ferdighetsnivå — fra fullstendige nybegynnere til selvsikre hjemmekokker som ønsker å forbedre profesjonelle teknikker.",
                },
                {
                    question: "Hva får jeg på slutten av en plan?",
                    answer:
                        "Du mottar strukturerte oppskrifter, trinn-for-trinn veiledning, fremdriftsinnsikt og en nedlastbar PDF-sammendrag av dine læringsresultater.",
                },
                {
                    question: "Kan jeg bytte mellom KI og en ekte kokk?",
                    answer:
                        "Ja. Mange brukere starter med KI for hastighet, deretter bytter til en kokk for forbedring — eller bruker begge parallelt.",
                },
                {
                    question: "Utløper tokens?",
                    answer:
                        "Nei. Dine tokens forblir på kontoen din og kan brukes når som helst uten utløp.",
                },
                {
                    question: "Er betalingen min sikker?",
                    answer:
                        `${COMPANY_NAME} bruker pålitelige betalingsleverandører og bransjestandard kryptering for å holde alle transaksjoner sikre.`,
                },
                {
                    question: "Hvordan kan jeg kontakte support?",
                    answer:
                        `Du kan kontakte vårt supportteam når som helst via kontaktskjemaet eller via e-post på ${COMPANY_EMAIL}. Vi svarer vanligvis innen 24 timer.`,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Har du fortsatt spørsmål?",
            description:
                "Vårt kulinariske supportteam er glade for å hjelpe deg med å velge riktig læringsvei.",
            buttonText: "Kontakt kundeservice",
            buttonLink: "/contact-us",
        },
    ],
};

export default faqSchema;
