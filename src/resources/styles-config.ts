import {
    GoogleFont,
    ButtonColor,
    HeaderType,
    HeaderScrollMode,
    SideBarDirection,
    FooterType,
    FooterLogoAlign,
    HoverEffect,
    CardVariant,
    CardLabel,
} from "./types";
import {SxProps, Theme} from "@mui/material/styles";

// Шрифти
export const googleFonts: GoogleFont[] = [
    {
        name: "Roboto",
        css: "'Roboto', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    },
    {
        name: "Inter",
        css: "'Inter', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
    },
    {
        name: "Montserrat",
        css: "'Montserrat', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
    },
    {
        name: "Poppins",
        css: "'Poppins', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
    },
    {
        name: "Open Sans",
        css: "'Open Sans', sans-serif",
        url: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
    },
];

export const currentFontIndex = 3;
export const currentFont = googleFonts[currentFontIndex];

// Кольори для кнопок
export const buttonColors: Record<ButtonColor, string> = {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)",
    tertiary: "var(--tertiary-color)",
    quaternary: "var(--quaternary-color)",
    success: "var(--success-color)",
    warning: "var(--warning-color)",
    danger: "var(--error-color)",
    info: "var(--info-color)",
    text: "var(--text-primary)",
    textSecondary: "var(--text-secondary)",
    muted: "var(--text-muted)",
    inverse: "var(--text-inverse)",
    hover: "var(--button-hover)",
    link: "var(--link-color)",
    linkHover: "var(--link-hover)",
    backgroundLight: "var(--background-light)",
    backgroundDark: "var(--background-dark)",
    surface: "var(--surface-color)",
    surfaceMuted: "var(--surface-muted)",
    border: "var(--border-color)",
    shadow: "var(--shadow-color)",
};

// Header
export const headerStyles = {
    type: "sticky" as HeaderType,
    sideBarDirection: "top" as SideBarDirection,
    linkColor: "var(--link-color)",
    linkHoverColor: "var(--link-hover)",
    scrollMode: "solid" as HeaderScrollMode,
    scrollBackground: "var(--quaternary-color)",
    scrollBlur: "50px",
};

// Drawer
export const drawerConfig = {
    anchor: "right" as SideBarDirection,

    // Явный тип для брейкпоинтов ширины — устраняет ошибку TS2339
    width: {
        xs: "100%",   // mobile
        sm: "70%",   // small tablets
        md: "50%",   // tablets
        lg: "420px",  // desktop
    } as Record<'xs' | 'sm' | 'md' | 'lg', string>,

    padding: "20px",
    logoWidth: 150,
    logoHeight: 50,
    contentGap: "40px",
    navGap: "20px",
    contentAlign: "center" as "flex-start" | "center" | "space-between" | "flex-end",
};

// Footer
export const footerStyles = {
    type: "columns" as FooterType,
    showTopBorder: true,
    showBottomBorder: true,
    maxWidth: 1200,
    paddings: {x: 40, y: 26},
    gap: 36,
    columnsGap: 56,
    logo: {width: 180, height: 50, align: "center" as FooterLogoAlign},
    colors: {
        bg: "#f1e8de",

        title: "var(--text-primary)",
        contactLabel: "var(--text-secondary)",

        text: "var(--text-primary)",
        muted: "var(--text-secondary)",
        border: "var(--border-color)",
        link: "var(--text-primary)",
        linkHover: "var(--primary-color)",
        contactHover: "var(--primary-color)",
        socialHover: "var(--primary-color)",
    },
    grid: {colsXL: 1, colsLG: 2, colsMD: 2, colsSM: 1},
    font: {size: 15, legalSize: 16},
    sizes: {
        titles: {xl: 16, lg: 16, md: 16, sm: 16},
        links: {xl: 16, lg: 16, md: 16, sm: 16},
        icons: {xl: 20, lg: 20, md: 20, sm: 18},
    },
    radius: "24px 24px 0 0",
    shadow: "0 -10px 40px rgba(70, 49, 32, 0.04)",
};

// Hover effects
export const hoverEffects: Record<HoverEffect, { transform: string; shadow: string }> = {
    none: {transform: "none", shadow: "none"},
    shadow: {transform: "translateY(-6px)", shadow: "0 12px 28px rgba(0,0,0,0.18)"},
    lift: {transform: "translateY(-12px)", shadow: "0 16px 32px rgba(0,0,0,0.22)"},
    glow: {transform: "scale(1.03)", shadow: "0 0 25px rgba(74,144,226,0.7), 0 0 40px rgba(74,144,226,0.4)"},
    tilt: {transform: "rotate3d(1,1,0,6deg) scale(1.02)", shadow: "0 18px 30px var(--primary-color)"},
};

// Card variants
export const cardVariants: Record<CardVariant, {
    border: string;
    background: string;
    hover: HoverEffect;
    label?: CardLabel;
}> = {
    basic: {
        border: "1px solid rgba(255,255,255,0.2)",
        background: "linear-gradient(145deg, #f9fafb, #ffffff)",
        hover: "shadow",
    },
    highlight: {
        border: "2px solid var(--primary-color)",
        background: "linear-gradient(145deg, #f0f9ff, #e0f2fe)",
        hover: "shadow",
        label: {
            text: "Most Popular",
            bg: "linear-gradient(135deg, var(--primary-color), #6366f1)",
            color: "#fff",
        },
    },
    premium: {
        border: "2px solid transparent",
        background: "linear-gradient(145deg, #fff7ed, #fffbeb)",
        hover: "shadow",
        label: {
            text: "Premium",
            bg: "linear-gradient(135deg, #f59e0b, #ef4444)",
            color: "#fff",
        },
    },
};
