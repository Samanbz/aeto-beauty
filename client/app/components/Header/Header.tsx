import React from "react";
import styles from "./Header.module.scss";
import FadeInWrapper from "../common/FadeInWrapper/FadeInWrapper";
import { DM_Serif_Display } from "next/font/google";

const dmserif = DM_Serif_Display({
    subsets: ["latin-ext"],
    weight: "400",
});
const Header = ({ header }: { header: string }) => {
    return (
        <FadeInWrapper margin={5} heightAuto>
            <h1 className={`${styles.header} ${dmserif.className}`}>
                {header}
            </h1>
        </FadeInWrapper>
    );
};

export default Header;
