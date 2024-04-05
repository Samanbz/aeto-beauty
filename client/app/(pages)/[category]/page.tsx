"use client";
import React, { useEffect } from "react";
import Categories from "../../types/Categories";
import ProductsByCategory from "../../components/ProductPage/ProductsByCategory/ProductsByCategory";

const CategoryPage = ({ params }: { params: { category: string } }) => {
    const categoryId = Categories.getCategoryId(params.category);
    useEffect(() => {
        console.log(params);
    }, []);

    if (categoryId == -1) {
        return <div>page not found</div>;
    } else {
        return <ProductsByCategory categoryId={String(categoryId)} />;
    }
};

export default CategoryPage;
