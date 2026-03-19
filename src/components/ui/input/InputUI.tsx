import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";
import { useField, useFormikContext } from "formik";

type FormikInputProps = InputProps & { name: string; formik?: boolean };

const InputUI: React.FC<FormikInputProps> = ({ formik, ...props }) => {
    if (formik && props.name) {
        const [field, meta] = useField(props.name);
        const { submitCount } = useFormikContext();
        const showError = Boolean((meta.touched || submitCount > 0) && meta.error);

        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Input
                    {...field}
                    {...props}
                    error={showError}
                />
                {showError ? (
                    <div
                        style={{
                            marginTop: 4,
                            fontSize: "0.8rem",
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
