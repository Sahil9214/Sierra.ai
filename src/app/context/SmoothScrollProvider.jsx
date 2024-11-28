/* eslint-disable prettier/prettier */
"use client";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Lenis from "@studio-freight/lenis";

export const SmoothScrollContext = createContext({
    lenis: null,
});

export const SmoothScrollProvider = ({ children }) => {
    const [lenis, setLenis] = useState();
    const router = useRouter();

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        setLenis(lenisInstance);

        const raf = (time) => {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <SmoothScrollContext.Provider value={{ lenis }}>
            {children}
        </SmoothScrollContext.Provider>
    );
};
