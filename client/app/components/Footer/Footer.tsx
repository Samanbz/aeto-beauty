import React from "react";
import styles from "./Footer.module.scss";
import textContent from "@/public/text/footer.json";
import { parseSpan } from "@/app/utils/textUtils";
import FadeInWrapper from "../common/FadeInWrapper/FadeInWrapper";
const Footer = () => {
    const text = textContent.en;

    return (
        <FadeInWrapper
            margin={0}
            once={false}
            duration={0.2}
            delay={0.1}
            initialOpacity={0.2}
        >
            <div className={styles.container}>
                <p className={styles.text}>&copy; AetO GmbH</p>
                <div className={styles.section}>
                    <p className={styles.text}>Privacy Policy</p>
                    <p className={styles.text}>Impressum</p>
                </div>
            </div>
        </FadeInWrapper>
    );
};

export default Footer;
