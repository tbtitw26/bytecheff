import { media } from "@/resources/media";

export type ExpertProfile = {
    headline: string;
    about: string[];
    philosophy: string;
    achievements: string[];
};

export type Expert = {
    id: string;
    slug: string;
    avatar: keyof typeof media;
    fullName: string;
    rating: number;
    subtitle: string;
    experience: string;
    education: string;
    experienceLevel: "beginner" | "intermediate" | "advanced";
    itemsCount: number;
    bio: string;
    categories: string[];
    specialties: string[];
    profile: ExpertProfile;
};
