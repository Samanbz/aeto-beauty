import React from "react";
import styles from "./Navbar.module.scss";
import MenuButton from "../MenuButton/MenuButton";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <Link href="/" className={styles.logo_container}>
                    <h1 className={styles.logo_top}>AetO</h1>
                    <h2 className={styles.logo_bottom}>beauty</h2>
                </Link>
            </div>
            <MenuButton />
        </>
    );
};

export default Navbar;
