import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={`${styles.loader_elem} ${styles.one}`} />
                <div className={`${styles.loader_elem} ${styles.two}`} />
                <div className={`${styles.loader_elem} ${styles.three}`} />
                <div className={`${styles.loader_elem} ${styles.four}`} />
                <div className={`${styles.loader_elem} ${styles.five}`} />
                <div className={`${styles.loader_elem} ${styles.six}`} />
            </div>
        </div>
    );
};

export default Loading;
