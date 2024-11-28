/* eslint-disable prettier/prettier */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const brands = [
    { name: "Sonos", src: "/assets/Images/Sonas.png" },
    { name: "SiriusXM", src: "/assets/Images/Sirius.png" },
    { name: "OluKai", src: "/assets/Images/Olukai.png" },
    { name: "Casper", src: "/assets/Images/Casper.png" },
    { name: "Weight Watchers", src: "/assets/Images/WeightWatcher.png" },
];

export default function TrustedBrands() {
    const titleRef = useRef(null);
    const logoGridRef = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger plugin
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const title = titleRef.current;
        const logos = logoGridRef.current?.children;

        if (title && logos) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: title,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                title,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1 },
            ).fromTo(
                logos,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                },
                "-=0.5",
            );
        }

        return () => {
            if (typeof window !== "undefined") {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            }
        };
    }, []);

    // Check if we're on the client side
    const isBrowser = typeof window !== "undefined";
    const showAllBrands = isBrowser ? window.innerWidth > 768 : false;

    return (
        <section className="relative bg-white text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 lg:py-18 py-6 md:py-6 lg:pb-6 lg:pt-12">
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="col-span-12 flex flex-col gap-6 md:gap-6 lg:col-span-10 lg:col-start-2 lg:gap-12 xl:flex-row xl:items-center xl:gap-[110px]">
                        <h2
                            ref={titleRef}
                            className="body-m shrink-0 text-gray-600 theme-tech:text-gray-100"
                        >
                            Trusted by leading brands
                        </h2>
                        <ul
                            ref={logoGridRef}
                            className="grid grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-4 w-full items-center"
                        >
                            {(showAllBrands ? brands : brands.slice(0, 3)).map(
                                (brand, index) => (
                                    <li
                                        key={brand.name}
                                        className={`relative h-14 lg:h-7 flex items-center
                                        ${
                                            index === 0
                                                ? "justify-start"
                                                : index ===
                                                    Math.floor(
                                                        brands.length / 2,
                                                    )
                                                  ? "justify-center"
                                                  : index === brands.length - 1
                                                    ? "justify-end"
                                                    : "justify-center"
                                        }`}
                                    >
                                        <Image
                                            src={brand.src}
                                            alt={brand.name}
                                            width={120}
                                            height={40}
                                            priority
                                            className="object-contain  duration-300
                                             grayscale hover:filter-none hover:grayscale-0
                                            opacity-60 hover:opacity-100
                                            theme-tech:filter-gray-100 group-hover:filter-gray-300 transition-[filter]
                                            cursor-pointer"
                                            style={{
                                                filter: "var(--filter-gray-250)",
                                                color: "transparent",
                                            }}
                                        />
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
