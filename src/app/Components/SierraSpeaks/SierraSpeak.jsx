/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../Buttons/Button";
import {
    ENGAGE_AND_DELIGHT_CUSTOMERS_DESCRIPTION,
    LEARN_MORE,
    SIERRA_SPEAKS_DESCRIPTION,
    SIERRA_SPEAKS_HEADING,
    ENGAGE_WITH_FASTER_BETTER_PHONE_CALLS_HEADING,
    ENGAGE_WITH_FASTER_BETTER_PHONE_CALLS_DESCRIPTION,
    CONNECT_TO_YOUR_CALL_CENTER_ECOSYSTEM_HEADING,
    CONNECT_TO_YOUR_CALL_CENTER_ECOSYSTEM_DESCRIPTION,
    SCALE_CONSISTENT_EXPERIENCES_ON_EVERY_CHANNEL_HEADING,
    SCALE_CONSISTENT_EXPERIENCES_ON_EVERY_CHANNEL_DESCRIPTION,
} from "../../utils/Constant";

const SierraSpeak = () => {
    const [isVisible, setIsVisible] = useState(false);

    // True means audio is on, false means muted
    const [isAudioOn, setIsAudioOn] = useState(false);
    // True means playing, false means paused  
    const [isPlaying, setIsPlaying] = useState(true);

    const ref = useRef(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const videoRef = useRef(null);

    const handleAudioToggle = () => {
        setIsAudioOn(!isAudioOn);
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 }, // Adjust threshold as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Wait for elements to be available
        if (!titleRef.current || !textRef.current || !sectionRef.current)
            return;

        const elements = [
            titleRef.current,
            textRef.current,
            buttonRef.current,
        ].filter(Boolean); // Filter out any null elements

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Set initial state
        gsap.set(elements, { opacity: 0, y: -100 });

        // Animate
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
    }, [isVisible]);

    return (
        <div
            ref={ref}
            className={`transition-opacity ${isVisible ? "fade-in" : "opacity-0"}`}
        >
            <section
                className="theme-product relative bg-white py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
                //  className="h-full py-8 theme-product relative  theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18 "
                style={{
                    zIndex: 4,
                    background: "var(--sierra-grey-background-color)",
                    backgroundColor: "#F6F5F3",
                }}
            >
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-0">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                        <div
                            ref={sectionRef}
                            className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2"
                        >
                            <h2
                                ref={titleRef || null}
                                // className="text-[7vw] title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0 lg:text-[2.8vw]"
                                className="title-l text-pretty pr-4  theme-tech:text-white md:pr-0"
                                style={{
                                    color: "rgba(34,34,34,1)",
                                    opacity: 1,
                                }}
                            >
                                {SIERRA_SPEAKS_HEADING}
                            </h2>
                            <p
                                ref={textRef || null}
                                className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6"
                            >
                                {SIERRA_SPEAKS_DESCRIPTION}
                            </p>
                            <Button name={LEARN_MORE} />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                        <div className="col-span-12 mb-6 md:mb-0 md:col-span-6 lg:col-span-5 lg:col-start-2">
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl">
                                <div className="bg-white cursor-pointer absolute inset-0">
                                    <video
                                        ref={videoRef}
                                        loop
                                        playsInline
                                        preload="metadata"
                                        muted={!isAudioOn}
                                        src="/assets/video/Speaks.mp4"
                                        className="h-full w-full object-cover"
                                        id=":R236bpla:"
                                        autoPlay
                                    ></video>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-end px-4 md:bottom-2 md:px-8"
                                        style={{
                                            pointerEvents: "auto",
                                            opacity: 1,
                                        }}
                                    >
                                        <div className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer"></div>
                                        <div className="pointer-events-none z-10 flex w-full items-center mb-4 justify-start gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex">
                                                    <button
                                                        onClick={handlePlayPause}
                                                        aria-label={isPlaying ? "Pause video" : "Play video"}
                                                        className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                    >
                                                        <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                            {!isPlaying ? (
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
                                                                    ></path>
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
                                                                        stroke-width="2"
                                                                    ></path>
                                                                    <path
                                                                        d="M14.75 3.75H19.25V20.25H14.75V3.75Z"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                    ></path>
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={handleAudioToggle}
                                                    aria-label={isAudioOn ? "Mute audio" : "Unmute audio"}
                                                    className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                >
                                                    <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                        {isAudioOn ? (
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="w-4"
                                                            >
                                                                <path
                                                                    d="M13 3.75003C13 3.47584 12.8504 3.22366 12.61 3.09204C12.3697 2.96055 12.0766 2.97054 11.8457 3.11823L5.7806 7.00001H1.75005C1.33573 7.00001 1 7.33576 1 7.74994V16.2499C1 16.6642 1.33573 17 1.75005 17H5.7806L11.8457 20.8816C12.0766 21.0295 12.3697 21.0395 12.61 20.9078C12.8504 20.7763 13 20.524 13 20.25V3.75003Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M18.7197 4.22156C19.0125 3.92875 19.4875 3.92875 19.7803 4.22156C21.7702 6.21133 23.0022 8.96235 23.0022 11.9997C23.0022 15.0371 21.7702 17.7881 19.7803 19.7779C19.4875 20.0708 19.0125 20.0708 18.7197 19.7779C18.4268 19.4851 18.4268 19.0101 18.7197 18.7173C20.4396 16.9973 21.5022 14.6233 21.5022 11.9997C21.5022 9.37626 20.4396 7.00229 18.7197 5.28226C18.4268 4.98931 18.4268 4.51451 18.7197 4.22156Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M16.4191 7.58289C16.1261 7.29008 15.6512 7.29008 15.3584 7.58289C15.0654 7.87584 15.0654 8.35077 15.3584 8.64359C16.2187 9.50407 16.7496 10.6905 16.7496 12.0024C16.7496 13.3143 16.2187 14.5007 15.3584 15.3612C15.0654 15.654 15.0654 16.1289 15.3584 16.4217C15.6512 16.7147 16.1261 16.7147 16.4191 16.4217C17.5492 15.2915 18.2495 13.7281 18.2495 12.0024C18.2495 10.2767 17.5492 8.71311 16.4191 7.58289Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="w-4"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M17 5.93934V3.75C17 3.47592 16.8505 3.22366 16.6101 3.09208C16.3696 2.9605 16.0766 2.97055 15.8457 3.1183L9.78055 7H5.75C5.33579 7 5 7.33579 5 7.75V16.25C5 16.6642 5.33579 17 5.75 17H5.93934L3.21967 19.7197C2.92678 20.0126 2.92678 20.4874 3.21967 20.7803C3.51256 21.0732 3.98744 21.0732 4.28033 20.7803L20.7803 4.28033C21.0732 3.98744 21.0732 3.51256 20.7803 3.21967C20.4874 2.92678 20.0126 2.92678 19.7197 3.21967L17 5.93934ZM7.43934 15.5H6.5V8.5H10C10.1433 8.5 10.2836 8.45895 10.4043 8.3817L15.5 5.12045V7.43934L7.43934 15.5Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                                <path
                                                                    d="M15.5 18.8795L11.1102 16.0701L10.0243 17.156L15.8457 20.8817C16.0766 21.0294 16.3696 21.0395 16.6101 20.9079C16.8505 20.7763 17 20.5241 17 20.25V10.1803L15.5 11.6803V18.8795Z"
                                                                    fill="currentColor"
                                                                ></path>
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
                        <div className="col-span-12 md:col-span-5 lg:col-span-3 md:col-start-8 lg:col-start-9">
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 lg:mt-1"
                                        >
                                            <path
                                                d="M18 18.5H14V21.5H7C7 18.9758 7.1347 16.9146 5.48913 14.8168C4.55625 13.6275 4 12.1287 4 10.5C4 6.63401 7.13401 3.5 11 3.5C13.8499 3.5 16.4738 4.86784 17.5555 7.63279C18.3134 9.57024 19.3382 10.7573 20.5 12.5L18 14V18.5Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="square"
                                            ></path>
                                        </svg>
                                        {
                                            ENGAGE_WITH_FASTER_BETTER_PHONE_CALLS_HEADING
                                        }
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4">
                                        {
                                            ENGAGE_AND_DELIGHT_CUSTOMERS_DESCRIPTION
                                        }
                                    </p>
                                </li>
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 lg:mt-1"
                                        >
                                            <path
                                                d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3M12 21C14.2091 21 16 16.9706 16 12C16 7.02944 14.2091 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="square"
                                            ></path>
                                        </svg>
                                        {
                                            CONNECT_TO_YOUR_CALL_CENTER_ECOSYSTEM_HEADING
                                        }
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4">
                                        {
                                            CONNECT_TO_YOUR_CALL_CENTER_ECOSYSTEM_DESCRIPTION
                                        }
                                    </p>
                                </li>
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 lg:mt-1"
                                        >
                                            <path
                                                d="M8 4.5V20.5M4 10.5V14.5M12 8.5V16.5M16 6.5V18.5M20 10.5V14.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="square"
                                            ></path>
                                        </svg>
                                        {
                                            SCALE_CONSISTENT_EXPERIENCES_ON_EVERY_CHANNEL_HEADING
                                        }
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4">
                                        {
                                            SCALE_CONSISTENT_EXPERIENCES_ON_EVERY_CHANNEL_DESCRIPTION
                                        }
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SierraSpeak;
