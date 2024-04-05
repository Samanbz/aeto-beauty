import React from "react";
import styles from "./FormSection.module.scss";

interface FormSectionProps {
    title?: string;
    children: React.ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => {
    return (
        <div className={styles.container}>
            {title && (
                <div className={styles.title_container}>
                    <h1 className={styles.title}>{title}</h1>
                </div>
            )}
            {children}
        </div>
    );
};

export default FormSection;
