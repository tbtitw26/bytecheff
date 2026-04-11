import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: "Personvernpolicy – Cheffmate",
        description:
            "Cheffmate Personvernpolicy: detaljer om hvilke data vi samler inn, hvordan vi bruker dem, oppbevaring, overføringer og dine rettigheter under UK GDPR.",
        keywords: [
            "personvernpolicy",
            "GDPR",
            "databeskyttelse",
            "cheffmate",
            "matlaging KI",
            "personopplysninger",
            "uk gdpr",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: "Cheffmate – Personvernpolicy",
            description:
                "Gjennomsiktig personvernpraksis for Cheffmate matlagningsplattform under UK GDPR.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Personvernpolicy",
            description: "Gyldig fra: 20. januar 2026",
        },
        {
            type: "text",
            title: "1. Introduksjon",
            description:
                "Vi respekterer ditt personvern og er forpliktet til å beskytte dine personopplysninger. Denne Personvernpolicyen forklarer hvilke personopplysninger vi samler inn, hvorfor vi bruker dem, hvor lenge vi oppbevarer dem, og hvordan du kan utøve dine rettigheter når du bruker cheffmate.co.uk og våre relaterte digitale kulinariske tjenester («Tjenesten»).\n\nVed å bruke Tjenesten anerkjenner du at dine personopplysninger vil bli behandlet i samsvar med denne Personvernpolicyen og gjeldende lov om databeskyttelse, inkludert UK GDPR og Data Protection Act 2018.",
            bullets: [
                `Kontroller: ${COMPANY_LEGAL_NAME || COMPANY_NAME || "FUSION FAIRIES LTD"} (Organisasjonsnummer ${COMPANY_NUMBER}), ${COMPANY_ADDRESS} («Cheffmate», «vi», «oss», «vår»).`,
                `Kontakt: ${COMPANY_EMAIL}`,
                "Omfang: Denne Policyen gjelder alle brukere av Tjenesten, inkludert personer som kjøper Tokens, får tilgang til Kokkekurs eller genererer KI Matlagningsplaner.",
            ],
        },
        {
            type: "text",
            title: "2. Personopplysninger vi samler inn",
            description:
                "Vi samler kun inn data som er nødvendig for å gi deg kulinarisk utdanning, generere personlige KI-oppskrifter, behandle betalinger og forbedre plattformen vår.",
        },
        {
            type: "text",
            title: "2.1. Data du oppgir direkte",
            bullets: [
                "Konto og identitet: Navn, e-postadresse og passord.",
                "Kulinariske og KI-opplysninger: Informasjon du oppgir når du ber om en KI Matlagningsplan. Dette kan inkludere matlagningsferdighetsnivå, tilgjengelig kjøkkenutstyr, foretrukne kjøkkener og spesifikke ingredienser.",
                "Faktureringsinformasjon: Faktureringsnavn, registrert adresse og betalingsmetodedetaljer (behandles sikkert via tredjeparter).",
                "Lommebok og Tokens: Transaksjonshistorikk, Token-forbrukslogger (f.eks. «5000 Tokens brukt på Fransk kjøkken-kurs») og nåværende saldo.",
                "Support og kommunikasjon: Kommunikasjon med vårt supportteam angående tekniske problemer eller refusjoner.",
            ],
        },
        {
            type: "text",
            title: "2.2. Data samlet inn automatisk",
            bullets: [
                "Tekniske data: IP-adresse, nettlesertype, enhetsinformasjon, tidssone og operativsystem.",
                "Bruksdata: Hvordan du bruker plattformen (f.eks. hvilke Kokkekurs du ser, videofullføringsrater, prompter brukt til KI-generering).",
                "Sikkerhetstelemetri: Innloggingslogger, mislykkede autentiseringsforsøk og svindeloppdagelsessignaler for å beskytte kontoen din og Token-saldoen.",
            ],
        },
        {
            type: "text",
            title: "2.3. Data fra tredjeparter",
            bullets: [
                "Betalingsbehandlere: Bekreftelse av betaling, delvise kortdetaljer (siste 4 sifre) og svindelrisikoscorer. Vi lagrer ikke fulle kredittkortnumre på våre servere.",
            ],
        },
        {
            type: "text",
            title: "2.4. Spesielle kategorier data (helse, allergier og kosthold)",
            description:
                "Vi krever ikke «spesielle kategorier» data (som helsetilstander eller strenge medisinske dieter) for å opprette en konto. Men hvis du frivillig oppgir slik informasjon til KI Matlagningsassistenten (f.eks. «Jeg har peanøttallergi», «Jeg er diabetiker», «Jeg trenger en glutenfri plan»), samtykker du uttrykkelig til at vi behandler disse helserelaterte dataene. Vi bruker disse dataene utelukkende til å generere den forespurte matlagningsplanen din og bruker dem ikke til markedsføringsformål.",
        },
        {
            type: "text",
            title: "3. Hvorfor vi behandler dine data og juridiske grunnlag",
            description:
                "Vi behandler personopplysninger under UK GDPR på følgende juridiske grunnlag:",
        },
        {
            type: "text",
            title: "3.1. Oppfyllelse av en avtale",
            bullets: [
                "For å opprette kontoen din og gi tilgang til plattformen.",
                "For å levere Kokkekurs og generere KI Matlagningsplaner du har låst opp med Tokens.",
                "For å administrere Token-saldoen din og behandle betalinger.",
            ],
        },
        {
            type: "text",
            title: "3.2. Legitime interesser",
            bullets: [
                "Svindelforebygging: Oppdage uvanlig token-bruk, skrapingforsøk eller mistenkelige betalinger.",
                "Tjenesteforbedring: Analysere aggregerte bruksdata (f.eks. hvilke kurs som er mest populære) for å forbedre tilbudet vårt.",
                "Sikkerhet: Beskytte infrastrukturen vår mot cyberangrep.",
            ],
        },
        {
            type: "text",
            title: "3.3. Lovpålagt forpliktelse",
            bullets: [
                "Opprettholde finansielle poster for skattemyndighetene (HMRC).",
                "Overholde forbrukerbeskyttelseslover angående digitale refusjoner.",
            ],
        },
        {
            type: "text",
            title: "3.4. Uttrykkelig samtykke",
            bullets: [
                "Behandling av frivillig oppgitt kostholds-/helsedata (allergier) utelukkende for KI-oppskriftsgenerering.",
                "Sending av markedsføringsnyhetsbrev (som du kan melde deg av når som helst).",
            ],
        },
        {
            type: "text",
            title: "4. Automatisert behandling og KI",
            bullets: [
                "4.1. KI-generering: Kjernen i vår KI Matlagningsassistent er avhengig av generativ KI (store språkmodeller). Dine inndata (ingredienser, preferanser) behandles av disse algoritmene for å produsere tilpassede oppskrifter.",
                "4.2. Datapersonvern i KI: Vi bruker avtaler på bedriftsnivå med våre KI-leverandører. Dine spesifikke opplysninger og kostholdskrav behandles kortvarig for å generere resultatet og brukes ikke av disse tredjepartsleverandørene til å trene deres offentlige KI-modeller.",
                "4.3. Ingen juridiske avgjørelser: Vår KI fungerer utelukkende som en kulinarisk utkastassistent. Den tar ikke automatiserte avgjørelser som har juridiske, finansielle eller tilsvarende betydelige effekter på deg.",
            ],
        },
        {
            type: "text",
            title: "5. Deling og internasjonale overføringer",
            description:
                "Vi deler personopplysninger kun når det er nødvendig for å drive Tjenesten:",
            bullets: [
                "KI og skyleverandører: Pålitelige tredjepartsbehandlere (f.eks. skylevering, KI API-leverandører) som leverer beregningskraft for å hoste videoene våre og generere oppskriftene dine.",
                "Betalingsporter: For å behandle korttransaksjoner sikkert.",
                "Kokkepartnere: Profesjonelle kokker som opptrer som uavhengige entreprenører mottar aggregerte, anonymiserte data om ytelsen til kursene sine. De mottar ikke din personlige kontaktinformasjon med mindre du uttrykkelig kommuniserer med dem via en plattformfunksjon.",
                "Internasjonale overføringer: Noen av våre teknologipartnere (f.eks. serververter eller KI-leverandører) kan være lokalisert utenfor Storbritannia eller EØS (f.eks. i USA). Vi sikrer at dataene dine er beskyttet gjennom: Tilstrekkelighetsvedtak: UK/EUs anerkjennelse av mottakerlandets standarder for databeskyttelse. Standard kontraktsklausuler (SCCs / IDTA): Juridiske kontrakter som krever at mottakeren beskytter dataene dine etter britiske standarder.",
            ],
        },
        {
            type: "text",
            title: "6. Oppbevaring av data",
            description: "Vi følger strenge policyer for dataoppbevaring:",
            bullets: [
                "Kontodata og innhold: Vi oppbevarer kontodetaljene dine og genererte KI Matlagningsplaner i dashbordet ditt så lenge kontoen din er aktiv.",
                "Inaktive kontoer: Hvis kontoen din forblir fullstendig inaktiv (ingen innlogginger, ingen Token-bruk) i 24 måneder, kan vi permanent slette kontoen din, Token-saldoen og genererte data for å spare lagring og beskytte personvernet.",
                "Finansielle poster: Vi oppbevarer transaksjonsdata (Token-kjøp og refusjonsforespørsler) i 6 år som kreves av britisk skatte- og regnskapslovgivning.",
            ],
        },
        {
            type: "text",
            title: "7. Sikkerhet",
            description:
                "Vi behandler dataene dine med høy konfidensialitet. Tiltak inkluderer:\n\nSelv om vi implementerer robust sikkerhet, er ingen overføring på nett 100 % sikker. Du er ansvarlig for å holde passordet til kontoen din konfidensielt.",
            bullets: [
                "Kryptering: Data krypteres under overføring (TLS/SSL) og i ro hvor mulig.",
                "Tilgangskontroll: Strenge interne tilgangskontroller for supportteamet vårt.",
                "Segregering: Vi skiller strengt betalingsportdata fra din kulinariske profil.",
            ],
        },
        {
            type: "text",
            title: "8. Dine rettigheter",
            description:
                `Under UK GDPR har du rett til:\n\nFor å utøve disse rettighetene, e-post ${COMPANY_EMAIL}. Vi etterstreber å svare innen 30 dager.`,
            bullets: [
                "Tilgang: Be om en kopi av personopplysningene vi har om deg.",
                "Retting: Rette unøyaktige personopplysninger.",
                "Sletting: Be om sletting av dataene dine («retten til å bli glemt»), med forbehold om vår lovpålagte forpliktelse til å oppbevare finansielle poster.",
                "Portabilitet: Be om dataene dine i et maskinlesbart format.",
                "Trekke tilbake samtykke: Trekke tilbake samtykket ditt til behandling av kostholds-/helsedata når som helst (ved å slette opplysningene eller kontoen din).",
                "Innvende: Innvende mot behandling basert på legitime interesser (f.eks. direkte markedsføring).",
            ],
        },
        {
            type: "text",
            title: "9. Informasjonskapsler",
            description:
                "Vi bruker informasjonskapsler for å administrere innloggingsøkten din, sikre Token-lommeboken din og analysere nettstedstrafikk. Essensielle informasjonskapsler er nødvendige for at Tjenesten skal fungere. For flere detaljer, vennligst se vår Informasjonskapselpolicy.",
        },
        {
            type: "text",
            title: "10. Kontaktinformasjon og klager",
            description:
                "Tilsynsmyndighet: Hvis du mener vi har håndtert dine personopplysninger feil, har du rett til å inngi klage til Information Commissioner's Office (ICO) i Storbritannia (www.ico.org.uk). Vi vil imidlertid sette pris på muligheten til å ta tak i bekymringene dine direkte før du henvender deg til ICO.",
            bullets: [
                COMPANY_LEGAL_NAME || COMPANY_NAME || "FUSION FAIRIES LTD",
                `Organisasjonsnummer: ${COMPANY_NUMBER}`,
                `Adresse: ${COMPANY_ADDRESS}`,
                `E-post: ${COMPANY_EMAIL}`,
                `Telefon: ${COMPANY_PHONE}`,
            ],
        },
    ],
};

export default privacyPolicySchema;