import { COMPANY_NAME } from "@/resources/constants";

export type SiteMetadataEntry = {
    title: string;
    description: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
};

export const siteMetadata = {
    home: {
        title: `${COMPANY_NAME} — Lær å Lage Mat Som en Kokk`,
        description: "Velg din vei: personlige kurs skrevet av ekte profesjonelle kokker, eller en tilpasset KI-drevet matlagningsplan levert innen 4 timer. Ingen abonnementer. Bare læring.",
        keywords: [
            "matlagningskurs",
            "kokkutdanning",
            "KI matlagningsassistent",
            "kulinarisk læring",
            "profesjonelle kokker",
            "matlagningsklasser",
            "oppskriftsgenerering"
        ]
    },
    pricing: {
        title: `Priser — ${COMPANY_NAME}`,
        description: "Fleksibel point-basert prising. Kjøp points én gang, bruk dem når som helst. Velg mellom kokk-skrevne kurs eller KI-genererte matlagningsplaner.",
        keywords: [
            "matlagningskurs priser",
            "point system",
            "kokk kurs",
            "KI matlagningsplaner",
            "kulinarisk utdanning priser"
        ]
    },
    about: {
        title: `Om Oss — ${COMPANY_NAME}`,
        description: "Lær om vår misjon om å gjøre profesjonell kulinarisk kunnskap tilgjengelig for alle gjennom kokk-ledede kurs og KI-drevet personalisering.",
        keywords: [
            "om cheffmate",
            "kulinarisk utdanning",
            "kokk kurs",
            "matlagningsplattform",
            "kulinarisk læring"
        ]
    },
    getStarted: {
        title: `Kom i Gang — ${COMPANY_NAME}`,
        description: "Start din kulinariske reise i dag. Opprett en konto, kjøp points, og velg din læringsvei med profesjonelle kokker eller KI-assistanse.",
        keywords: [
            "starte matlaging",
            "kulinariske kurs",
            "kokkutdanning",
            "matlagningsutdanning",
            "lære å lage mat"
        ]
    },
    chefs: {
        title: `Kokker — ${COMPANY_NAME}`,
        description: "Bla gjennom profesjonelle kokker etter kjøkken, erfaring og undervisningsstil. Lær direkte fra eksperter som matcher målene dine.",
        keywords: [
            "profesjonelle kokker",
            "kokk kurs",
            "kulinariske eksperter",
            "matlagningsinstruktører",
            "kokk profiler"
        ]
    },
    chefProfile: {
        title: `Kokk Profil — ${COMPANY_NAME}`,
        description: "Lær fra en profesjonell kokk. Bestill et personlig matlagningskurs tilpasset ditt ferdighetsnivå og mål.",
        keywords: [
            "kokk profil",
            "profesjonell kokk",
            "matlagningskurs",
            "kulinarisk ekspert",
            "kokkutdanning"
        ]
    },
    joinTeam: {
        title: `Bli Med i Teamet — ${COMPANY_NAME}`,
        description: "Vi bygger et distribuert team av fagfolk som verdsetter kvalitet, uavhengighet og ekte innvirkning. Hvis du elsker det du gjør — vil vi gjerne høre fra deg.",
        keywords: [
            "karrierer",
            "bli med i teamet",
            "jobbmuligheter",
            "ekstern arbeid",
            "kulinariske karrierer"
        ]
    },
    signIn: {
        title: `Logg Inn — ${COMPANY_NAME}`,
        description: "Logg inn på ditt kjøkken. Fortsett din kulinariske reise med KI og mesterkokker.",
        keywords: [
            "logg inn",
            "innlogging",
            "konto",
            "kulinarisk dashboard"
        ]
    },
    signUp: {
        title: `Registrer Deg — ${COMPANY_NAME}`,
        description: "Opprett din konto og start din reise mot kulinarisk eksellens i dag.",
        keywords: [
            "registrer deg",
            "registrering",
            "opprett konto",
            "kulinarisk læring"
        ]
    },
    contactUs: {
        title: `Kontakt Oss — ${COMPANY_NAME}`,
        description: "Ta kontakt med oss. Be om SEO-tjenester eller still spørsmål om plattformen vår.",
        keywords: [
            "kontakt",
            "støtte",
            "hjelp",
            "kundeservice"
        ]
    },
    profile: {
        title: `Profil — ${COMPANY_NAME}`,
        description: "Administrer din konto, se dine ordre, transaksjoner og kulinariske krediter.",
        keywords: [
            "profil",
            "konto",
            "dashboard",
            "ordre",
            "transaksjoner"
        ]
    },
    checkout: {
        title: `Kasse — ${COMPANY_NAME}`,
        description: "Fullfør kjøpet ditt sikkert. Kjøp points for å låse opp premium kokk-ledede mesterklasser og KI-oppskriftsgenereringer.",
        keywords: [
            "kasse",
            "kjøp",
            "kjøp points",
            "betaling"
        ]
    }
} as const;

export function getSiteMetadata(pageKey: keyof typeof siteMetadata) {
    return siteMetadata[pageKey];
}
