import React from "react";
import styles from "./Navbar.module.scss";
import MenuButton from "../MenuButton/MenuButton";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <h1 className={styles.logo_top}>AetO</h1>
                <h2 className={styles.logo_bottom}>beauty</h2>
            </div>
            <MenuButton />
        </div>
    );
};

export default Navbar;
