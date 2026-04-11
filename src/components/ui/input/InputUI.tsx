import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";
import { useField, useFormikContext } from "formik";

type FormikInputProps = InputProps & { name: string; formik?: boolean };

const InputUI: React.FC<FormikInputProps> = ({ formik, ...props }) => {
    if (formik && props.name) {
        const [field, meta] = useField(props.name);
        const { submitCount } = useFormikContext();
        const showError = Boolean((meta.touched || submitCount > 0) && meta.error);
        const label = typeof props.placeholder === "string" ? props.placeholder : props.name;

        return (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label
                    htmlFor={props.name}
                    style={{
                        fontSize: "0.83rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "0.01em",
                    }}
                >
                    {label}
                </label>
                <Input
                    {...field}
                    {...props}
                    id={props.name}
                    error={showError}
                    sx={{
                        minHeight: 56,
                        borderRadius: "16px",
                        backgroundColor: "rgba(255, 255, 255, 0.92)",
                        borderColor: showError ? "var(--error-color)" : "rgba(86, 66, 48, 0.14)",
                        boxShadow: showError
                            ? "0 0 0 4px rgba(202, 65, 61, 0.08)"
                            : "0 1px 0 rgba(255, 255, 255, 0.75), 0 8px 18px rgba(70, 49, 32, 0.03)",
                        paddingInline: "14px",
                        fontSize: "0.98rem",
                        transition: "border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease",
                        "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.98)",
                            borderColor: showError ? "var(--error-color)" : "rgba(86, 66, 48, 0.22)",
                        },
                        "&:focus-within": {
                            borderColor: showError ? "var(--error-color)" : "var(--primary-color)",
                            boxShadow: showError
                                ? "0 0 0 4px rgba(202, 65, 61, 0.08)"
                                : "0 0 0 4px rgba(107, 143, 42, 0.12), 0 12px 26px rgba(70, 49, 32, 0.06)",
                            backgroundColor: "#fff",
                        },
                        "& input": {
                            fontSize: "0.98rem",
                        },
                        "& input::placeholder": {
                            color: "rgba(78, 63, 50, 0.4)",
                        },
                        "& input:-webkit-autofill": {
                            WebkitBoxShadow: "0 0 0 1000px #fff inset",
                            WebkitTextFillColor: "var(--text-primary)",
                        },
                    }}
                />
                {showError ? (
                    <div
                        style={{
                            fontSize: "0.81rem",
                            lineHeight: 1.45,
                            color: "var(--error-color)",
                        }}
                    >
                        {meta.error}
                    </div>
                ) : null}
            </div>
        );
    }

    return <Input {...props} />;
};

export default InputUI;
