// FormUI.tsx
"use client";

import React from "react";
import {Form, Field, ErrorMessage, useFormikContext} from "formik";
import clsx from "clsx";

import styles from "./FormUI.module.scss";
import InputUI from "@/components/ui/input/InputUI";
import ButtonUI from "@/components/ui/button/ButtonUI";
import SelectUI from "@/components/ui/select/SelectUi";
import { ALLOWED_COUNTRIES } from "@/utils/countries";
import { siteContent } from "@/resources/siteContent";

interface FieldConfig {
    name: string;
    type: string;
    placeholder?: string;
}

interface FormUIProps {
    title: string;
    description?: string;
    isSubmitting?: boolean;
    fields: FieldConfig[];
    submitLabel?: string;
    showTerms?: boolean;

    variant?: "auth" | "register";
    size?: "sm" | "md" | "lg";
    aside?: React.ReactNode;
}

const registerSections = [
    {
        key: "identity",
        title: "Personlig informasjon",
        description: "Grunnleggende detaljer for kontoen din.",
        fields: ["firstName", "lastName", "dateOfBirth", "email", "phoneNumber"],
    },
    {
        key: "address",
        title: "Adresse",
        description: "Brukes til profil- og fakturainformasjon.",
        fields: ["street", "city", "country", "postCode"],
    },
    {
        key: "security",
        title: "Sikkerhet",
        description: "Velg et trygt passord for innlogging.",
        fields: ["password", "confirmPassword"],
    },
] as const;

const FormUI: React.FC<FormUIProps> = ({
                                           title,
                                           description,
                                           isSubmitting,
                                           fields,
                                           submitLabel = "Submit",
                                           showTerms = false,
                                           variant = "auth",
                                           size = "md",
                                           aside,
                                       }) => {
    const {values} = useFormikContext<any>();
    const t = siteContent;

    const isButtonDisabled =
        isSubmitting || (showTerms ? !values.terms : false);

    const renderField = (field: FieldConfig) => {
        if (field.name === "country") {
            return (
                <SelectUI
                    key={field.name}
                    name={field.name}
                    options={ALLOWED_COUNTRIES.map((country) => ({
                        value: country.alpha2,
                        label: country.name,
                    }))}
                    placeholder={field.placeholder}
                />
            );
        }

        return (
            <InputUI
                key={field.name}
                {...field}
                formik
            />
        );
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.backdropGlow} aria-hidden="true" />
            <div className={clsx(styles.formContainer, styles[size], styles[variant])}>
                {variant === "register" && aside}

                <div className={styles.formBlock}>
                    <header className={styles.header}>
                        <span className={styles.kicker} />
                        <h2 className={styles.title}>{title}</h2>
                        {description && (
                            <p className={styles.description}>{description}</p>
                        )}
                    </header>

                    <Form className={styles.formContent}>
                        {variant === "register" ? (
                            <div className={styles.sectionStack}>
                                {registerSections.map((section) => (
                                    <section key={section.key} className={styles.formSection}>
                                        <div className={styles.sectionHeader}>
                                            <h3 className={styles.sectionTitle}>{section.title}</h3>
                                            <p className={styles.sectionDescription}>{section.description}</p>
                                        </div>

                                        <div className={styles.sectionGrid}>
                                            {section.fields
                                                .map((fieldName) => fields.find((field) => field.name === fieldName))
                                                .filter((field): field is FieldConfig => Boolean(field))
                                                .map(renderField)}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.authStack}>
                                {fields.map(renderField)}
                            </div>
                        )}

                        {showTerms && (
                            <div className={styles.termsBlock}>
                                <label className={styles.termsLabel}>
                                    <Field type="checkbox" name="terms"/>
                                    <span>
                                        {"Jeg godtar "}
                                        <a href="/terms-and-conditions" target="_blank">
                                            {t.footer.links.terms}
                                        </a>
                                    </span>
                                </label>

                                <ErrorMessage
                                    name="terms"
                                    component="div"
                                    className={styles.errorText}
                                />
                            </div>
                        )}

                        <div className={styles.submitRow}>
                            <ButtonUI
                                type="submit"
                                text={submitLabel}
                                disabled={isButtonDisabled}
                                loading={isSubmitting}
                                fullWidth
                                size="lg"
                                sx={{
                                    minHeight: 56,
                                    borderRadius: "18px",
                                    fontSize: "0.98rem",
                                    fontWeight: 700,
                                    boxShadow: "0 18px 34px rgba(70, 49, 32, 0.14)",
                                }}
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FormUI;
