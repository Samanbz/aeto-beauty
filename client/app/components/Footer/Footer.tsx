import React from "react";
import styles from "./Footer.module.scss";
import textContent from "@/public/text/footer.json";
import { parseSpan } from "@/app/utils/textUtils";
import FadeInWrapper from "../common/FadeInWrapper/FadeInWrapper";
const Footer = () => {
    const text = textContent.en;

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <FadeInWrapper margin={0} once={false} widthAuto>
                    <div className={styles.section}>
                        <h3 className={styles.section_header}>
                            {text.section1.header}
                        </h3>
                        <p className={styles.section_content}>
                            {parseSpan(text.section1.content)}
                        </p>
                    </div>
                </FadeInWrapper>
                <FadeInWrapper margin={0} once={false} widthAuto>
                    <div className={styles.section}>
                        <h3 className={styles.section_header}>
                            {text.section2.header}
                        </h3>
                        <p className={styles.section_content}>
                            info@aeto-beauty.com
                            <br />
                            +49 69 6677 411 58
                        </p>
                    </div>
                </FadeInWrapper>
            </div>

            <div className={styles.bottom}>
                <p className={styles.bottom_text}>&copy; AetO GmbH</p>
                <div className={styles.bottom_section}>
                    <p className={styles.bottom_text}>Privacy Policy</p>
                    <p className={styles.bottom_text}>Impressum</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
