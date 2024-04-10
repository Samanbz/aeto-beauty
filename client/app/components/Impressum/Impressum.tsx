import React from "react";
import styles from "./Impressum.module.scss";
import textContent from "@/public/text/impressum.json";
import { parseSpan } from "@/app/utils/textUtils";
const Impressum = () => {
    const text = textContent.en;
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Impressum</h2>
            {text.content.map((item) => (
                <div className={styles.section}>
                    <h3 className={styles.section_header}>{item.header}</h3>
                    <p className={styles.section_body}>
                        {parseSpan(item.body)}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Impressum;
