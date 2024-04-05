"use client";
import React from "react";
import styles from "./MenuButton.module.scss";
import { useMenuStore } from "@/app/utils/globalStore";

const MenuButton = () => {
    const {
        isOpen: isMenuOpen,
        open: openMenu,
        toggle: toggleMenu,
    } = useMenuStore();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.subcontainer} onClick={toggleMenu}>
                    <div
                        className={`${styles.button_elem} ${
                            isMenuOpen ? styles.open_button_elem : ""
                        } ${styles.one}`}
                    />
                    <div
                        className={`${styles.button_elem} ${
                            isMenuOpen ? styles.open_button_elem : ""
                        } ${styles.two}`}
                    />
                    <div
                        className={`${styles.button_elem} ${
                            isMenuOpen ? styles.open_button_elem : ""
                        } ${styles.three}`}
                    />
                    <div
                        className={`${styles.button_elem} ${
                            isMenuOpen ? styles.open_button_elem : ""
                        } ${styles.four}`}
                    />
                    <div
                        className={`${styles.button_elem} ${
                            isMenuOpen ? styles.open_button_elem : ""
                        } ${styles.five}`}
                    />
                    <div
                        className={`${styles.button_elem} ${
                            isMenuOpen ? styles.open_button_elem : ""
                        } ${styles.six}`}
                    />
                </div>
            </div>
        </>
    );
};

export default MenuButton;
