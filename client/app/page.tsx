import Image from "next/image";
import styles from "./page.module.css";
import HeroPage from "./components/(homepage)/HeroPage/HeroPage";
import InfCarousel from "./components/(homepage)/InfCarousel/InfCarousel";
import About from "./components/(homepage)/About/About";
import CategoryCarousel from "./components/(homepage)/CategoryCarousel/CategoryCarousel";
import AboutFooter from "./components/(homepage)/About/AboutFooter";

export default function Home() {
    return (
        <>
            <HeroPage />
            <InfCarousel />
            <About />
            <CategoryCarousel />
            <AboutFooter />
        </>
    );
}
