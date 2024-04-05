import React from "react";
import styles from "./InfCarousel.module.scss";
import Brands from "@/app/types/Brands";

const InfCarousel = () => {
    const brands = Brands.brands;
    return (
        <div className={styles.container}>
            {brands.map((brand,idx ) => (
                <img
                    className={styles.brand_logo}
                    src={brand.image}
                    key={idx}
                    alt={brand.name}
                />
            ))}
            {brands.map((brand,idx ) => (
                <img
                    className={styles.brand_logo}
                    src={brand.image}
                    key={idx}
                    alt={brand.name}
                />
            ))}
        </div>
    );
};

export default InfCarousel;
