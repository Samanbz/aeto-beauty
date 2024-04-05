import Image from "next/image";
import styles from "./page.module.css";
import HeroPage from "./components/HeroPage/HeroPage";
import InfCarousel from "./components/(homepage)/InfCarousel/InfCarousel";
import About from "./components/About/About";
import CategoryCarousel from "./components/CategoryCarousel/CategoryCarousel";

export default function Home() {
    return (
        <>
            <HeroPage />
            <InfCarousel />
            <About />
            <CategoryCarousel />
        </>
    );
}
