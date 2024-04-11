"use client";
import React from "react";
import styles from "./PageWrapper.module.scss";
import { useMenuStore } from "@/app/utils/globalStore";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const { isOpen: isMenuOpen, close: closeMenu } = useMenuStore();

    return (
        <div
            className={`${styles.container} ${
                isMenuOpen ? styles.open : styles.closed
            }`}
        >
            <div className={styles.overlay} onClick={() => closeMenu()} />
            {children}
        </div>
    );
};

export default PageWrapper;
