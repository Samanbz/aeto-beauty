"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

interface FadeInWrapperProps {
    children: React.ReactNode;
    once?: boolean;
    delay?: number;
    duration?: number;
    margin?: number;
    initialOpacity?: number;
    initialOffset?: string;
    widthAuto?: boolean;
}
const FadeInWrapper = ({
    children,
    once = true,
    delay = 0.2,
    duration = 0.3,
    margin = 20,
    initialOpacity = 0,
    initialOffset = "5%",
    widthAuto = false,
}: FadeInWrapperProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: once, margin: `-${margin}% 0%` });

    return (
        <motion.div
            ref={ref}
            style={{
                margin: widthAuto ? "0 0" : "0 auto",
                width: widthAuto ? "auto" : "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "inherit",
            }}
            initial={{ y: initialOffset, opacity: initialOpacity }}
            animate={
                isInView
                    ? { y: 0, opacity: 1 }
                    : { y: initialOffset, opacity: initialOpacity }
            }
            transition={{ duration: duration, delay: delay }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWrapper;
