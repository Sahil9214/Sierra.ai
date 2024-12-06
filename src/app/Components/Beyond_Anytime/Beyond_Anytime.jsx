/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ANYTIME_AND_ANYWHERE_HEADING } from "../../utils/Constant";

const BeyondAnytime = ({
    heading,
    description,
    innerHeading1,
    innerHeading1SVG: InnerHeading1SVG,
    innerDescription1,
    innerHeading2,
    innerHeading2SVG: InnerHeading2SVG,
    innerDescription2,
    innerHeading3,
    innerHeading3SVG: InnerHeading3SVG,
    innerDescription3,
    innerHeading4,
    innerHeading4SVG: InnerHeading4SVG,
    innerDescription4,
    video,
}) => {
    const [videoPaused, setVideoPaused] = useState(false);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    console.log(heading);
    const handleVideoToggle = () => {
        if (videoRef.current) {
            if (videoPaused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setVideoPaused(!videoPaused);
        }
    };

    // GSAP Animation
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!titleRef.current || !textRef.current) return;

        const elements = [titleRef.current, textRef.current].filter(Boolean);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.set(elements, { opacity: 0, y: -100 });

        tl.to(elements, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="theme-product relative py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
            style={{ zIndex: 5 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                {/* Header Section */}
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2
                            ref={titleRef}
                            className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0 "
                        >
                            {heading}
                        </h2>
                        <p
                            ref={textRef}
                            className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6"
                        >
                            {description}
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    {/* Video Section */}
                    <div className="col-span-12 mb-6 md:mb-0 md:col-span-6 lg:col-span-5 lg:col-start-2">
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl">
                            <div className="cursor-pointer absolute inset-0">
                                <video
                                    ref={videoRef}
                                    className="block h-full w-full pointer-events-none absolute object-cover"
                                    loop
                                    autoPlay
                                    playsInline
                                    preload="metadata"
                                    src={video}
                                />
                                <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-end px-4 md:bottom-2 md:px-8">
                                    <div className="pointer-events-none z-10 flex w-full items-center mb-4 justify-start gap-2">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={handleVideoToggle}
                                                aria-label={
                                                    videoPaused
                                                        ? "Play video"
                                                        : "Pause video"
                                                }
                                                className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white"
                                            >
                                                <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                    {videoPaused ? (
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4"
                                                        >
                                                            <path
                                                                d="M21 12L6 3V21L21 12Z"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4"
                                                        >
                                                            <path
                                                                d="M4.75 3.75H9.25V20.25H4.75V3.75Z"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            />
                                                            <path
                                                                d="M14.75 3.75H19.25V20.25H14.75V3.75Z"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            />
                                                        </svg>
                                                    )}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="col-span-12 md:col-span-5 lg:col-span-3 md:col-start-8 lg:col-start-9">
                        <ul className="flex flex-col gap-6">
                            <li>
                                <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                    <InnerHeading1SVG />
                                    {innerHeading1}
                                </h3>
                                <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500 theme-tech:text-gray-100">
                                    {innerDescription1}
                                </p>
                            </li>
                            <li>
                                <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                    <InnerHeading2SVG />
                                    {innerHeading2}
                                </h3>
                                <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500 theme-tech:text-gray-100">
                                    {innerDescription2}
                                </p>
                            </li>
                            <li>
                                <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                    <InnerHeading3SVG />
                                    {innerHeading3}
                                </h3>
                                <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500 theme-tech:text-gray-100">
                                    {innerDescription3}
                                </p>
                            </li>
                            {heading === ANYTIME_AND_ANYWHERE_HEADING ? (
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <InnerHeading4SVG />
                                        {innerHeading4}
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500 theme-tech:text-gray-100">
                                        {innerDescription4}
                                    </p>
                                </li>
                            ) : (
                                ""
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondAnytime;
