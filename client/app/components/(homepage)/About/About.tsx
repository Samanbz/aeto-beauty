"use client";
import React from "react";
import styles from "./About.module.scss";
import textContent from "@/public/text/about.json";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";
import { parseSpan } from "@/app/utils/textUtils";
import { useLanguageStore } from "@/app/utils/globalStore";
const About = () => {
    const { language } = useLanguageStore();
    const text = textContent[language];
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{text.header}</h3>
            <FadeInWrapper margin={35} initialOpacity={0.2}>
                <p className={styles.bodybig}>{parseSpan(text.p1)}</p>
            </FadeInWrapper>
            <FadeInWrapper margin={35} initialOpacity={0.2}>
                <p className={styles.body}>{parseSpan(text.p2)}</p>
            </FadeInWrapper>
            <FadeInWrapper margin={35} initialOpacity={0.2}>
                <p className={styles.body}>{parseSpan(text.p3)}</p>
            </FadeInWrapper>

            <FadeInWrapper margin={35} initialOpacity={0.2}>
                <p className={styles.body}>{parseSpan(text.p4)}</p>
            </FadeInWrapper>
            <FadeInWrapper margin={35} initialOpacity={0.2}>
                <p className={styles.body}>{parseSpan(text.p5)}</p>
            </FadeInWrapper>
            <FadeInWrapper margin={35} initialOpacity={0.2}>
                <p className={styles.body}>{parseSpan(text.p6)}</p>
            </FadeInWrapper>
        </div>
    );
};

export default About;
