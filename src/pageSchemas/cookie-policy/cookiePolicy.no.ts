import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_PHONE,
} from "@/resources/constants";

const cookiePolicyNo: PageSchema = {
    meta: {
        title: "Informasjonskapselpolicy – Cheffmate",
        description:
            "Cheffmate Informasjonskapselpolicy: hvordan vi bruker informasjonskapsler og lignende teknologier, kategorier og dine kontrollalternativer.",
        keywords: [
            "informasjonskapselpolicy",
            "informasjonskapsler",
            "GDPR",
            "sporing",
            "personvern",
            "samtykke",
            "cheffmate",
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cheffmate – Informasjonskapselpolicy",
            description:
                "Gjennomsiktig informasjonskapselpolicy for Cheffmate matlagningsplattform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Informasjonskapselpolicy",
            description: "Gyldig fra: 20. februar 2026",
        },
        {
            type: "text",
            title: "1. Introduksjon",
            description:
                `Denne Informasjonskapselpolicyen forklarer hvordan ${COMPANY_LEGAL_NAME || COMPANY_NAME || "FUSION FAIRIES LTD"} («vi», «oss», «vår») bruker informasjonskapsler og lignende teknologier for å gjenkjenne deg når du besøker vår nettside på cheffmate.co.uk. Den forklarer hva disse teknologiene er og hvorfor vi bruker dem, samt dine rettigheter til å kontrollere vår bruk av dem.`,
        },
        {
            type: "text",
            title: "2. Hva er informasjonskapsler?",
            description:
                "Informasjonskapsler er små datafiler som plasseres på datamaskinen eller mobilenheten din når du besøker en nettside. Informasjonskapsler brukes mye av nettsideeiere for å få nettsidene sine til å fungere, eller fungere mer effektivt, samt levere rapporteringsinformasjon.",
        },
        {
            type: "text",
            title: "3. Hvorfor bruker vi informasjonskapsler?",
            description:
                "Vi bruker informasjonskapsler fra første og tredjepart av flere grunner. Noen informasjonskapsler er nødvendige av tekniske årsaker for at Tjenesten vår skal fungere, og vi refererer til disse som «essensielle» eller «strengt nødvendige» informasjonskapsler. Andre informasjonskapsler gjør det også mulig for oss å spore og målrette brukernes interesser for å forbedre opplevelsen på vår nettplattform.",
        },
        {
            type: "text",
            title: "4. Typer informasjonskapsler vi bruker",
            description:
                "Vi kategoriserer våre informasjonskapsler i følgende grupper:",
            bullets: [
                "Strengt nødvendig – Essensielt for at du skal kunne bruke nettsiden og funksjonene (f.eks. tilgang til sikre områder, opprettholde innloggingsøkten din og administrere Token-saldoen din). Uten disse kan tjenesten ikke fungere.",
                "Ytelse og analyse – Hjelper oss med å forstå hvordan besøkende bruker plattformen (f.eks. hvilke kokkekurs som er mest populære) ved å samle og rapportere informasjon anonymt.",
                "Funksjonalitet – Brukes til å huske valg du tar (som foretrukket språk eller region) og tilby forbedrede, mer personlige funksjoner.",
                "Målretting og annonsering – Disse informasjonskapslene brukes for å gjøre reklamebudskap mer relevante for deg og dine kulinariske interesser.",
            ],
        },
        {
            type: "text",
            title: "5. Spesielt: KI og Token-sikkerhet",
            description:
                "Siden Cheffmate bruker en Token-basert økonomi og KI-generering, bruker vi spesifikke informasjonskapsler for å:",
            bullets: [
                "Sikre at Token-transaksjoner er sikkert koblet til din unike økt.",
                "Forhindre «dobbeltforbruk» av Tokens på grunn av sideoppdateringer.",
                "Opprettholde stabiliteten til KI Matlagningsassistenten mens den behandler oppskriften din (som kan ta opptil flere minutter).",
            ],
        },
        {
            type: "text",
            title: "6. Hvordan kan jeg kontrollere informasjonskapsler?",
            description:
                "Du har rett til å bestemme om du vil akseptere eller avvise informasjonskapsler.",
            bullets: [
                "Preferansebehandler for informasjonskapsler: Du kan sette preferansene dine i vår samtykkebanner for informasjonskapsler som vises når du første gang besøker nettstedet.",
                "Nettleserkontroller: Du kan sette eller endre nettleserkontrollene dine for å akseptere eller avvise informasjonskapsler. Hvis du velger å avvise strengt nødvendige informasjonskapsler, kan du fortsatt bruke nettsiden vår, men tilgangen din til noen funksjoner (som Dashbord og KI-assistent) vil være begrenset.",
                "Fravikelse av analyse: For å velge bort sporing av Google Analytics på tvers av alle nettsider, besøk http://tools.google.com/dlpage/gaoptout.",
            ],
        },
        {
            type: "text",
            title: "7. Hvor ofte oppdaterer vi denne Informasjonskapselpolicyen?",
            description:
                "Vi kan oppdatere denne Informasjonskapselpolicyen fra tid til annen for å reflektere endringer i informasjonskapslene vi bruker eller av andre operative, juridiske eller regulatoriske årsaker. Vennligst besøk denne Informasjonskapselpolicyen regelmessig for å holde deg informert om vår bruk av informasjonskapsler og relaterte teknologier.",
        },
        {
            type: "text",
            title: "8. Dataoppbevaring",
            description:
                "Informasjonskapsler satt gjennom vår nettside har ulik varighet:",
            bullets: [
                "Øktsinformasjonskapsler: Slettes automatisk når du lukker nettleseren din.",
                "Vedvarende informasjonskapsler: Forblir på enheten din i en bestemt periode (vanligvis mellom 30 dager og 24 måneder) eller til du sletter dem manuelt.",
            ],
        },
        {
            type: "text",
            title: "9. Kontakt oss",
            bullets: [
                COMPANY_LEGAL_NAME || COMPANY_NAME || "FUSION FAIRIES LTD",
                `${COMPANY_ADDRESS}`,
                `E-post: ${COMPANY_EMAIL}`,
                `Telefon: ${COMPANY_PHONE}`,
            ],
        },
    ],
};

export default cookiePolicyNo;