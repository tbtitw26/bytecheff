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

    const isButtonDisabled =
        isSubmitting || (showTerms ? !values.terms : false);

    return (
        <div className={styles.wrapper}>
            <div className={clsx(styles.formContainer, styles[size], styles[variant])}>
                {variant === "register" && aside}

                <div className={styles.formBlock}>
                    <header className={styles.header}>
                        <h2 className={styles.title}>{title}</h2>
                        {description && (
                            <p className={styles.description}>{description}</p>
                        )}
                    </header>

                    <Form className={styles.formContent}>
                        {fields.map((field) => {
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
                        })}

                        {showTerms && (
                            <div className={styles.termsBlock}>
                                <label className={styles.termsLabel}>
                                    <Field type="checkbox" name="terms"/>
                                    <span>
                    I agree to the{" "}
                                        <a href="/terms-and-conditions" target="_blank">
                      Terms & Conditions
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

                        <ButtonUI
                            type="submit"
                            text={submitLabel}
                            disabled={isButtonDisabled}
                            loading={isSubmitting}
                            fullWidth
                        />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FormUI;
