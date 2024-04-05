"use client";
import React, { useEffect } from "react";
import styles from "./RegisterWarning.module.scss";
import { IoIosClose } from "react-icons/io";
import { useRegisterWarningStore } from "@/app/utils/globalStore";
import Link from "next/link";

const RegisterWarning = () => {
    const { isShowing, hide } = useRegisterWarningStore();
    // useEffect(() => {
    //     if (isShowing) {
    //         const timeout = setTimeout(() => {
    //             hide();
    //         }, 3000);
    //         return () => clearTimeout(timeout);
    //     }
    // }, [isShowing]);
    return (
        <div
            className={`${styles.container} ${isShowing ? styles.show : ""}`}
            onClick={() => hide()}
        >
            <div className={styles.text_container}>
                <p className={styles.message}>
                    You must register before submitting orders.
                </p>
            </div>
            <Link href="/register" target="_blank" className={styles.register}>
                Register now
            </Link>
        </div>
    );
};

export default RegisterWarning;
