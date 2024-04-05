import React from "react";
import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
    title: string;
    imgSrc: string;
}
const CategoryCard = ({ title, imgSrc }: CategoryCardProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{title}</h1>
            <img className={styles.image} src={imgSrc} alt={title} />
        </div>
    );
};

export default CategoryCard;
