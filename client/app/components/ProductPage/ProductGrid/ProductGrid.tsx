"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./ProductGrid.module.scss";
import products from "@/public/products/products";
import Products from "@/app/types/Products";
import ProductCard from "../ProductCard/ProductCard";
import Product from "@/app/types/Product";
import Brand from "@/app/types/Brand";
import Image from "next/image";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";

interface ProductPageProps {
    products: Products;
}
const ProductGrid = ({ products }: ProductPageProps) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeBrand, setActiveBrand] = useState<string>();
    const brands: (Brand | null)[] = useMemo(
        () =>
            products.products
                .map((prod) => prod.brand)
                .filter((prod, idx, arr) => arr.indexOf(prod) === idx),
        [filteredProducts]
    );

    const resetProducts = () => {
        if (filteredProducts !== products) setFilteredProducts(products);
        setActiveBrand(undefined);
    };

    const handleFilter = (brandId: string) => {
        if (brandId == activeBrand) return resetProducts();

        let newProducts = products.getProductsByBrand(brandId);
        newProducts && setFilteredProducts(newProducts);
        setActiveBrand(brandId);
    };

    return (
        <div className={styles.supercontainer}>
            <FadeInWrapper>
                <div className={styles.brandcarousel}>
                    {brands.map(
                        (brand) =>
                            brand && (
                                <div
                                    className={`${styles.brand} ${
                                        activeBrand &&
                                        (activeBrand == brand.id
                                            ? styles.active
                                            : styles.inactive)
                                    }`}
                                    key={brand.id}
                                    onClick={() => handleFilter(brand.id)}
                                >
                                    <Image
                                        className={styles.logo}
                                        src={brand?.image}
                                        alt={brand?.image}
                                        fill
                                    />
                                </div>
                            )
                    )}
                </div>
            </FadeInWrapper>
            <div className={styles.container}>
                {filteredProducts &&
                    filteredProducts.products.map((product, idx) => (
                        <ProductCard
                            product={product}
                            idx={idx}
                            key={product.id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ProductGrid;
