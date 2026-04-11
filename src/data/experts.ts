import {Expert} from "@/types/expert";


export function getExpertBySlug(slug: string) {
    return experts.find((e) => e.slug === slug);
}

export const experts: Expert[] = [
    {
        id: "expert_adrian_marchand",
        slug: "adrian-marchand",
        avatar: "team1",
        fullName: "@adrian_copperpan",
        rating: 4.9,
        subtitle: "Modern French Technique",
        experience: "17 Years",
        education: "Institut Paul Bocuse",
        experienceLevel: "advanced",
        itemsCount: 18,
        bio: "A refined French technician known for turning restaurant discipline into clear, elegant lessons.",
        categories: ["Advanced"],
        specialties: ["French sauces", "Bistro classics", "Plated mains"],
        profile: {
            headline: "Restaurant-level French cooking taught with calm precision",
            about: [
                "Adrian built his career in high-pressure Paris and Lyon kitchens before moving into culinary education for ambitious home cooks.",
                "His classes focus on pan work, sauce structure, and the quiet habits that make polished cooking repeatable."
            ],
            philosophy: "Control the fundamentals and elegance becomes effortless.",
            achievements: [
                "Led culinary development for two acclaimed contemporary brasseries",
                "Designed a signature foundations program for aspiring private chefs"
            ],
        }
    },

    {
        id: "expert_luca_ferretti",
        slug: "luca-ferretti",
        avatar: "team2",
        fullName: "@luca_pastastudio",
        rating: 4.8,
        subtitle: "Regional Italian Cooking",
        experience: "14 Years",
        education: "ALMA La Scuola Internazionale di Cucina Italiana",
        experienceLevel: "intermediate",
        itemsCount: 15,
        bio: "An Italian specialist who teaches regional depth, handmade pasta, and confident everyday hospitality.",
        categories: ["Intermediate", "Italian"],
        specialties: ["Fresh pasta", "Northern Italian cuisine", "Sunday sauces"],
        profile: {
            headline: "Regional Italian food with warmth, rhythm, and craft",
            about: [
                "Luca trained in Emilia-Romagna and spent years refining menus that balanced tradition with modern service standards.",
                "He teaches students how to cook Italian food that feels generous, precise, and deeply rooted in place."
            ],
            philosophy: "Great Italian cooking begins with restraint, not excess.",
            achievements: [
                "Created a best-selling handmade pasta workshop series",
                "Advised boutique hospitality groups on regional Italian menus"
            ],
        }
    },

    {
        id: "expert_ren_takeda",
        slug: "ren-takeda",
        avatar: "team3",
        fullName: "@ren_knifeandrice",
        rating: 5.0,
        subtitle: "Japanese Seasonal Cuisine",
        experience: "19 Years",
        education: "Hattori Nutrition College",
        experienceLevel: "advanced",
        itemsCount: 12,
        bio: "A composed Japanese mentor whose teaching blends exacting knife work with deep ingredient awareness.",
        categories: ["Advanced"],
        specialties: ["Washoku", "Knife skills", "Seasonal broths"],
        profile: {
            headline: "Japanese technique shaped by seasonality and quiet precision",
            about: [
                "Ren developed his style through traditional apprenticeship and years leading omakase and kaiseki-inspired tasting menus.",
                "His lessons show students how to build flavor through attention, pacing, and disciplined preparation."
            ],
            philosophy: "Precision is a form of respect.",
            achievements: [
                "Curated seasonal tasting programs for luxury ryokan collaborations",
                "Recognized for advanced knife-skills masterclasses across Asia and Europe"
            ],
        }
    },

    {
        id: "expert_elias_bjorn",
        slug: "elias-bjorn",
        avatar: "team4",
        fullName: "@elias_firetable",
        rating: 4.8,
        subtitle: "Live Fire & Nordic Grill",
        experience: "13 Years",
        education: "Copenhagen Hospitality College",
        experienceLevel: "advanced",
        itemsCount: 11,
        bio: "A live-fire chef who teaches heat control, smoke layering, and modern outdoor cooking with elegance.",
        categories: ["Advanced", "Fire Cooking"],
        specialties: ["Wood-fire grilling", "BBQ technique", "Open-flame vegetables"],
        profile: {
            headline: "Fire cooking with discipline, clarity, and modern restraint",
            about: [
                "Elias earned his reputation cooking over embers in Scandinavian coastal kitchens where ingredient quality left no room for clutter.",
                "He teaches students how to manage heat confidently while preserving texture, moisture, and clean flavor."
            ],
            philosophy: "Fire rewards cooks who pay attention.",
            achievements: [
                "Developed premium fire-cooking retreats for boutique resorts",
                "Featured guest instructor at leading outdoor gastronomy events"
            ],
        }
    },

    {
        id: "expert_noah_castell",
        slug: "noah-castell",
        avatar: "team5",
        fullName: "@noah_weeknightchef",
        rating: 4.7,
        subtitle: "Elevated Home Cooking",
        experience: "8 Years",
        education: "San Francisco Culinary Workshop",
        experienceLevel: "beginner",
        itemsCount: 9,
        bio: "A polished home-cooking instructor who makes weeknight meals feel smart, seasonal, and achievable.",
        categories: ["Beginner", "Home Cooking"],
        specialties: ["One-pan dinners", "Kitchen confidence", "Family-style meals"],
        profile: {
            headline: "Confident home cooking without the noise or guesswork",
            about: [
                "Noah built his teaching style around busy households that want better food without restaurant complexity or long prep lists.",
                "His classes focus on practical skills, efficient sequencing, and meals that genuinely fit modern schedules."
            ],
            philosophy: "Good cooking should lower stress, not raise it.",
            achievements: [
                "Built a widely followed essentials curriculum for first-time cooks",
                "Known for approachable premium meal-planning workshops"
            ],
        }
    },

    {
        id: "expert_gabriel_durand",
        slug: "gabriel-durand",
        avatar: "team6",
        fullName: "@gabriel_breadforge",
        rating: 4.9,
        subtitle: "Artisan Bread & Viennoiserie",
        experience: "16 Years",
        education: "Ecole de Boulangerie de Paris",
        experienceLevel: "advanced",
        itemsCount: 17,
        bio: "An artisan baker bringing professional fermentation control and premium bakery standards into the home kitchen.",
        categories: ["Advanced", "Bakery"],
        specialties: ["Sourdough", "Laminated doughs", "Fermented breads"],
        profile: {
            headline: "Professional bread craft explained with rare clarity",
            about: [
                "Gabriel spent over a decade leading production in respected urban bakeries known for long-fermented dough and exacting standards.",
                "He teaches students how to read dough, manage fermentation windows, and produce bakery-quality results consistently."
            ],
            philosophy: "Dough tells the truth if you know how to read it.",
            achievements: [
                "Launched a premium bread program adopted by independent baking schools",
                "Consulted on high-hydration bread systems for boutique bakeries"
            ],
        }
    },

    {
        id: "expert_mateo_ibarra",
        slug: "mateo-ibarra",
        avatar: "team7",
        fullName: "@mateo_tidepantry",
        rating: 4.8,
        subtitle: "Seafood & Coastal Cuisine",
        experience: "12 Years",
        education: "Basque Culinary Center",
        experienceLevel: "intermediate",
        itemsCount: 13,
        bio: "A seafood specialist focused on freshness, confident fish cookery, and clean coastal flavors.",
        categories: ["Intermediate", "Seafood"],
        specialties: ["Fish butchery", "Shellfish", "Coastal Mediterranean cooking"],
        profile: {
            headline: "Seafood cooking that feels precise, generous, and unfussy",
            about: [
                "Mateo trained in port-city kitchens where seafood quality and timing defined every service.",
                "His teaching helps students buy, prep, and cook fish with confidence while preserving natural texture and sweetness."
            ],
            philosophy: "The best seafood needs less interference, not more.",
            achievements: [
                "Created premium seafood fundamentals courses for private members clubs",
                "Led coastal menu development for boutique seaside restaurants"
            ],
        }
    },

    {
        id: "expert_karim_najjar",
        slug: "karim-najjar",
        avatar: "team8",
        fullName: "@karim_oliveandspice",
        rating: 4.9,
        subtitle: "Eastern Mediterranean Table",
        experience: "15 Years",
        education: "Lebanese Academy of Culinary Arts",
        experienceLevel: "intermediate",
        itemsCount: 14,
        bio: "A generous Mediterranean teacher whose classes balance heritage recipes with modern hosting sensibility.",
        categories: ["Intermediate", "Mediterranean"],
        specialties: ["Levantine mezze", "Charcoal grilling", "Feast-style menus"],
        profile: {
            headline: "Mediterranean hospitality taught through flavor, rhythm, and abundance",
            about: [
                "Karim grew up around large family tables and translated that instinct for hospitality into a polished teaching career.",
                "His lessons help students layer bright, smoky, herb-driven flavors into menus designed for sharing."
            ],
            philosophy: "A memorable table is built dish by dish, not all at once.",
            achievements: [
                "Developed a celebrated mezze and grill curriculum for premium home entertainers",
                "Invited speaker on modern Levantine dining concepts"
            ],
        }
    },

    {
        id: "expert_tomasz_varga",
        slug: "tomasz-varga",
        avatar: "team9",
        fullName: "@tomasz_hearthkitchen",
        rating: 4.7,
        subtitle: "Central European Comfort",
        experience: "10 Years",
        education: "Budapest School of Culinary Arts",
        experienceLevel: "intermediate",
        itemsCount: 10,
        bio: "A thoughtful regional instructor reworking Central European classics for a polished contemporary kitchen.",
        categories: ["Intermediate", "Traditional"],
        specialties: ["Regional stews", "Hand-formed dumplings", "Seasonal comfort food"],
        profile: {
            headline: "Traditional comfort cooking sharpened by modern technique",
            about: [
                "Tomasz specializes in recipes shaped by market produce, old-world craft, and the calm discipline of professional kitchens.",
                "He teaches students how to modernize hearty regional food without stripping away its character or warmth."
            ],
            philosophy: "Tradition lasts because it still feeds people well.",
            achievements: [
                "Produced a sought-after series on refined regional home cooking",
                "Worked with heritage food festivals on educational tasting menus"
            ],
        }
    },

    {
        id: "expert_julian_reed",
        slug: "julian-reed",
        avatar: "team10",
        fullName: "@julian_fermentlab",
        rating: 4.8,
        subtitle: "Fermentation & Preservation",
        experience: "11 Years",
        education: "Institute of Food Fermentation Studies",
        experienceLevel: "advanced",
        itemsCount: 16,
        bio: "A modern fermentation instructor who makes cultured foods, pickles, and preservation feel exact but approachable.",
        categories: ["Advanced", "Fermentation"],
        specialties: ["Koji", "Lacto-fermentation", "Seasonal preserves"],
        profile: {
            headline: "Fermentation taught as a practical, modern kitchen craft",
            about: [
                "Julian works at the intersection of flavor development, preservation, and culinary experimentation without losing practical application.",
                "He teaches clear systems for safe, repeatable fermentation that unlock complexity for both home cooks and professionals."
            ],
            philosophy: "Time is an ingredient you can learn to manage.",
            achievements: [
                "Built a premium fermentation curriculum used by contemporary cooking schools",
                "Consulted for restaurants integrating preservation into seasonal menu planning"
            ],
        }
    },

    {
        id: "expert_clara_bellon",
        slug: "clara-bellon",
        avatar: "team11",
        fullName: "@clara_sugaratelier",
        rating: 5.0,
        subtitle: "Contemporary Pastry",
        experience: "18 Years",
        education: "Ecole Nationale Superieure de la Patisserie",
        experienceLevel: "advanced",
        itemsCount: 20,
        bio: "A contemporary pastry authority known for elegant textures, clean finishes, and luxury dessert instruction.",
        categories: ["Advanced", "Pastry"],
        specialties: ["Entremets", "Glazes", "Modern plated desserts"],
        profile: {
            headline: "High-end pastry technique translated for ambitious learners",
            about: [
                "Clara built her reputation in boutique patisseries and luxury dining rooms where precision and visual identity mattered equally.",
                "Her classes break down complex pastry into teachable systems while preserving the sophistication students come for."
            ],
            philosophy: "Beautiful pastry should taste as composed as it looks.",
            achievements: [
                "Developed signature dessert collections for luxury hotel openings",
                "Recognized for advanced online pastry courses with exceptional completion rates"
            ],
        }
    },

    {
        id: "expert_hana_morimoto",
        slug: "hana-morimoto",
        avatar: "team12",
        fullName: "@hana_tokyopantry",
        rating: 4.9,
        subtitle: "Japanese Home Table",
        experience: "9 Years",
        education: "Osaka Culinary Arts Academy",
        experienceLevel: "beginner",
        itemsCount: 8,
        bio: "A warm, polished instructor who makes Japanese home cooking feel accessible, structured, and deeply satisfying.",
        categories: ["Beginner", "Japanese"],
        specialties: ["Donburi", "Miso-based dishes", "Japanese everyday meals"],
        profile: {
            headline: "Japanese home cooking designed for confidence and repeatability",
            about: [
                "Hana focuses on the kind of Japanese food people want to cook often: balanced meals, thoughtful prep, and pantry fluency.",
                "Her lessons are especially strong for beginners who want structure, flavor, and a calm path into a new cuisine."
            ],
            philosophy: "Simple food becomes memorable when it is made with care.",
            achievements: [
                "Created a highly rated introductory Japanese pantry course",
                "Partnered with specialty retailers on premium home-cooking workshops"
            ],
        }
    },

    {
        id: "expert_isla_rowan",
        slug: "isla-rowan",
        avatar: "team13",
        fullName: "@isla_gardenpantry",
        rating: 4.8,
        subtitle: "Seasonal Plant-Based Cooking",
        experience: "7 Years",
        education: "Natural Gourmet Institute",
        experienceLevel: "beginner",
        itemsCount: 7,
        bio: "A plant-based teacher with an editorial eye for color, texture, and genuinely satisfying everyday meals.",
        categories: ["Beginner", "Plant-Based"],
        specialties: ["Vegetable-forward mains", "Grain bowls", "Plant-based pantry basics"],
        profile: {
            headline: "Plant-based cooking that feels abundant rather than restrictive",
            about: [
                "Isla teaches plant-based cooking through seasonality, strong kitchen habits, and flavor-building that never leans on gimmicks.",
                "Her courses help new cooks create vibrant meals with practical ingredients and premium presentation."
            ],
            philosophy: "When vegetables are treated seriously, the plate never feels lacking.",
            achievements: [
                "Built a popular beginner series on practical plant-based cooking",
                "Developed seasonal recipe programs for premium wellness brands"
            ],
        }
    },

    {
        id: "expert_vivienne_laurent",
        slug: "vivienne-laurent",
        avatar: "team14",
        fullName: "@vivienne_tableforme",
        rating: 4.9,
        subtitle: "Fine Dining Fundamentals",
        experience: "20 Years",
        education: "Le Cordon Bleu Paris",
        experienceLevel: "advanced",
        itemsCount: 19,
        bio: "A fine-dining mentor teaching restaurant standards, elegant plating, and composed flavor architecture.",
        categories: ["Advanced", "Fine Dining"],
        specialties: ["Plating", "Luxury menus", "Refined vegetable cookery"],
        profile: {
            headline: "Fine-dining techniques made teachable without losing sophistication",
            about: [
                "Vivienne has spent two decades building polished tasting-menu experiences with a reputation for exacting execution and graceful mentorship.",
                "She teaches serious students how to think like a chef de partie while maintaining clarity, efficiency, and aesthetic control."
            ],
            philosophy: "Refinement is the result of thousands of small decisions.",
            achievements: [
                "Directed culinary openings for multiple luxury dining concepts",
                "Mentored rising chefs through elite plated-service intensives"
            ],
        }
    },

    {
        id: "expert_elena_markovic",
        slug: "elena-markovic",
        avatar: "team15",
        fullName: "@elena_balanceplate",
        rating: 4.7,
        subtitle: "Smart Healthy Cooking",
        experience: "6 Years",
        education: "Institute for Culinary Nutrition",
        experienceLevel: "intermediate",
        itemsCount: 6,
        bio: "A wellness-minded chef who teaches flavor-first healthy cooking for modern, high-performance routines.",
        categories: ["Intermediate", "Healthy"],
        specialties: ["Protein-forward meals", "Smart meal prep", "Balanced sauces"],
        profile: {
            headline: "Healthy cooking for people who refuse bland food",
            about: [
                "Elena designs courses for students who want practical nutrition, polished flavor, and meals that fit demanding schedules.",
                "Her teaching style is efficient and contemporary, with a strong emphasis on building repeatable healthy habits."
            ],
            philosophy: "Healthy food earns loyalty when it is deeply flavorful.",
            achievements: [
                "Created premium meal-prep programs for wellness-focused clients",
                "Known for practical healthy cooking classes with strong retention"
            ],
        }
    },

    {
        id: "expert_sabine_duval",
        slug: "sabine-duval",
        avatar: "team16",
        fullName: "@sabine_streetkitchen",
        rating: 4.8,
        subtitle: "Asian Street Food",
        experience: "12 Years",
        education: "Singapore Academy of Culinary Practice",
        experienceLevel: "intermediate",
        itemsCount: 12,
        bio: "A vibrant street-food expert translating wok heat, bold seasoning, and fast service into polished home lessons.",
        categories: ["Intermediate", "Street Food"],
        specialties: ["Wok cooking", "Noodle dishes", "Asian market-style snacks"],
        profile: {
            headline: "Street food energy refined for serious home cooks",
            about: [
                "Sabine specializes in the high-impact flavors and rapid techniques that define great market food across Asian cities.",
                "Her classes show students how to organize prep, control heat, and deliver bold dishes with speed and confidence."
            ],
            philosophy: "Street food works because every element pulls its weight.",
            achievements: [
                "Produced a flagship course series on premium street-food techniques",
                "Consulted on casual dining concepts inspired by Asian night markets"
            ],
        }
    }
];
