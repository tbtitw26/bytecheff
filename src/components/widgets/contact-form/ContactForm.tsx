"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { getContactValidationSchema, initialValues, sendContactRequest } from "./schema";
import { FaClock, FaEnvelope } from "react-icons/fa";
import { COMPANY_EMAIL } from "@/resources/constants";
import styles from "./ContactForm.module.scss";
import { siteContent } from "@/resources/siteContent";

interface ContactFormValues {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    message: string;
}

const ContactSupport: React.FC = () => {
    const { showAlert } = useAlert();
    const t = siteContent.contactUs;
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: ContactFormValues,
        { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
    ) => {
        try {
            const payload = {
                ...values,
                phone: values.phone.replace(/\D/g, ""),
            };

            await sendContactRequest(payload);
            resetForm();
            setSuccessMsg(t.successMessage);
            showAlert(t.successToastTitle, t.successToastBody, "success");
        } catch {
            showAlert(t.errorToastTitle, t.errorToastBody, "error");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.layout}>
                <motion.div
                    className={styles.copy}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.eyebrow}>{t.supportCenter}</span>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.description}>{t.description}</p>

                    <div className={styles.notes}>
                        <div className={styles.note}>
                            <span className={styles.noteLabel}>{t.otherWays}</span>
                            <div className={styles.noteValue}>
                                <FaEnvelope />
                                <span>{COMPANY_EMAIL}</span>
                            </div>
                        </div>

                        <div className={styles.note}>
                            <span className={styles.noteLabel}>{t.repliesWithin}</span>
                            <div className={styles.noteValue}>
                                <FaClock />
                                <span>{t.repliesWithin}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formWrap}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {successMsg ? (
                        <div className={styles.success}>{successMsg}</div>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={getContactValidationSchema()}
                            validateOnBlur
                            validateOnChange
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, isValid }) => (
                                <Form className={styles.form}>
                                    <div className={styles.fields}>
                                        <div className={styles.fieldGrid}>
                                            <label className={styles.field}>
                                                <span className={styles.fieldLabel}>{t.fields.firstName}</span>
                                                <Field name="name" placeholder={t.fields.firstName} />
                                                <ErrorMessage name="name" component="div" className={styles.error} />
                                            </label>

                                            <label className={styles.field}>
                                                <span className={styles.fieldLabel}>{t.fields.lastName}</span>
                                                <Field name="secondName" placeholder={t.fields.lastName} />
                                                <ErrorMessage name="secondName" component="div" className={styles.error} />
                                            </label>
                                        </div>

                                        <div className={styles.fieldGrid}>
                                            <label className={styles.field}>
                                                <span className={styles.fieldLabel}>{t.fields.email}</span>
                                                <Field name="email" type="email" placeholder={t.fields.email} />
                                                <ErrorMessage name="email" component="div" className={styles.error} />
                                            </label>

                                            <label className={styles.field}>
                                                <span className={styles.fieldLabel}>{t.fields.phone}</span>
                                                <Field name="phone" type="tel" placeholder={t.fields.phone} />
                                                <ErrorMessage name="phone" component="div" className={styles.error} />
                                            </label>
                                        </div>

                                        <label className={styles.field}>
                                            <span className={styles.fieldLabel}>{t.fields.message}</span>
                                            <Field
                                                as="textarea"
                                                name="message"
                                                placeholder={t.fields.message}
                                                rows={6}
                                            />
                                            <ErrorMessage name="message" component="div" className={styles.error} />
                                        </label>
                                    </div>

                                    <div className={styles.actions}>
                                        <ButtonUI
                                            type="submit"
                                            loading={isSubmitting}
                                            disabled={!isValid || isSubmitting}
                                            text={t.submitButton}
                                            color="primary"
                                            size="lg"
                                        />
                                        <span className={styles.policy}>{t.policyText}</span>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSupport;
