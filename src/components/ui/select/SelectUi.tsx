"use client";

import { Field, useField, useFormikContext } from "formik";
import styles from "./SelectUi.module.scss";

interface Option {
    value: string;
    label: string;
}

interface SelectUIProps {
    name: string;
    options: Option[];
    placeholder?: string;
}

export default function SelectUI({
                                     name,
                                     options,
                                     placeholder = "Select",
                                 }: SelectUIProps) {
    const [, meta] = useField(name);
    const { submitCount } = useFormikContext();
    const showError = Boolean((meta.touched || submitCount > 0) && meta.error);

    return (
        <div className={styles.wrapper}>
            <Field
                as="select"
                name={name}
                className={styles.select}
                aria-invalid={showError}
            >
                <option value="">{placeholder}</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </Field>
            {showError ? <div className={styles.error}>{meta.error}</div> : null}
        </div>
    );
}
