"use client";
import React from "react";
import styles from "./PrtoductsByCategory.module.scss";
import products from "@/public/products/products";
import Products from "@/app/types/Products";
import Categories from "@/app/types/Categories";
import ProductGrid from "../ProductGrid/ProductGrid";
import RegisterWarning from "../../(alerts)/RegisterWarning/RegisterWarning";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";
import Header from "../../common/Header/Header";

interface ProductsByCategoryProps {
    categoryId: string;
}
const ProductsByCategory = ({ categoryId }: ProductsByCategoryProps) => {
    const filteredProducts = new Products(products).getProductsByCategory(
        categoryId
    );
    const category = Categories.categories[parseInt(categoryId)].name;
    return (
        <div className={styles.container}>
            <RegisterWarning />
            <Header header={category ? category : "Category not found"} />
            {filteredProducts && <ProductGrid products={filteredProducts} />}
        </div>
    );
};

export default ProductsByCategory;
