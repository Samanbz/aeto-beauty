"use client";
import React, { useEffect } from "react";
import styles from "./RegisterWarning.module.scss";
import { useRegisterWarningStore } from "@/app/utils/globalStore";
import Link from "next/link";
import { useLanguageStore } from "@/app/utils/globalStore";
import textContent from "@/public/text/registerWarning.json";

const RegisterWarning = () => {
    const { isShowing, hide } = useRegisterWarningStore();
    const { language } = useLanguageStore();
    const text = textContent[language];
    useEffect(() => {
        if (isShowing) {
            const timeout = setTimeout(() => {
                hide();
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [isShowing]);

    return (
        <div
            className={`${styles.container} ${isShowing ? styles.show : ""}`}
            onClick={() => hide()}
        >
            <div className={styles.text_container}>
                <p className={styles.message}>{text.body}</p>
            </div>
            <Link href="/register" target="_blank" className={styles.register}>
                {text.button}
            </Link>
        </div>
    );
};

export default RegisterWarning;
