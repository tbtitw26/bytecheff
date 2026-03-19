import { AlertColor } from "@mui/material/Alert";
import { ALLOWED_COUNTRY_CODES } from "@/utils/countries";

export const signUpInitialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    country: "",
    postCode: "",
    password: "",
    confirmPassword: "",
    terms: false,
};

type SignUpErrors = Partial<Record<keyof typeof signUpInitialValues, string>>;

function isValidDateOfBirth(value: string): boolean {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

    const date = new Date(`${value}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime())) return false;

    return date.toISOString().slice(0, 10) === value;
}

export const signUpValidation = (values: typeof signUpInitialValues) => {
    const errors: SignUpErrors = {};
    const firstName = values.firstName.trim();
    const lastName = values.lastName.trim();
    const email = values.email.trim();
    const phoneNumber = values.phoneNumber.trim();
    const street = values.street.trim();
    const city = values.city.trim();
    const country = values.country.trim().toUpperCase();
    const postCode = values.postCode.trim();

    if (!firstName) errors.firstName = "Required";
    if (!lastName) errors.lastName = "Required";
    if (!values.dateOfBirth) {
        errors.dateOfBirth = "Required";
    } else if (!isValidDateOfBirth(values.dateOfBirth)) {
        errors.dateOfBirth = "Enter a valid date";
    }

    if (!email) {
        errors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Enter a valid email";
    }

    if (!phoneNumber) errors.phoneNumber = "Required";
    if (!street) errors.street = "Required";
    if (!city) errors.city = "Required";
    if (!postCode) errors.postCode = "Required";

    if (!country) {
        errors.country = "Required";
    } else if (!ALLOWED_COUNTRY_CODES.has(country)) {
        errors.country = "Select a valid country";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
    }

    if (!values.terms) {
        errors.terms = "You must agree to the Terms and Conditions";
    }

    return errors;
};

export const signUpOnSubmit = async (
    values: typeof signUpInitialValues,
    { setSubmitting }: { setSubmitting: (v: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        const payload = {
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
            dateOfBirth: values.dateOfBirth,
            email: values.email.trim(),
            phoneNumber: values.phoneNumber.trim(),
            street: values.street.trim(),
            city: values.city.trim(),
            country: values.country.trim().toUpperCase(),
            postCode: values.postCode.trim(),
            password: values.password,
        };

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (res.ok && data?.user) {
            showAlert("Registration successful", "", "success");
            router.replace("/");
            router.refresh();
        } else {
            showAlert(data?.message || "Registration failed", "", "error");
        }
    } catch (e: any) {
        showAlert(e?.message || "Network error", "", "error");
    } finally {
        setSubmitting(false);
    }
};
