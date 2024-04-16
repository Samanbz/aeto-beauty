"use client";
import React, { useEffect } from "react";
import styles from "./FormError.module.scss";
import { useFormErrorStore } from "@/app/utils/globalStore";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useLanguageStore } from "@/app/utils/globalStore";
import textContent from "@/public/text/formError.json";

const FormError = () => {
    const { isShowing, hide } = useFormErrorStore();

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
            <MdOutlineErrorOutline className={styles.check} />
            <div className={styles.text_container}>
                <p className={styles.message}>{text.body}</p>
            </div>
        </div>
    );
};

export default FormError;
