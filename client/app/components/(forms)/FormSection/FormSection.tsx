import React from "react";
import styles from "./FormSection.module.scss";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";

interface FormSectionProps {
    title?: string;
    children: React.ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => {
    return (
        <FadeInWrapper heightAuto margin={0}>
            <div className={styles.container}>
                {title && (
                    <div className={styles.title_container}>
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                )}
                {children}
            </div>
        </FadeInWrapper>
    );
};

export default FormSection;
