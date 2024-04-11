import React from "react";
import styles from "./InfCarousel.module.scss";
import Brands from "@/app/types/Brands";
import Image from "next/image";

const InfCarousel = () => {
    const brands = Brands.brands;
    return (
        <div className={styles.container}>
            {brands.map((brand, idx) => (
                <Image
                    className={styles.brand_logo}
                    src={brand.image}
                    key={idx}
                    alt={brand.name}
                    fill
                />
            ))}
            {brands.map((brand, idx) => (
                <Image
                    className={styles.brand_logo}
                    src={brand.image}
                    key={idx}
                    alt={brand.name}
                    fill
                />
            ))}
        </div>
    );
};

export default InfCarousel;
