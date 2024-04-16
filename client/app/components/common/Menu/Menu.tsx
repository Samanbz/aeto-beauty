"use client";
import React from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";
import { useMenuStore } from "@/app/utils/globalStore";
import Categories from "@/app/types/Categories";
import { useLanguageStore } from "@/app/utils/globalStore";
import textContent from "@/public/text/menu.json";

const Menu = () => {
    const { isOpen: isMenuOpen, close: closeMenu } = useMenuStore();
    const { language, toggle: toggleLanguage } = useLanguageStore();

    const handleLanguageToggle = () => {
        toggleLanguage();
        setTimeout(() => {
            closeMenu();
        }, 200);
    };

    const text = textContent[language];

    return (
        <div className={`${styles.container} ${isMenuOpen ? styles.open : ""}`}>
            <div className={styles.top}>
                <div className={styles.language_container}>
                    <div
                        className={styles.language}
                        onClick={() => handleLanguageToggle()}
                    >
                        {language}
                    </div>
                </div>
                <div className={styles.basic_link_container}>
                    <Link
                        href={"/"}
                        className={styles.basic_link}
                        onClick={() => closeMenu()}
                    >
                        Home
                    </Link>
                    <Link
                        href={"/register"}
                        className={styles.basic_link}
                        onClick={() => closeMenu()}
                    >
                        {text.register}
                    </Link>
                    <Link
                        href={"/contact"}
                        className={styles.basic_link}
                        onClick={() => closeMenu()}
                    >
                        {text.contact}
                    </Link>
                </div>
            </div>
            <div className={styles.category_grid}>
                {Categories.categories.map((category, idx) => (
                    <Link
                        href={`/${category.pathName}`}
                        className={styles.category}
                        key={idx}
                        onClick={() => closeMenu()}
                    >
                        <div className={styles.title}>{category.name}</div>
                        <div className={styles.overlay} />
                        <img
                            className={styles.image}
                            src={`/categories/${category.pathName}.jpg`}
                            alt={category.name}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;
