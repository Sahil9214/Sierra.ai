/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TrustedBrand from "../TrustedBrand/TrustedBrand";
import HeroSection from "../HeroSection/HeroSection";
import gsap from "gsap";
import WeightWatcher from "../WeightWatcher/WeightWatcher";
import TransformYourCustomerExperince from "../TransformYourCustomerExperience/TransformYourCustomerExperince";
const Landing = () => {
    useGsapAnimations();
    useEffect(() => {
        // Console log to verify the code is running
        console.log("GSAP Animation initialized");

        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Test animation
        gsap.to(".test-animation", {
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".test-animation",
                start: "top center",
                onEnter: () => console.log("Animation triggered"),
                // markers: true, // This will show visual markers for trigger points
            },
        });

        return () => {
            // Cleanup
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    return (
        <div className="py-14">
            <HeroSection />
            {/* Trusted by leading Brands */}
            <TrustedBrand />
            {/* Transform your customer experience */}
            <TransformYourCustomerExperince />
            <WeightWatcher />
        </div>
    );
};

export default Landing;
