"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./DraggableCarousel.module.scss";
import { PanInfo, cubicBezier, motion, useAnimate } from "framer-motion";
import useWindowDimensions from "@/app/utils/useWindowDimensions";
import textContent from "@/public/text/categoryCarousel.json";

interface DraggableCarouselProps {
    children: React.ReactNode[];
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    clickable: boolean;
    setClickable: React.Dispatch<React.SetStateAction<boolean>>;
}

const customEase = cubicBezier(0.3, 1.01, 0.73, 0.99);
const DraggableCarousel = ({
    children,
    active,
    setActive,
    clickable,
    setClickable,
}: DraggableCarouselProps) => {
    let len = children && children.length;

    const [scope, animate] = useAnimate();

    const arrayMiddle = len % 2 == 0 ? len / 2 : (len + 1) / 2;

    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const isPortrait = windowHeight > windowWidth;

    const gapWidth = 16 * (isPortrait ? 1 : 2);

    const cardWidth = useMemo(() => windowWidth * (isPortrait ? 0.6 : 0.2), []);
    const snapPoints = useMemo(() => {
        if (children == undefined || !Array.isArray(children)) return [];
        let snapCoefs = Array.from({ length: len }, (_, i) => i - arrayMiddle);
        let out = snapCoefs.map((coef) => -coef * (gapWidth + cardWidth));
        return out;
    }, []);

    const [x, setX] = useState(0);
    const [anchorX, setAnchorX] = useState(0);

    const handleDrag = (e: PointerEvent, info: PanInfo) => {
        let dX = info.offset.x;
        setX(anchorX + dX * 1.3);
    };

    const handleDragEnd = () => {
        if (!scope.current) return;
        let diffs = snapPoints.map((point) => Math.abs(point - x));
        let closestIdx = diffs.indexOf(Math.min(...diffs));
        let closestSnapPoint = snapPoints[closestIdx];

        setActive(closestIdx);
        setX(closestSnapPoint);
        setAnchorX(closestSnapPoint);
        animate(scope.current, { x: closestSnapPoint }, { ease: customEase });

        setTimeout(() => {
            setClickable(true);
        }, 200);
    };

    const snapToCard = (cardId: number) => {
        if (!scope.current) return;
        if (!clickable) return;
        let snapPoint = snapPoints[cardId];
        setActive(cardId);
        setX(snapPoint);
        setAnchorX(snapPoint);
        animate(scope.current, { x: snapPoint }, { ease: customEase });
    };

    const text = textContent.de;

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>{text.header}</h2>
            <motion.div
                ref={scope}
                className={styles.feature_container}
                drag="x"
                onDragStart={() => setClickable(false)}
                onDrag={(e, info) => handleDrag(e as PointerEvent, info)}
                onDragEnd={() => handleDragEnd()}
                dragElastic={0.3}
                dragMomentum={false}
            >
                {children.map((child, index) => (
                    <motion.div
                        key={index}
                        animate={{
                            scale: index == active ? 1.1 : 0.9,
                            y: index == active ? cardWidth / 11 : 0,
                            x:
                                index > active + 1
                                    ? ((Math.abs(index - active) - 1) *
                                          -cardWidth) /
                                      11
                                    : index < active - 1
                                    ? ((Math.abs(index - active) - 1) *
                                          cardWidth) /
                                      11
                                    : 0,
                        }}
                        transition={{ duration: 0.3, ease: customEase }}
                        onClick={() => snapToCard(index)}
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default DraggableCarousel;
