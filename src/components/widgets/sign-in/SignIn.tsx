"use client";

import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useAlert } from "@/context/AlertContext";

import FormUI from "@/components/ui/form/FormUI";
import {
    signInInitialValues,
    signInValidation,
    signInOnSubmit,
} from "@/validationSchemas/sign-in/schema";
import { siteContent } from "@/resources/siteContent";

export type SignInValues = {
    email: string;
    password: string;
};

export default function SignIn() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const t = siteContent.signIn;

    return (
        <Formik<SignInValues>
            initialValues={signInInitialValues}
            validate={signInValidation}
            onSubmit={(values, helpers: FormikHelpers<SignInValues>) =>
                signInOnSubmit(values, helpers, showAlert, router)
            }
        >
            {({ isSubmitting }) => (
                <FormUI
                    title={t.title}
                    description={t.description}
                    submitLabel={t.submitLabel}
                    isSubmitting={isSubmitting}
                    size="lg"
                    variant="auth"
                    fields={[
                        { name: "email", type: "email", placeholder: t.fields.email },
                        { name: "password", type: "password", placeholder: t.fields.password },
                    ]}
                />
            )}
        </Formik>
    );
}
