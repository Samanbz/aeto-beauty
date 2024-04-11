import React from "react";
import styles from "./Footer.module.scss";
import textContent from "@/public/text/footer.json";
import { parseSpan } from "@/app/utils/textUtils";
import FadeInWrapper from "../common/FadeInWrapper/FadeInWrapper";
import Link from "next/link";
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
                    <Link href="/privacy-policy" className={styles.text}>
                        Privacy Policy
                    </Link>
                    <Link href="/impressum" className={styles.text}>
                        Impressum
                    </Link>
                </div>
            </div>
        </FadeInWrapper>
    );
};

export default Footer;
