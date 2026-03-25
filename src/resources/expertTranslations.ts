import { LangCode } from "@/context/i18nContext";
import { Expert } from "@/types/expert";

type ExpertTranslations = {
    [expertId: string]: {
        subtitle?: string;
        experience?: string;
        education?: string;
        specialties?: string[];
        profile?: Partial<Expert["profile"]>;
    };
};

const expertTranslations: Record<LangCode, ExpertTranslations> = {
    en: {},
    no: {
        expert_marcus_l: {
            subtitle: "Cuisine française",
            experience: "15 år",
            education: "Tsuji kulinariske skole",
            specialties: ["Fransk"],
            profile: {
                headline: "Klassisk fransk kjøkken raffinert gjennom disiplin",
                about: [
                    "Marcus Laurent er en klassisk utdannet fransk kokk med over 15 års erfaring.",
                    "Arbeidet hans fokuserer på presisjon, teknikk og jevnt høy kvalitet.",
                ],
                philosophy: "Mestre teknikk først, så kommer kreativiteten naturlig.",
                achievements: [
                    "Jobbet på Michelin-restauranter",
                    "Veiledet over 200 profesjonelle kokker",
                ],
            },
        },
        expert_sarah_j: {
            subtitle: "Gastronomie moléculaire",
            experience: "12 år",
            education: "Le Cordon Bleu",
            specialties: ["Molekylær gastronomi", "Fransk"],
            profile: {
                headline: "Vitenskap møter kreativitet i moderne matlaging",
                about: [
                    "Sarah spesialiserer seg på molekylær gastronomi og eksperimentell matlaging.",
                    "Hun gjør kompleks kulinarisk vitenskap tilgjengelig for fagfolk.",
                ],
                philosophy: "Nysgjerrighet og eksperimentering driver innovasjon.",
                achievements: [
                    "Internasjonale kulinariske workshops",
                    "Publiserte forskningsbaserte oppskrifter",
                ],
            },
        },
        expert_kenji_t: {
            subtitle: "Japansk kjøkken",
            experience: "18 år",
            education: "Tokyo kulinariske institutt",
            specialties: ["Japansk kjøkken"],
            profile: {
                headline: "Disiplin, balanse og respekt for råvarer",
                about: [
                    "Kenji Tanaka er en mester i tradisjonell japansk matlaging.",
                    "Han legger vekt på timing, balanse og presisjon i hver rett.",
                ],
                philosophy: "Respekter prosessen, hedre ingrediensene.",
                achievements: [
                    "Opplært av mestere i Kyoto",
                    "Spesialist i kaiseki-kjøkken",
                ],
            },
        },
        expert_maria_g: {
            subtitle: "Konditorkunst",
            experience: "10 år",
            education: "Madrid konditoriakademi",
            specialties: ["Spansk", "Konditorkunst"],
            profile: {
                headline: "Konditorkunst som kunst og håndverk",
                about: [
                    "Maria kombinerer spanske tradisjoner med moderne konditorestetikk.",
                    "Dessertene hennes fokuserer på balanse og visuell perfeksjon.",
                ],
                philosophy: "Dessert skal være vakker og presis.",
                achievements: [
                    "Prisvinnende konditor",
                    "Presentert i europeiske konditormagasiner",
                ],
            },
        },
        expert_alex_r: {
            subtitle: "Hjemmelaging",
            experience: "6 år",
            education: "Nettbasert kulinarisk program",
            specialties: ["Internasjonalt"],
            profile: {
                headline: "Matlaging gjort enkelt for alle",
                about: [
                    "Alex fokuserer på enkel og tilgjengelig hjemmelaging.",
                    "Kursene hans er ideelle for helt nybegynnere.",
                ],
                philosophy: "Alle kan lage mat med riktig veiledning.",
                achievements: [
                    "10k+ nybegynnerstudenter",
                    "Populær instruktør i matlaging på nett",
                ],
            },
        },
        expert_luca_b: {
            subtitle: "Italiensk kjøkken",
            experience: "14 år",
            education: "ALMA kulinariske skole",
            specialties: ["Italiensk"],
            profile: {
                headline: "Italiensk tradisjon med en moderne sjel",
                about: [
                    "Luca bevarer autentiske italienske smaker.",
                    "Han moderniserer klassikere uten å miste tradisjonen.",
                ],
                philosophy: "Tradisjon utvikler seg, men forsvinner aldri.",
                achievements: [
                    "Jobbet i Roma og Milano",
                    "Spesialist i regionalt italiensk kjøkken",
                ],
            },
        },
        expert_emily_c: {
            subtitle: "Asiatisk fusion",
            experience: "11 år",
            education: "Hong Kong kulinariske akademi",
            specialties: ["Kinesisk", "Fusion"],
            profile: {
                headline: "Der asiatiske smaker møtes på en kreativ måte",
                about: [
                    "Emily kombinerer asiatiske kjøkken i moderne fusionretter.",
                    "Stilen hennes er dristig, eksperimentell og raffinert.",
                ],
                philosophy: "Fusion må respektere opprinnelsen.",
                achievements: [
                    "Konsulent for fusionmenyer",
                    "Internasjonale matfestivaler",
                ],
            },
        },
        expert_david_m: {
            subtitle: "BBQ og grill",
            experience: "16 år",
            education: "Texas BBQ Institute",
            specialties: ["Amerikansk"],
            profile: {
                headline: "Perfekt BBQ på lav varme over lang tid",
                about: [
                    "David er en mester i amerikanske BBQ-teknikker.",
                    "Han fokuserer på røyking, timing og kontroll av ild.",
                ],
                philosophy: "Tålmodighet skaper smak.",
                achievements: [
                    "Finalist i BBQ-mesterskap",
                    "Pitmaster-instruktør",
                ],
            },
        },
        expert_anna_k: {
            subtitle: "Sunt kjøkken",
            experience: "9 år",
            education: "Ernæringsakademiet i Warszawa",
            specialties: ["Polsk", "Europeisk"],
            profile: {
                headline: "Sunn mat uten kompromisser",
                about: [
                    "Anna spesialiserer seg på balansert europeisk mat.",
                    "Hun kombinerer ernæring med god smak.",
                ],
                philosophy: "Helse og glede kan sameksistere.",
                achievements: [
                    "Sertifisert ernæringskokk",
                    "Menyer for velvære-retreater",
                ],
            },
        },
        expert_pierre_d: {
            subtitle: "Fransk konditorkunst",
            experience: "20 år",
            education: "École Ferrandi",
            specialties: ["Fransk", "Konditorkunst"],
            profile: {
                headline: "Kunsten bak klassisk fransk konditorkunst",
                about: [
                    "Pierre er en mester i tradisjonelle franske desserter.",
                    "Undervisningen hans fokuserer på struktur og konsistens.",
                ],
                philosophy: "Presisjon er sjelen i konditorkunst.",
                achievements: [
                    "20+ års erfaring med undervisning i konditorkunst",
                    "Jobbet med ledende konditorier i Paris",
                ],
            },
        },
        expert_sofia_n: {
            subtitle: "Vegetarisk kjøkken",
            experience: "8 år",
            education: "Plantebasert kulinarisk skole",
            specialties: ["Vegetarisk"],
            profile: {
                headline: "Vegetarmat uten grenser",
                about: [
                    "Sofia redefinerer vegetarisk matlaging.",
                    "Rettene hennes er kreative og sesongbaserte.",
                ],
                philosophy: "Planter fortjener kreativitet.",
                achievements: [
                    "Forkjemper for plantebasert matlaging",
                    "Workshops i økologisk matlaging",
                ],
            },
        },
        expert_omar_h: {
            subtitle: "Midtøstlig kjøkken",
            experience: "13 år",
            education: "Beirut kulinariske institutt",
            specialties: ["Midtøstlig"],
            profile: {
                headline: "Autentiske smaker fra Midtøsten",
                about: [
                    "Omar bringer tradisjonelle oppskrifter fra Midtøsten.",
                    "Kjøkkenet hans gjenspeiler familie og arv.",
                ],
                philosophy: "Mat forteller historie.",
                achievements: [
                    "Ambassadør for regionalt kjøkken",
                    "Kulturelle matlagingsarrangementer",
                ],
            },
        },
        expert_julia_s: {
            subtitle: "Europeisk hjemmelaging",
            experience: "7 år",
            education: "Berlin kulinariske studio",
            specialties: ["Tysk", "Europeisk"],
            profile: {
                headline: "Komfortmat for hverdagen",
                about: [
                    "Julia fokuserer på enkle europeiske retter.",
                    "Stilen hennes er lun og lett tilgjengelig.",
                ],
                philosophy: "Mat skal føles som hjemme.",
                achievements: [
                    "Populære nybegynnerkurs",
                    "Familieorienterte matlagingsprogrammer",
                ],
            },
        },
        expert_mateo_r: {
            subtitle: "Middelhavskjøkken",
            experience: "15 år",
            education: "Middelhavets kulinariske akademi",
            specialties: ["Middelhavet", "Italiensk"],
            profile: {
                headline: "Middelhavets friskhet og balanse",
                about: [
                    "Mateo spesialiserer seg på middelhavsbasert sjømat.",
                    "Kjøkkenet hans fremhever friskhet og enkelhet.",
                ],
                philosophy: "Ferskhet er alt.",
                achievements: [
                    "Konsulent for kystrestauranter",
                    "Ekspert på sjømatkjøkken",
                ],
            },
        },
        expert_nina_p: {
            subtitle: "Østeuropeisk kjøkken",
            experience: "12 år",
            education: "Prahas kulinariske institutt",
            specialties: ["Ukrainsk", "Tsjekkisk"],
            profile: {
                headline: "Østeuropeiske tradisjoner nytolket",
                about: [
                    "Nina bringer autentiske østeuropeiske oppskrifter.",
                    "Rettene hennes hedrer tradisjon med moderne presentasjon.",
                ],
                philosophy: "Respekter røttene, raffiner utførelsen.",
                achievements: [
                    "Bevaring av tradisjonell mat",
                    "Kulturelle matlagingsworkshops",
                ],
            },
        },
    },
};

export function getTranslatedExpert(expert: Expert, lang: LangCode): Expert {
    if (lang === "en") {
        return expert;
    }

    const translations = expertTranslations[lang]?.[expert.id];
    if (!translations) {
        return expert;
    }

    return {
        ...expert,
        subtitle: translations.subtitle ?? expert.subtitle,
        experience: translations.experience ?? expert.experience,
        education: translations.education ?? expert.education,
        specialties: translations.specialties ?? expert.specialties,
        profile: {
            ...expert.profile,
            ...translations.profile,
        },
    };
}
