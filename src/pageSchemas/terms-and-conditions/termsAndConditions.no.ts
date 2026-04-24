import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: "Vilkår og Betingelser – Cheffmate",
        description:
            "Offisielle Vilkår og Betingelser for bruk av Cheffmate.co.uk – regler, betalinger, points, refusjoner, ansvar og brukerrettigheter.",
        keywords: [
            "vilkår og betingelser",
            "cheffmate",
            "points",
            "refusjoner",
            "kokkekurs",
            "KI matlaging",
            "digitalt innhold",
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: "Cheffmate – Vilkår og Betingelser",
            description:
                "Fullstendige Vilkår og Betingelser for Cheffmate matlagningsplattform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        {
            type: "text",
            title: "Vilkår og Betingelser",
            description: "Gyldig fra: 20. januar 2026",
        },
        {
            type: "text",
            title: "1. Introduksjon",
            bullets: [
                `1.1. Disse Vilkårene og Betingelsene («Vilkår») styrer din tilgang til og bruk av Cheffmate.co.uk nettsiden og tjenester («Tjenesten»), drevet av ${COMPANY_LEGAL_NAME || COMPANY_NAME || "FUSION FAIRIES LTD"} (organisasjonsnummer: ${COMPANY_NUMBER}, registrert kontor: ${COMPANY_ADDRESS}) («vi», «oss», «vår»).`,
                "1.2. Ved å få tilgang til eller bruke Tjenesten, opprette en konto eller kjøpe Points, Kokkekurs eller KI Matlagningsplaner, godtar du å være bundet av disse Vilkårene. Hvis du ikke godtar, må du ikke bruke Tjenesten.",
            ],
        },
        {
            type: "text",
            title: "2. Definisjoner",
            bullets: [
                '"Konto" betyr brukerprofilen opprettet på Tjenesten.',
                '"Kokkekurs" betyr forhåndsinnspilte eller strukturerte kulinariske kurs og digitalt læringsmateriell opprettet av profesjonelle kokker.',
                '"KI Matlagningsplan" betyr en personlig tilpasset kulinarisk plan eller oppskrift generert av vår KI Matlagningsassistent.',
                '"Digitalt innhold" refererer samlet til Kokkekurs og KI Matlagningsplaner.',
                '"Point(s)" betyr den interne virtuelle kontoenheten som utelukkende brukes til å låse opp digitalt innhold på plattformen.',
            ],
        },
        {
            type: "text",
            title: "3. Kvalifikasjon og Kontoregistrering",
            bullets: [
                "3.1. Du må være minst 18 år for å registrere deg.",
                "3.2. Du må oppgi nøyaktig informasjon. Du er ansvarlig for å beskytte dine påloggingsdetaljer.",
                `3.3. Du må varsle oss umiddelbart på ${COMPANY_EMAIL} ved uautorisert bruk.`,
            ],
        },
        {
            type: "text",
            title: "4. Points, Priser og Betalinger",
            bullets: [
                "4.1. Points' art: Points er et internt kredittsystem for tilgang til digitalt innhold. De er ikke lovlig betalingsmiddel eller finansielle instrumenter og kan ikke byttes mot kontanter utenfor plattformen.",
                "4.2. Priser og skatter: Priser vist for Point-pakker er eksklusive gjeldende skatter (som mva). Eventuelle gjeldende skatter beregnes og legges til totalen din ved kassen før betalingsbekreftelse.",
                "4.3. Betalinger: Vi bruker sikre betalingsbehandlere fra tredjeparter. Ved å sende inn betalingsdetaljer autoriserer du oss (via våre behandlere) til å belaste totalbeløpet.",
                "4.4. Inaktive kontoer: Hvis kontoen din forblir fullstendig inaktiv i en sammenhengende periode på 24 måneder, forbeholder vi oss retten til å klassifisere kontoen som «inaktiv» og tømme Point-saldoen, etter å ha sendt skriftlig varsel 30 dager i forveien.",
            ],
        },
        {
            type: "text",
            title: "5. Omfang av tjenester og levering",
            bullets: [
                "5.1. Tjenesteomfang: Avhengig av dine valg kan tjenestene kjøpt via Points inkludere: • Kokkekurs: Strukturerte kulinariske kurs levert av ekte profesjonelle kokker. • KI Matlagningsassistent: Automatisk generering av personlige matlagningsplaner basert på dine valgfrie opplysninger (f.eks. kosthold, ferdighetsnivå).",
                "5.2. Leveringspolicy: • Digital levering: Alt digitalt innhold leveres digitalt. Det vil være tilgjengelig direkte i kontodashbordet ditt og/eller et varsel sendes til din registrerte e-postadresse. • Tidsrammer: Kokkekurs: Leveres og er tilgjengelig i dashbordet ditt umiddelbart ved Point-innløsning. KI Matlagningsplaner: Genereres og leveres til dashbordet ditt vanligvis innen 4 timer etter innsending av forespørselen din. • Ansett aksept: Du har 7 dager fra levering til å gjennomgå det digitale innholdet. Hvis ingen tekniske problemer eller alvorlige feil rapporteres til support innen denne tidsrammen, anses tjenesten som vellykket fullført.",
                "5.3. Teknisk kompatibilitet: Vi garanterer ikke at all tredjepartsprogramvare, eldre nettlesere eller utdaterte enheter vil gjengi videokurs eller tekstdokumenter perfekt.",
            ],
        },
        {
            type: "text",
            title: "6. Refusjoner, kansellering og forbrukerrettigheter",
            bullets: [
                "6.1. Rett til å kansellere: I henhold til forbrukerloven har du 14 dager til å kansellere kjøpet av en Point-pakke, forutsatt at du ikke har brukt noen av Pointene.",
                "6.2. Tap av rett: Ved å innløse Points for å låse opp et kurs eller generere en KI-plan samtykker du til umiddelbar digital levering og mister refusjonsretten for de brukte Pointene.",
                `6.3. Forespørsel om refusjon: Alle refusjonsforespørsler for ubrukte Points eller rapporter om alvorlig defekt digitalt innhold (f.eks. KI-hallusinasjoner eller tekniske feil) må sendes til vårt supportteam på ${COMPANY_EMAIL}. Vi behandler ikke automatiske refusjoner.`,
            ],
        },
        {
            type: "text",
            title: "7. Uavhengige entreprenører og plattformens rolle",
            bullets: [
                `7.1. ${COMPANY_LEGAL_NAME || COMPANY_NAME || "FUSION FAIRIES LTD"} fungerer som en plattform som tilrettelegger for kulinarisk utdanning. De profesjonelle kokkene som leverer Kokkekurs på vår plattform er uavhengige entreprenører/frilansere, ikke våre ansatte.`,
                "7.2. Selv om vi nøye velger våre kokkepartnere, tilhører meninger, teknikker og råd uttrykt i Kokkekurs utelukkende de respektive kokkene.",
            ],
        },
        {
            type: "text",
            title: "8. Helse, sikkerhet og KI-fraskrivelser",
            bullets: [
                "8.1. Helse og sikkerhet: Matlaging innebærer iboende risikoer (kniver, varme, rått mat). Du påtar deg fullt ansvar for din egen sikkerhet. Vi er ikke ansvarlige for skader, matforgiftning eller skade på eiendom.",
                "8.2. KI-generert innhold: Vår KI Matlagningsassistent bruker avanserte maskinlæringsmodeller. Selv om vi streber etter nøyaktighet, kan KI produsere uventede eller unøyaktige resultater. Du er alene ansvarlig for å gjennomgå KI-oppskrifter for riktige tilberedningstider, trygge temperaturer og sunn fornuft.",
                "8.3. Allergier: Å oppgi kostholds- eller allergiinformasjon til KI-en er valgfritt. Hvis oppgitt, vil KI-en prøve å tilpasse seg, men du må strengt verifisere alle ingredienser selv. Cheffmate tilbyr utdanning, ikke medisinsk rådgivning.",
            ],
        },
        {
            type: "text",
            title: "9. Immaterielle rettigheter",
            bullets: [
                "9.1. All immateriell rett i plattformen og digitalt innhold tilhører oss eller våre lisensgivere/kokkepartnere.",
                "9.2. Du gis en ikke-eksklusiv, ikke-overførbar lisens kun for personlig bruk. Videresalg eller distribusjon av innholdet er strengt forbudt.",
            ],
        },
        {
            type: "text",
            title: "10. Ansvarsbegrensning og erstatning",
            bullets: [
                "10.1. Ingenting utelukker ansvar for død eller personskade forårsaket av vår direkte uaktsomhet eller bedrageri.",
                "10.2. Vårt totale ansvar overfor deg skal ikke overstige beløpet du har betalt for Points i de 12 månedene før kravet. Vi er ikke ansvarlige for indirekte eller følgeskader.",
                `10.3. Du godtar å erstatte ${COMPANY_LEGAL_NAME || COMPANY_NAME || "FUSION FAIRIES LTD"} og dens uavhengige entreprenører for krav som følge av din misbruk av Tjenesten eller grov uaktsomhet på kjøkkenet.`,
            ],
        },
        {
            type: "text",
            title: "11. Databeskyttelse",
            description:
                "Vi behandler personopplysninger, inkludert valgfrie kostholdsopplysninger, i samsvar med vår Personvernpolicy.",
        },
        {
            type: "text",
            title: "12. Endringer, lov og jurisdiksjon",
            bullets: [
                "12.1. Vi kan oppdatere disse Vilkårene fra tid til annen. Fortsatt bruk utgjør aksept.",
                "12.2. Disse Vilkårene styres av lovene i England og Wales. Domstolene i England og Wales skal ha eksklusiv jurisdiksjon (med forbehold om obligatoriske lokale forbrukerrettigheter).",
            ],
        },
        {
            type: "text",
            title: "13. Kontaktinformasjon",
            bullets: [
                COMPANY_LEGAL_NAME || COMPANY_NAME || "FUSION FAIRIES LTD",
                `Organisasjonsnummer: ${COMPANY_NUMBER}`,
                `Registrert kontor: ${COMPANY_ADDRESS}`,
                `Telefon: ${COMPANY_PHONE}`,
                `E-post: ${COMPANY_EMAIL}`,
            ],
        },
    ],
};

export default termsSchema;
