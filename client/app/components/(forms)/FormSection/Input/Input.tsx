import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    label: string;
    name?: string;
    type?: string;
    big?: boolean;
    required?: boolean;
}
const Input = ({
    label,
    name = label.replaceAll(" ", "").toLowerCase(),
    type = "text",
    big = false,
    required = false,
}: InputProps) => {
    return (
        <div
            className={`${styles.container} ${big ? styles.big_container : ""}`}
        >
            <h3 className={styles.label}>
                {label}
                {required ? "*" : ""}
            </h3>
            <div className={styles.input_container}>
                {!big ? (
                    <input
                        type={type}
                        name={name}
                        className={styles.input}
                        required={required}
                    />
                ) : (
                    <textarea
                        className={styles.textarea}
                        name={name}
                        required={required}
                    />
                )}
                <div className={styles.focusbg} />
            </div>
        </div>
    );
};

export default Input;
