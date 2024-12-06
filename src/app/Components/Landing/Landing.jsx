/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGsapAnimations } from "../../hooks/useGsapAnimations";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TrustedBrand from "../TrustedBrand/TrustedBrand";
import HeroSection from "../HeroSection/HeroSection";
import gsap from "gsap";
import WeightWatcher from "../WeightWatcher/WeightWatcher";
import TransformYourCustomerExperince from "../TransformYourCustomerExperience/TransformYourCustomerExperince";
import {
    HERO_SECTION_DESCRIPTION,
    HERO_SECTION_SUB_TITLE,
    WATCH_VIDEO,
    WEIGHT_WATCHERS_CUSTOMER_NAME,
    WEIGHT_WATCHERS_CUSTOMER_POSITION,
} from "../../utils/Constant";
import {
    WEIGHT_WATCHER_IMAGE_URL,
    WEIGHT_WATCHER_HEADSHOT_IMAGE_URL,
} from "../../utils/Images/ImagesUrl";

const Landing = () => {
    useGsapAnimations();
    const [videoSrc, setVideoSrc] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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

        // Set video source based on screen width
        if (typeof window !== "undefined") {
            if (window.innerWidth > 768) {
                setVideoSrc("/assets/video/LandingPage.mp4");
            } else {
                setVideoSrc(
                    "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F241aead84eb6128e26b40905d3cf36d831763dce.mp4",
                );
            }

            const handleResize = () => {
                if (window.innerWidth > 768) {
                    setVideoSrc("/assets/video/LandingPage.mp4");
                } else {
                    setVideoSrc(
                        "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F241aead84eb6128e26b40905d3cf36d831763dce.mp4",
                    );
                }
            };

            window.addEventListener("resize", handleResize);
            return () => {
                // Cleanup
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    if (!mounted) return null;

    return (
        <div>
            <HeroSection
                heading={HERO_SECTION_DESCRIPTION}
                subHeading={HERO_SECTION_SUB_TITLE}
                buttonText={WATCH_VIDEO}
                video={videoSrc}
            />
            {/* Trusted by leading Brands */}
            <TrustedBrand />
            {/* Transform your customer experience */}
            <TransformYourCustomerExperince />
            <WeightWatcher
                image={WEIGHT_WATCHER_HEADSHOT_IMAGE_URL}
                logo={WEIGHT_WATCHER_IMAGE_URL}
                name={WEIGHT_WATCHERS_CUSTOMER_NAME}
                designation={WEIGHT_WATCHERS_CUSTOMER_POSITION}
                thought="I knew the AI agent would answer questions quickly, but I didn't expect the responses to be so genuine and empathetic."
            />
        </div>
    );
};

export default Landing;
