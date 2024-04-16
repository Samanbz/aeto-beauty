"use client";
import React, { useEffect, useState } from "react";
import DraggableCarousel from "./DraggableCarousel/DraggableCarousel";
import CategoryCard from "./CategoryCard/CategoryCard";
import styles from "./CategoryCarousel.module.scss";
import Categories from "@/app/types/Categories";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/app/utils/globalStore";
import textContent from "@/public/text/categoryCarousel.json";
const CategoryCarousel = () => {
    const numOfCategories = Categories.categories.length;
    const middleIndex =
        numOfCategories % 2 == 0
            ? numOfCategories / 2
            : (numOfCategories + 1) / 2;

    const [active, setActive] = useState(middleIndex);
    const [clickable, setClickable] = useState(true);
    useEffect(() => {
        setClickable(false);
        setTimeout(() => {
            setClickable(true);
        }, 200);
    }, [active]);

    const { language } = useLanguageStore();
    const text = textContent[language];
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>{text.header}</h2>
            <DraggableCarousel
                active={active}
                setActive={setActive}
                clickable={clickable}
                setClickable={setClickable}
            >
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
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    opacity: clickable ? 1 : 0,
                    y: clickable ? 0 : "60%",
                }}
            >
                <Link
                    className={styles.button}
                    href={`/${Categories.categories[active].pathName}`}
                >
                    {text.button}
                </Link>
            </motion.div>
        </div>
    );
};

export default CategoryCarousel;
