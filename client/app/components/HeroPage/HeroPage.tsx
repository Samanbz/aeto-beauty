"use client";
import React, { useEffect, useRef } from "react";
import styles from "./HeroPage.module.scss";
import textContent from "@/public/text/homepage.json";
import { parseSpan } from "@/app/utils/textUtils";
import ImageColumn from "./ImageColumn/ImageColumn";
import Products from "@/app/types/Products";
import products from "@/public/products/products";
import {
    cubicBezier,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { DM_Serif_Display } from "next/font/google";
import axios from 'axios';

const dmserif = DM_Serif_Display({
    subsets: ["latin-ext"],
    weight: "400",
});

const HeroPage = () => {
    const text = textContent.en;
    const allProducts = new Products(products);

    const scrollRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end 30%"],
    });

    const scrollYProgressSpring = useSpring(scrollYProgress, {
        stiffness: 3000,
        damping: 400,
        restDelta: 0.001,
    });

    const col1Offset = useTransform(
        scrollYProgressSpring,
        [0, 1],
        ["-10%", "10%"]
    );
    const col2Offset = useTransform(
        scrollYProgressSpring,
        [0, 1],
        ["10%", "-10%"]
    );
    const col3Offset = useTransform(
        scrollYProgressSpring,
        [0, 1],
        ["-25%", "0%"]
    );
    const col4Offset = useTransform(
        scrollYProgressSpring,
        [0, 1],
        ["10%", "-20%"]
    );

    const col1Products = [
        allProducts.getProductById("00001"),
        allProducts.getProductById("00008"),
        allProducts.getProductById("31903"),
        allProducts.getProductById("21502"),
        allProducts.getProductById("30202"),
        allProducts.getProductById("31707"),
    ];
    const col2Products = [
        allProducts.getProductById("31902"),
        allProducts.getProductById("21507"),
        allProducts.getProductById("42404"),
        allProducts.getProductById("21510"),
        allProducts.getProductById("32005"),
        allProducts.getProductById("32010"),
    ];
    const col3Products = [
        allProducts.getProductById("42409"),
        allProducts.getProductById("52601"),
        allProducts.getProductById("10809"),
        allProducts.getProductById("31705"),
        allProducts.getProductById("31604"),
        allProducts.getProductById("21508"),
    ];
    const col4Products = [
        allProducts.getProductById("21506"),
        allProducts.getProductById("30201"),
        allProducts.getProductById("31908"),
        allProducts.getProductById("52706"),
        allProducts.getProductById("31810"),
        allProducts.getProductById("52708"),
    ];
    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_API_URL);
        console.log(axios.get("http://localhost:8000/"));
    })
    const parsedTitle = parseSpan(text.title);
    return (
        <div className={styles.supercontainer} ref={scrollRef}>
            <motion.div className={styles.container}>
                <div className={styles.left}>
                    <motion.h1
                        className={`${styles.title} ${dmserif.className}`}
                        initial={{ y: "5%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.3,
                            ease: cubicBezier(0.17, 0.67, 0.64, 0.97),
                        }}
                    >
                        {parsedTitle}
                    </motion.h1>
                </div>
                <div className={styles.right}>
                    <ImageColumn products={col1Products} y={col1Offset} />
                    <ImageColumn products={col2Products} y={col2Offset} />
                    <ImageColumn products={col3Products} y={col3Offset} />
                    <ImageColumn products={col4Products} y={col4Offset} />
                </div>
            </motion.div>
        </div>
    );
};

export default HeroPage;
