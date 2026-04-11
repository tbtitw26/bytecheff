import {Expert} from "@/types/expert";


export function getExpertBySlug(slug: string) {
    return experts.find((e) => e.slug === slug);
}

export const experts: Expert[] = [
    {
        id: "expert_marcus_l",
        slug: "marcus-laurent",
        avatar: "team4",
        fullName: "@marcus_saucecraft",
        rating: 4.9,
        subtitle: "French Cuisine",
        experience: "15 Years",
        education: "Tsuji Culinary School",
        experienceLevel: "advanced",
        itemsCount: 14,
        bio: "Specialist in classic techniques with a structured and systematic approach.",
        categories: ["Advanced"],
        specialties: ["French"],
        profile: {
            headline: "Classic French cuisine refined through discipline",
            about: [
                "Marcus Laurent is a classically trained French chef with over 15 years of experience.",
                "His work focuses on precision, technique, and consistent high-quality results."
            ],
            philosophy: "Master technique first — creativity follows naturally.",
            achievements: [
                "Worked in Michelin-starred restaurants",
                "Mentored over 200 professional chefs"
            ],
        }
    },

    {
        id: "expert_sarah_j",
        slug: "sarah-johnson",
        avatar: "team2",
        fullName: "@sarah_lab_kitchen",
        rating: 4.8,
        subtitle: "Molecular Gastronomy",
        experience: "12 Years",
        education: "Le Cordon Bleu",
        experienceLevel: "advanced",
        itemsCount: 11,
        bio: "Explains complex processes simply with a focus on experimentation.",
        categories: ["Advanced"],
        specialties: ["Molecular", "French"],
        profile: {
            headline: "Science meets creativity in modern cuisine",
            about: [
                "Sarah specializes in molecular gastronomy and experimental cooking.",
                "She makes complex culinary science accessible for professionals."
            ],
            philosophy: "Curiosity and experimentation drive innovation.",
            achievements: [
                "International culinary workshops",
                "Published research-based recipes"
            ],
        }
    },

    {
        id: "expert_kenji_t",
        slug: "kenji-tanaka",
        avatar: "team1",
        fullName: "@kenji_precision",
        rating: 4.7,
        subtitle: "Japanese Cuisine",
        experience: "18 Years",
        education: "Tokyo Culinary Institute",
        experienceLevel: "advanced",
        itemsCount: 9,
        bio: "Process-driven approach with deep respect for time and control.",
        categories: ["Advanced"],
        specialties: ["Japanese"],
        profile: {
            headline: "Discipline, balance, and respect for ingredients",
            about: [
                "Kenji Tanaka is a master of traditional Japanese cuisine.",
                "He emphasizes timing, balance, and precision in every dish."
            ],
            philosophy: "Respect the process, honor the ingredients.",
            achievements: [
                "Trained under Kyoto masters",
                "Specialist in kaiseki cuisine"
            ],
        }
    },

    {
        id: "expert_maria_g",
        slug: "maria-garcia",
        avatar: "team3",
        fullName: "@maria_sweetatelier",
        rating: 4.6,
        subtitle: "Spanish Pastry",
        experience: "10 Years",
        education: "Madrid Pastry Academy",
        experienceLevel: "intermediate",
        itemsCount: 8,
        bio: "A balance of aesthetics and precision in pastry techniques.",
        categories: ["Intermediate"],
        specialties: ["Spanish", "Pastry"],
        profile: {
            headline: "Pastry as art and engineering",
            about: [
                "Maria combines Spanish traditions with modern pastry aesthetics.",
                "Her desserts focus on balance and visual perfection."
            ],
            philosophy: "Dessert should be beautiful and precise.",
            achievements: [
                "Award-winning pastry chef",
                "Featured in European pastry magazines"
            ],
        }
    },

    {
        id: "expert_alex_r",
        slug: "alex-robinson",
        avatar: "team5",
        fullName: "@alex_homeplate",
        rating: 4.5,
        subtitle: "Home Cooking",
        experience: "6 Years",
        education: "Online Culinary Program",
        experienceLevel: "beginner",
        itemsCount: 5,
        bio: "Perfect for beginners starting from scratch.",
        categories: ["Beginner"],
        specialties: ["International"],
        profile: {
            headline: "Cooking made simple for everyone",
            about: [
                "Alex focuses on easy, accessible home cooking.",
                "His courses are ideal for absolute beginners."
            ],
            philosophy: "Anyone can cook with the right guidance.",
            achievements: [
                "10k+ beginner students",
                "Popular online cooking instructor"
            ],
        }
    },

    {
        id: "expert_luca_b",
        slug: "luca-bianchi",
        avatar: "team6",
        fullName: "@luca_italiano",
        rating: 4.8,
        subtitle: "Italian Cuisine",
        experience: "14 Years",
        education: "ALMA Culinary School",
        experienceLevel: "advanced",
        itemsCount: 16,
        bio: "Traditional Italian recipes with a modern approach.",
        categories: ["Advanced"],
        specialties: ["Italian"],
        profile: {
            headline: "Italian tradition with a modern soul",
            about: [
                "Luca preserves authentic Italian flavors.",
                "He modernizes classics without losing tradition."
            ],
            philosophy: "Tradition evolves, but never disappears.",
            achievements: [
                "Worked in Rome & Milan",
                "Specialist in regional Italian cuisine"
            ],
        }
    },

    {
        id: "expert_emily_c",
        slug: "emily-chen",
        avatar: "team11",
        fullName: "@emily_wokandwild",
        rating: 4.7,
        subtitle: "Asian Fusion",
        experience: "11 Years",
        education: "Hong Kong Culinary Academy",
        experienceLevel: "advanced",
        itemsCount: 13,
        bio: "Asian fusion cuisine with creative techniques.",
        categories: ["Advanced"],
        specialties: ["Chinese", "Fusion"],
        profile: {
            headline: "Where Asian flavors collide creatively",
            about: [
                "Emily blends Asian cuisines into modern fusion dishes.",
                "Her style is bold, experimental, and refined."
            ],
            philosophy: "Fusion must respect origins.",
            achievements: [
                "Fusion menu consultant",
                "International food festivals"
            ],
        }
    },

    {
        id: "expert_david_m",
        slug: "david-miller",
        avatar: "team7",
        fullName: "@pitfire_david",
        rating: 4.6,
        subtitle: "BBQ & Grill",
        experience: "16 Years",
        education: "Texas BBQ Institute",
        experienceLevel: "advanced",
        itemsCount: 12,
        bio: "Low & slow American BBQ master.",
        categories: ["Advanced"],
        specialties: ["American"],
        profile: {
            headline: "Low & slow BBQ perfection",
            about: [
                "David is a master of American BBQ techniques.",
                "He focuses on smoking, timing, and fire control."
            ],
            philosophy: "Patience creates flavor.",
            achievements: [
                "BBQ championship finalist",
                "Pitmaster instructor"
            ],
        }
    },

    {
        id: "expert_anna_k",
        slug: "anna-kowalska",
        avatar: "team12",
        fullName: "@anna_balancedbite",
        rating: 4.5,
        subtitle: "Healthy Cuisine",
        experience: "9 Years",
        education: "Warsaw Nutrition Academy",
        experienceLevel: "intermediate",
        itemsCount: 10,
        bio: "Healthy and balanced European meals.",
        categories: ["Intermediate"],
        specialties: ["Polish", "European"],
        profile: {
            headline: "Healthy food without compromise",
            about: [
                "Anna specializes in balanced European cuisine.",
                "She combines nutrition with great taste."
            ],
            philosophy: "Health and pleasure can coexist.",
            achievements: [
                "Certified nutrition chef",
                "Wellness retreat menus"
            ],
        }
    },

    {
        id: "expert_pierre_d",
        slug: "pierre-dubois",
        avatar: "team8",
        fullName: "@pierre_patisserie",
        rating: 4.9,
        subtitle: "French Pastry",
        experience: "20 Years",
        education: "École Ferrandi",
        experienceLevel: "advanced",
        itemsCount: 18,
        bio: "Classic French pastry master.",
        categories: ["Advanced"],
        specialties: ["French", "Pastry"],
        profile: {
            headline: "The art of classic French pastry",
            about: [
                "Pierre is a master of traditional French desserts.",
                "His teaching focuses on structure and consistency."
            ],
            philosophy: "Precision is the soul of pastry.",
            achievements: [
                "20+ years teaching pastry",
                "Worked with top Paris patisseries"
            ],
        }
    },

    {
        id: "expert_sofia_n",
        slug: "sofia-novak",
        avatar: "team13",
        fullName: "@sofia_greenfork",
        rating: 4.6,
        subtitle: "Vegetarian Cuisine",
        experience: "8 Years",
        education: "Plant-Based Culinary School",
        experienceLevel: "intermediate",
        itemsCount: 9,
        bio: "Creative vegetarian cuisine.",
        categories: ["Intermediate"],
        specialties: ["Vegetarian"],
        profile: {
            headline: "Vegetarian food without limits",
            about: [
                "Sofia redefines vegetarian cuisine.",
                "Her dishes are creative and seasonal."
            ],
            philosophy: "Plants deserve creativity.",
            achievements: [
                "Plant-based cooking advocate",
                "Eco cuisine workshops"
            ],
        }
    },

    {
        id: "expert_omar_h",
        slug: "omar-hassan",
        avatar: "team9",
        fullName: "@omar_spicepath",
        rating: 4.7,
        subtitle: "Middle Eastern Cuisine",
        experience: "13 Years",
        education: "Beirut Culinary Institute",
        experienceLevel: "advanced",
        itemsCount: 11,
        bio: "Authentic Middle Eastern cooking.",
        categories: ["Advanced"],
        specialties: ["Middle Eastern"],
        profile: {
            headline: "Authentic Middle Eastern flavors",
            about: [
                "Omar brings traditional Middle Eastern recipes.",
                "His cuisine reflects family and heritage."
            ],
            philosophy: "Food tells history.",
            achievements: [
                "Regional cuisine ambassador",
                "Cultural cooking events"
            ],
        }
    },

    {
        id: "expert_julia_s",
        slug: "julia-schneider",
        avatar: "team15",
        fullName: "@julia_cozykitchen",
        rating: 4.5,
        subtitle: "European Home Cooking",
        experience: "7 Years",
        education: "Berlin Culinary Studio",
        experienceLevel: "beginner",
        itemsCount: 6,
        bio: "Simple European comfort food.",
        categories: ["Beginner"],
        specialties: ["German", "European"],
        profile: {
            headline: "Comfort food for everyday life",
            about: [
                "Julia focuses on simple European meals.",
                "Her style is cozy and approachable."
            ],
            philosophy: "Food should feel like home.",
            achievements: [
                "Popular beginner courses",
                "Family-oriented cooking programs"
            ],
        }
    },

    {
        id: "expert_mateo_r",
        slug: "mateo-rossi",
        avatar: "team10",
        fullName: "@mateo_marevivo",
        rating: 4.8,
        subtitle: "Mediterranean Cuisine",
        experience: "15 Years",
        education: "Mediterranean Culinary Academy",
        experienceLevel: "advanced",
        itemsCount: 14,
        bio: "Mediterranean seafood & classics.",
        categories: ["Advanced"],
        specialties: ["Mediterranean", "Italian"],
        profile: {
            headline: "Mediterranean freshness and balance",
            about: [
                "Mateo specializes in Mediterranean seafood.",
                "His cuisine highlights freshness and simplicity."
            ],
            philosophy: "Freshness is everything.",
            achievements: [
                "Coastal restaurant consultant",
                "Seafood cuisine expert"
            ],
        }
    },

    {
        id: "expert_nina_p",
        slug: "nina-petrov",
        avatar: "team14",
        fullName: "@nina_eastern_table",
        rating: 4.6,
        subtitle: "Eastern European Cuisine",
        experience: "12 Years",
        education: "Prague Culinary Institute",
        experienceLevel: "intermediate",
        itemsCount: 10,
        bio: "Eastern European traditional cuisine.",
        categories: ["Intermediate"],
        specialties: ["Ukrainian", "Czech"],
        profile: {
            headline: "Eastern European traditions reimagined",
            about: [
                "Nina brings authentic Eastern European recipes.",
                "Her dishes honor tradition with modern presentation."
            ],
            philosophy: "Respect roots, refine execution.",
            achievements: [
                "Traditional cuisine preservation",
                "Cultural food workshops"
            ],
        }
    }
];
