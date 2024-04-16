"use client";
import React, { useEffect } from "react";
import styles from "./FormAlert.module.scss";
import { useFormAlertStore } from "@/app/utils/globalStore";
import { FaRegCheckCircle } from "react-icons/fa";
import { useLanguageStore } from "@/app/utils/globalStore";
import textContent from "@/public/text/formAlert.json";

const FormAlert = () => {
    const { isShowing, hide } = useFormAlertStore();

    const { language } = useLanguageStore();
    const text = textContent[language];

    useEffect(() => {
        if (isShowing) {
            const timeout = setTimeout(() => {
                hide();
            }, 6000);
            return () => clearTimeout(timeout);
        }
    }, [isShowing]);

    return (
        <div
            className={`${styles.container} ${isShowing ? styles.show : ""}`}
            onClick={() => hide()}
        >
            <FaRegCheckCircle className={styles.check} />
            <div className={styles.text_container}>
                <p className={styles.message}>{text.body}</p>
            </div>
        </div>
    );
};

export default FormAlert;
