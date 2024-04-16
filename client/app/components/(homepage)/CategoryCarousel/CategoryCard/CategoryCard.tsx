import React from "react";
import styles from "./CategoryCard.module.scss";
import { DM_Serif_Display } from "next/font/google";

const dmserif = DM_Serif_Display({
    subsets: ["latin-ext"],
    weight: "400",
});

interface CategoryCardProps {
    title: string;
    imgSrc: string;
}
const CategoryCard = ({ title, imgSrc }: CategoryCardProps) => {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.header} ${dmserif.className}`}>{title}</h1>
            <img className={styles.image} src={imgSrc} alt={title} />
        </div>
    );
};

export default CategoryCard;
