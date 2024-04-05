"use client";
import React, { useState } from "react";
import DraggableCarousel from "./DraggableCarousel/DraggableCarousel";
import CategoryCard from "./CategoryCard/CategoryCard";
import styles from "./CategoryCarousel.module.scss";
import Categories from "@/app/types/Categories";
import Link from "next/link";
const CategoryCarousel = () => {
    const numOfCategories = Categories.categories.length;
    const middleIndex =
        numOfCategories % 2 == 0
            ? numOfCategories / 2
            : (numOfCategories + 1) / 2;

    const [active, setActive] = useState(middleIndex);
    return (
        <div className={styles.container}>
            <DraggableCarousel active={active} setActive={setActive}>
                <CategoryCard title="Make-Up" imgSrc="/categories/makeup.jpg" />
                <CategoryCard
                    title="Dermatology"
                    imgSrc="/categories/dermatology.jpg"
                />
                <CategoryCard
                    title="Anti-Aging"
                    imgSrc="/categories/antiaging.jpg"
                />
                <CategoryCard
                    title="Perfume"
                    imgSrc="/categories/perfume.jpg"
                />
                <CategoryCard
                    title="Supplements"
                    imgSrc="/categories/supplements.jpg"
                />
                <CategoryCard title="Care" imgSrc="/categories/care.jpg" />
            </DraggableCarousel>
            <Link
                className={styles.button}
                href={`/${Categories.categories[active].pathName}`}
            >
                Produkte ansehen
            </Link>
        </div>
    );
};

export default CategoryCarousel;
