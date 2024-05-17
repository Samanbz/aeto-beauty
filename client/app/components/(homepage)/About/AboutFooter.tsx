"use client";
import React from "react";
import styles from "./About.module.scss";
import { DM_Serif_Display } from "next/font/google";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";
import { useLanguageStore } from "@/app/utils/globalStore";
import textContent from "@/public/text/about.json";
import Link from "next/link";

const dmserif = DM_Serif_Display({
    subsets: ["latin-ext"],
    weight: "400",
});

const AboutFooter = () => {
    const { language } = useLanguageStore();

    const text = textContent[language];

    return (
        <div className={styles.container}>
            <div className={styles.content_wrapper_large}>
                <div className={styles.card_supercontainer}>
                    <FadeInWrapper>
                        <Link className={styles.contact_link} href="/contact">
                            {text.section7.botton}
                        </Link>

                        <div className={`${styles.card} ${styles.card_large}`}>
                            <div className={styles.card_text_container}>
                                <FadeInWrapper
                                    heightAuto
                                    widthAuto
                                    justifyStart
                                >
                                    <h1
                                        className={`${styles.card_header} ${dmserif.className}`}
                                    >
                                        {text.section7.header}
                                    </h1>
                                </FadeInWrapper>
                                <FadeInWrapper
                                    heightAuto
                                    widthAuto
                                    justifyStart
                                >
                                    <p className={styles.card_body}>
                                        {text.section7.body1}
                                    </p>
                                </FadeInWrapper>
                                {text.section7.body2 && (
                                    <FadeInWrapper
                                        heightAuto
                                        widthAuto
                                        justifyStart
                                    >
                                        <p className={styles.card_body}>
                                            {text.section7.body2}
                                        </p>
                                    </FadeInWrapper>
                                )}
                            </div>
                        </div>
                    </FadeInWrapper>
                </div>
            </div>
        </div>
    );
};

export default AboutFooter;
