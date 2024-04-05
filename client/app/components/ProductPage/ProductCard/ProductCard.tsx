import styles from "./ProductCard.module.scss";
import Brand from "@/app/types/Brand";
import Product from "@/app/types/Product";
import { useRegisterWarningStore } from "@/app/utils/globalStore";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeInWrapper from "../../common/FadeInWrapper/FadeInWrapper";
import useBreakpoint from "@/app/utils/useBreakpoints";
interface ProductCardProps {
    product: Product;
    idx: number;
}

const ProductCard = ({ product, idx }: ProductCardProps) => {
    const { show: showRegisterWarning } = useRegisterWarningStore();
    const brand: Brand | null = product.brand;

    const breakpoint = useBreakpoint();

    const productsPerColumn =
        breakpoint === "sm" ? 2 : breakpoint === "md" ? 3 : 4;

    return (
        <FadeInWrapper
            delay={(idx % productsPerColumn) * 0.05}
            duration={0.2}
            margin={17}
            once={false}
            initialOpacity={0.1}
        >
            <div className={styles.container}>
                <div className={styles.image_container}>
                    <div
                        className={styles.add}
                        onClick={() => showRegisterWarning()}
                    >
                        <div className={styles.add_wrapper}>
                            <div className={styles.plus} />
                            <div className={styles.plus} />
                        </div>
                    </div>

                    <Image
                        className={styles.image}
                        src={product.image}
                        alt={product.name}
                        fill
                        loading="lazy"
                    />
                    {/* {brand && (
                    <img
                        className={styles.logo}
                        src={brand.image}
                        alt={brand.name}
                    />
                )} */}
                </div>
                <div className={styles.text_wrapper}>
                    <h3 className={styles.title}>{product.name}</h3>
                    <p className={styles.brand}>{brand ? brand.name : "???"}</p>
                </div>
            </div>
        </FadeInWrapper>
    );
};

export default ProductCard;
