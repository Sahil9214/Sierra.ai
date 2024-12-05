/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TRUSTED_BY_LEADING_BRAND_SUBHEADING } from "../../utils/Constant";

const TrustedBrands = () => {
    const titleRef = useRef(null);
    const logoGridRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        gsap.registerPlugin(ScrollTrigger);
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        const title = titleRef.current;
        const logos = logoGridRef.current?.children;

        if (!title || !logos) return;

        gsap.context(() => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            gsap.killTweensOf([title, logos]);

            gsap.set([title, logos], {
                opacity: 0,
                y: (index) => (index === 0 ? -50 : 30),
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: title,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
            });

            tl.to(title, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }).to(
                logos,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                },
                "-=0.5",
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [isLoaded, isMobile]);

    return (
        <section className="relative bg-white text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 lg:py-18 py-6 md:py-6 lg:pb-6 lg:pt-12">
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="col-span-12 flex flex-col gap-6 md:gap-6 lg:col-span-10 lg:col-start-2 lg:gap-12 xl:flex-row xl:items-center xl:gap-[110px]">
                        <h2
                            ref={titleRef}
                            className="body-m shrink-0 text-gray-500 theme-tech:text-gray-100"
                        >
                            {TRUSTED_BY_LEADING_BRAND_SUBHEADING}
                        </h2>
                        <ul
                            ref={logoGridRef}
                            className="flex grow items-center justify-between"
                        >
                            {[
                                {
                                    href: "/customers/sonos",
                                    src: "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ffde6590808fad7d7a764c6008f2a1bee57a85298-1030x240.png&width=3840&quality=90",
                                    width: "1030",
                                    height: "240",
                                },
                                {
                                    href: "/customers/siriusxm",
                                    src: "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F8ab9c2fc63ff045de128c9294bf1e26711e73d45-1431x240.png&width=3840&quality=90",
                                    width: "1431",
                                    height: "240",
                                },
                                {
                                    href: "/customers/olukai",
                                    src: "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F6f8d151165955078a37f047746191a5c4f53501f-1110x240.png&width=3840&quality=90",
                                    width: "1110",
                                    height: "240",
                                },
                                {
                                    href: "/customers/casper",
                                    src: "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fcfa67bb226240ad5a303d3302371b458c2a8e14f-402x125.png&width=3840&quality=90",
                                    width: "402",
                                    height: "125",
                                    className: "hidden md:flex",
                                },
                                {
                                    href: "/customers/weightwatchers",
                                    src: "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&width=3840&quality=90",
                                    width: "1820",
                                    height: "240",
                                    className: "hidden md:flex",
                                },
                            ].map((brand, index) => (
                                <li
                                    key={index}
                                    className={brand.className || ""}
                                >
                                    <a
                                        className="group relative flex h-4 items-center outline-offset-4 outline-yellow min-[400px]:h-5 md:h-5 lg:h-6"
                                        aria-label="Read the customer story"
                                        href={brand.href}
                                    >
                                        <img
                                            alt="Brand Logo"
                                            loading="lazy"
                                            width={brand.width}
                                            height={brand.height}
                                            decoding="async"
                                            className="block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                            sizes="(min-width: 769px) 20vw, 40vw"
                                            src={brand.src}
                                            style={{
                                                filter: "var(--filter-gray-250)",
                                                color: "transparent",
                                            }}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;
