import * as Yup from "yup";
import { siteContent } from "@/resources/siteContent";

export async function sendContactRequest(data: {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    message?: string;
}) {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to send contact request");
    return res.json();
}

export function getContactValidationSchema() {
    const t = siteContent.contactUs.validation;

    return Yup.object().shape({
        name: Yup.string().required(t.firstNameRequired),
        secondName: Yup.string().required(t.lastNameRequired),
        email: Yup.string().email(t.invalidEmail).required(t.emailRequired),
        phone: Yup.string()
            .matches(/^[0-9]+$/, t.phoneDigitsOnly)
            .min(5, t.phoneMin)
            .required(t.phoneRequired),
        message: Yup.string(),
    });
}

export const initialValues = {
    name: "",
    secondName: "",
    email: "",
    phone: "",
    message: "",
};
