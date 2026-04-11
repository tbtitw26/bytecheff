"use client";

import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useAlert } from "@/context/AlertContext";
import FormUI from "@/components/ui/form/FormUI";

import {
    signUpInitialValues,
    signUpValidation,
    signUpOnSubmit,
} from "@/validationSchemas/sign-up/schema";
import SignUpAside from "@/components/widgets/sign-up/SignUpAside";
import { siteContent } from "@/resources/siteContent";

export type SignUpValues = typeof signUpInitialValues;

export default function SignUp() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const t = siteContent.signUp;

    return (
        <Formik<SignUpValues>
            initialValues={signUpInitialValues}
            validate={signUpValidation}
            onSubmit={(values, helpers: FormikHelpers<SignUpValues>) =>
                signUpOnSubmit(values, helpers, showAlert, router)
            }
        >
            {({ isSubmitting }) => (
                <FormUI
                    title={t.title}
                    description={t.description}
                    submitLabel={t.submitLabel}
                    showTerms
                    size="lg"
                    variant="register"
                    isSubmitting={isSubmitting}
                    aside={<SignUpAside />}
                    fields={[
                        { name: "firstName", type: "text", placeholder: t.fields.firstName },
                        { name: "lastName", type: "text", placeholder: t.fields.lastName },
                        { name: "dateOfBirth", type: "date", placeholder: t.fields.dateOfBirth },
                        { name: "email", type: "email", placeholder: t.fields.email },
                        { name: "phoneNumber", type: "tel", placeholder: t.fields.phoneNumber },
                        { name: "street", type: "text", placeholder: t.fields.street },
                        { name: "city", type: "text", placeholder: t.fields.city },
                        { name: "country", type: "select", placeholder: t.fields.countryPlaceholder },
                        { name: "postCode", type: "text", placeholder: t.fields.postCode },
                        { name: "password", type: "password", placeholder: t.fields.password },
                        { name: "confirmPassword", type: "password", placeholder: t.fields.confirmPassword },
                    ]}
                />
            )}
        </Formik>
    );
}
