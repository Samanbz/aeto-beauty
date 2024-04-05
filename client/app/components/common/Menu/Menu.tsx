"use client";
import React from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";
import { useMenuStore } from "@/app/utils/globalStore";
import Categories from "@/app/types/Categories";
const Menu = () => {
    const { isOpen: isMenuOpen, close: closeMenu } = useMenuStore();

    return (
        <div className={`${styles.container} ${isMenuOpen ? styles.open : ""}`}>
            <div className={styles.top}>
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
                    Register
                </Link>
                <Link
                    href={"/contact"}
                    className={styles.basic_link}
                    onClick={() => closeMenu()}
                >
                    Get in touch
                </Link>
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
