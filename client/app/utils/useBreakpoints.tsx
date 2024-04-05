import useWindowDimensions from "./useWindowDimensions";
import { useDeferredValue, useEffect, useState } from "react";

const useBreakpoint = () => {
    const { width, height } = useWindowDimensions();
    const getBreakpoint = () => {
        switch (true) {
            case width > 2000:
                return "xxl";
            case width > 1600:
                return "xl";
            case width > 1200:
                return "lg";
            case width > 600:
                return "md";
            case width < 600:
                return "sm";
            default:
                return "xl";
        }
    };
    const [breakpoint, setBreakpoint] = useState(getBreakpoint());

    useEffect(() => {
        setBreakpoint(getBreakpoint());

        return () => {
            setBreakpoint(getBreakpoint());
        };
    }, [width, height]);

    return breakpoint;
};

export default useBreakpoint;
