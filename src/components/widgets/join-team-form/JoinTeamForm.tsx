"use client";

import { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { initialValues, validationSchema, sendJoinTeamRequest } from "./schema";
import styles from "./JoinTeamForm.module.scss";
import { siteContent } from "@/resources/siteContent";
import { FaUsers, FaClock } from "react-icons/fa";

export default function JoinTeamForm() {
    const { showAlert } = useAlert();
    const t = siteContent.joinTeamPage.form;
    const [success, setSuccess] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.layout}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.headerCopy}>
                        <span className={styles.eyebrow}>{t.label}</span>
                        <h2 className={styles.title}>{t.title}</h2>
                        <p className={styles.description}>{t.description}</p>
                    </div>

                    <div className={styles.aside}>
                        <div className={styles.asideItem}>
                            <FaUsers />
                            <span>{t.extraItems[0]}</span>
                        </div>
                        <div className={styles.asideItem}>
                            <FaClock />
                            <span>{t.extraItems[1]}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formWrap}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {success ? (
                        <div className={styles.success}>{t.successMessage}</div>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                try {
                                    await sendJoinTeamRequest(values);
                                    resetForm();
                                    setSuccess(true);
                                    showAlert("Suksess", "Søknaden er sendt", "success");
                                } catch {
                                    showAlert("Feil", "Kunne ikke sende søknaden", "error");
                                } finally {
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({ values, isSubmitting }) => (
                                <Form className={styles.form}>
                                    <section className={styles.group}>
                                        <div className={styles.groupHead}>
                                            <span className={styles.groupLabel}>{t.label}</span>
                                        </div>
                                        <div className={styles.groupBody}>
                                            <div className={styles.fieldGrid}>
                                                <label className={styles.field}>
                                                    <span className={styles.fieldLabel}>{t.fields.firstName}</span>
                                                    <Field className={styles.input} name="firstName" placeholder={t.fields.firstName} />
                                                </label>
                                                <label className={styles.field}>
                                                    <span className={styles.fieldLabel}>{t.fields.lastName}</span>
                                                    <Field className={styles.input} name="lastName" placeholder={t.fields.lastName} />
                                                </label>
                                            </div>

                                            <div className={styles.fieldGrid}>
                                                <label className={styles.field}>
                                                    <span className={styles.fieldLabel}>{t.fields.email}</span>
                                                    <Field className={styles.input} name="email" type="email" placeholder={t.fields.email} />
                                                </label>
                                                <label className={styles.field}>
                                                    <span className={styles.fieldLabel}>{t.fields.phone}</span>
                                                    <Field className={styles.input} name="phone" placeholder={t.fields.phone} />
                                                </label>
                                            </div>

                                            <label className={styles.field}>
                                                <span className={styles.fieldLabel}>{t.fields.country}</span>
                                                <Field className={styles.input} name="country" placeholder={t.fields.country} />
                                            </label>
                                        </div>
                                    </section>

                                    <section className={styles.group}>
                                        <div className={styles.groupHead}>
                                            <span className={styles.groupLabel}>{t.fields.languages}</span>
                                        </div>
                                        <div className={styles.groupBody}>
                                            <FieldArray name="languages">
                                                {({ push, remove }) => (
                                                    <div className={styles.collection}>
                                                        {values.languages.map((_, i) => (
                                                            <div key={i} className={styles.collectionRow}>
                                                                <Field
                                                                    className={styles.input}
                                                                    name={`languages.${i}`}
                                                                    placeholder={t.fields.languagePlaceholder}
                                                                />
                                                                {values.languages.length > 1 && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => remove(i)}
                                                                        className={styles.remove}
                                                                    >
                                                                        ×
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                        <button type="button" className={styles.add} onClick={() => push("")}>
                                                            {t.fields.addLanguage}
                                                        </button>
                                                    </div>
                                                )}
                                            </FieldArray>
                                        </div>
                                    </section>

                                    <section className={styles.group}>
                                        <div className={styles.groupHead}>
                                            <span className={styles.groupLabel}>{t.fields.skills}</span>
                                        </div>
                                        <div className={styles.groupBody}>
                                            <FieldArray name="skills">
                                                {({ push, remove }) => (
                                                    <div className={styles.collection}>
                                                        {values.skills.map((_, i) => (
                                                            <div key={i} className={styles.collectionRow}>
                                                                <Field
                                                                    className={styles.input}
                                                                    name={`skills.${i}`}
                                                                    placeholder={t.fields.skillPlaceholder}
                                                                />
                                                                {values.skills.length > 1 && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => remove(i)}
                                                                        className={styles.remove}
                                                                    >
                                                                        ×
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                        <button type="button" className={styles.add} onClick={() => push("")}>
                                                            {t.fields.addSkill}
                                                        </button>
                                                    </div>
                                                )}
                                            </FieldArray>
                                        </div>
                                    </section>

                                    <div className={styles.actions}>
                                        <ButtonUI
                                            type="submit"
                                            loading={isSubmitting}
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
}
