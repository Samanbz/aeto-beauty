"use client";
import React from "react";
import styles from "./Impressum.module.scss";
import textContent from "@/public/text/impressum.json";
import { parseSpan } from "@/app/utils/textUtils";
import Header from "../common/Header/Header";
import { useLanguageStore } from "@/app/utils/globalStore";

const Impressum = () => {
    const { language } = useLanguageStore();
    const text = textContent[language];

    return (
        <div className={styles.container}>
            <Header header={"Impressum"} />
            {text.content.map((item, key) => (
                <div key={key} className={styles.section}>
                    <h3 className={styles.header}>{item.header}</h3>
                    <p className={styles.body}>{parseSpan(item.body)}</p>
                </div>
            ))}
        </div>
    );
};

export default Impressum;
