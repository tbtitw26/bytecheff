import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

export const RESTRICTED_COUNTRY_ALPHA3 = new Set([
    "RUS",
    "BLR",
    "IRN",
    "PRK",
    "SYR",
    "SDN",
    "SSD",
    "AFG",
    "COD",
    "CAF",
    "CUB",
    "HTI",
    "IRQ",
    "SOM",
    "VEN",
    "ZWE",
    "MMR",
    "MLI",
    "YEM",
]);

export type CountryOption = {
    name: string;
    alpha2: string;
    alpha3: string;
};

function hasAlpha3<T extends { alpha3?: string }>(
    c: T
): c is T & { alpha3: string } {
    return typeof c.alpha3 === "string";
}

export function getAllowedCountries(): CountryOption[] {
    const names = countries.getNames("en", {select: "official"});

    return Object.entries(names)
        .map(([alpha2, name]) => ({
            name,
            alpha2,
            alpha3: countries.alpha2ToAlpha3(alpha2),
        }))
        .filter(hasAlpha3)
        .filter((c) => !RESTRICTED_COUNTRY_ALPHA3.has(c.alpha3))
        .sort((a, b) => a.name.localeCompare(b.name));
}

export const ALLOWED_COUNTRIES = getAllowedCountries();
export const ALLOWED_COUNTRY_CODES = new Set(
    ALLOWED_COUNTRIES.map((country) => country.alpha2)
);

export function findAllowedCountry(value: string): CountryOption | undefined {
    const normalized = value.trim().toUpperCase();

    return ALLOWED_COUNTRIES.find(
        (country) =>
            country.alpha2 === normalized ||
            country.name.toUpperCase() === normalized
    );
}
