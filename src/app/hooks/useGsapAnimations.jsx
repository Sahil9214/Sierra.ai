/* eslint-disable prettier/prettier */
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const useGsapAnimations = () => {
    useEffect(() => {
        // Fade In animations
        const fadeInElements = document.querySelectorAll(".fade-in");
        fadeInElements.forEach((element) => {
            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        });

        // Slide In animations
        const slideInElements = document.querySelectorAll(".slide-in");
        slideInElements.forEach((element) => {
            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    x: -50,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
};
