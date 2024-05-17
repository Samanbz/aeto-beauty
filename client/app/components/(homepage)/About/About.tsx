"use client";
import React from "react";
import styles from "./About.module.scss";
import textContent from "@/public/text/about.json";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";
import { parseSpan } from "@/app/utils/textUtils";
import { useLanguageStore } from "@/app/utils/globalStore";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";

const dmserif = DM_Serif_Display({
    subsets: ["latin-ext"],
    weight: "400",
});
const About = () => {
    const { language } = useLanguageStore();
    const text = textContent[language];
    return (
        <div className={styles.container}>
            {/*Section 1*/}
            <div className={`${styles.section_container} ${styles.light}`}>
                <div className={styles.content_wrapper}>
                    <FadeInWrapper heightAuto widthAuto justifyStart>
                        <h1
                            className={`${styles.section_header} ${dmserif.className}`}
                        >
                            {text.section1.header}
                        </h1>
                    </FadeInWrapper>
                    <FadeInWrapper>
                        <p className={styles.section_body}>
                            {text.section1.body}
                        </p>
                    </FadeInWrapper>
                </div>
            </div>
            {/*Section 2*/}
            <div className={`${styles.section_container} ${styles.dark}`}>
                <div className={styles.content_wrapper}>
                    <FadeInWrapper heightAuto widthAuto justifyStart>
                        <h1
                            className={`${styles.section_header} ${dmserif.className}`}
                        >
                            {text.section2.header}
                        </h1>
                    </FadeInWrapper>
                    <FadeInWrapper>
                        <p className={styles.section_body}>
                            {text.section2.body}
                        </p>
                    </FadeInWrapper>
                </div>
            </div>
            {/*Section 3*/}
            <div className={`${styles.section_container} ${styles.light}`}>
                <div className={styles.content_wrapper}>
                    <div className={styles.text_wrapper}>
                        <FadeInWrapper heightAuto widthAuto justifyStart>
                            <h1
                                className={`${styles.section_header} ${dmserif.className}`}
                            >
                                {text.section3.header}
                            </h1>
                        </FadeInWrapper>
                        <FadeInWrapper>
                            <p className={styles.section_body}>
                                {text.section3.body1}
                            </p>
                        </FadeInWrapper>
                        <FadeInWrapper>
                            <p className={styles.section_body}>
                                {text.section3.body2}
                            </p>
                        </FadeInWrapper>
                    </div>
                    <ul className={styles.list_wrapper}>
                        {text.section3.list.map((text, index) => (
                            <FadeInWrapper delay={0.2 * index}>
                                <li key={index} className={styles.list_item}>
                                    {text}
                                </li>
                            </FadeInWrapper>
                        ))}
                    </ul>
                </div>
            </div>
            {/*Section 4*/}
            <div className={`${styles.section_container} ${styles.dark} `}>
                <div
                    className={`${styles.content_wrapper} ${styles.with_media}`}
                >
                    <div className={styles.media_wrapper}>
                        <FadeInWrapper delay={0.3} widthAuto justifyStart>
                            <Image
                                className={styles.image}
                                src={"/world-icon.png"}
                                alt={""}
                                fill
                            />
                        </FadeInWrapper>
                    </div>
                    <div className={styles.text_wrapper}>
                        <FadeInWrapper heightAuto widthAuto justifyStart>
                            <h1
                                className={`${styles.section_header} ${dmserif.className}`}
                            >
                                {text.section4.header}
                            </h1>
                        </FadeInWrapper>
                        <FadeInWrapper>
                            <p className={styles.section_body}>
                                {text.section4.body}
                            </p>
                        </FadeInWrapper>
                    </div>
                </div>
            </div>
            {/*Section 5 & 6*/}
            <div className={`${styles.section_container} ${styles.light}`}>
                <div className={styles.content_wrapper}>
                    <FadeInWrapper delay={0.2}>
                        <div className={styles.card_supercontainer}>
                            <div className={styles.card}>
                                <div className={styles.card_text_container}>
                                    <FadeInWrapper
                                        heightAuto
                                        widthAuto
                                        justifyStart
                                    >
                                        <h1
                                            className={`${styles.card_header} ${dmserif.className}`}
                                        >
                                            {text.section5.header}
                                        </h1>
                                    </FadeInWrapper>
                                    <FadeInWrapper>
                                        <p className={styles.card_body}>
                                            {text.section5.body}
                                        </p>
                                    </FadeInWrapper>
                                </div>
                            </div>
                            <Image
                                className={styles.star1}
                                src={"/star.png"}
                                alt={""}
                                fill
                            />
                        </div>
                    </FadeInWrapper>
                    <FadeInWrapper delay={0.4}>
                        <div className={styles.card_supercontainer}>
                            <div className={styles.card}>
                                <div className={styles.card_text_container}>
                                    <FadeInWrapper
                                        heightAuto
                                        widthAuto
                                        justifyStart
                                    >
                                        <h1
                                            className={`${styles.card_header} ${dmserif.className}`}
                                        >
                                            {parseSpan(text.section6.header)}
                                        </h1>
                                    </FadeInWrapper>
                                    <FadeInWrapper>
                                        <p className={styles.card_body}>
                                            {text.section6.body}
                                        </p>
                                    </FadeInWrapper>
                                </div>
                            </div>
                            <Image
                                className={styles.star2}
                                src={"/star.png"}
                                alt={""}
                                fill
                            />
                        </div>
                    </FadeInWrapper>
                </div>
            </div>
        </div>
    );
};

export default About;
