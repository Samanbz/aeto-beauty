"use client";
import React from "react";
import styles from "./ImageColumn.module.scss";
import { MotionValue, motion } from "framer-motion";
import Image from "next/image";
import Product from "@/app/types/Product";

interface ImageColumnProps {
    products: (Product | undefined)[];
    y: MotionValue<string>;
}
const ImageColumn = ({ products, y }: ImageColumnProps) => {
    return (
        <motion.div className={styles.container} style={{ y: y }}>
            {products.map(
                (product) =>
                    product && (
                        <Image
                            className={styles.image}
                            src={product.image}
                            key={product.id}
                            alt={product.name}
                            fill
                        />
                    )
            )}
        </motion.div>
    );
};

export default ImageColumn;
