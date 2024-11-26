/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useRef, useState } from "react";

const SierraSpeak = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

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

    return (
        <div
            ref={ref}
            className={`transition-opacity ${isVisible ? "fade-in" : "opacity-0"}`}
        >
            <section
                className="  h-full py-8 theme-product relative  theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
                style={{
                    zIndex: 4,
                    backgroundColor: "#e7e6e4",
                }}
            >
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                        <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                            <h2 className="text-[7vw] title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0 lg:text-[2.8vw]">
                                Sierra speaks
                            </h2>
                            <p className="text-[4.5vw] body-m mt-2 text-pretty pr-4 text-gray-400 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6 lg:text-[1.17vw]">
                                Introducing voice, a new way to communicate with
                                your customers using conversational AI.
                            </p>
                            <a
                                className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border border-gray-300 text-gray-400 group-hover:border-green-500 hover:border-green-500 hover:text-green-500 group-hover:text-green-500 focus-visible:border-yellow active:border-green-300 active:text-green-300 gap-6 py-3 md:py-2 theme-tech:text-white theme-tech:border-white theme-tech:hover:text-gray-200 theme-platform:border-gray-300 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:hover:border-gray-200 theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4 mt-4 lg:mt-6"
                                href="/voice"
                            >
                                Learn more
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="rotate-90 h-5 w-5"
                                >
                                    <path
                                        d="M6 10L12 4L18 10M12 5V20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                        <div className="col-span-12 mb-6 md:mb-0 md:col-span-6 lg:col-span-5 lg:col-start-2">
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl">
                                <div className="bg-white cursor-pointer absolute inset-0">
                                    <video
                                        loop
                                        autoPlay
                                        playsInline
                                        preload="metadata"
                                        // controls
                                        muted
                                        src="/assets/video/Speaks.mp4"
                                        className="h-full w-full object-cover"
                                        id=":R236bpla:"
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
                                                        aria-label="Pause video"
                                                        className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                    >
                                                        <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
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
                                                                ></path>
                                                                <path
                                                                    d="M14.75 3.75H19.25V20.25H14.75V3.75Z"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    aria-label="Mute audio"
                                                    className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                >
                                                    <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-4"
                                                        >
                                                            <path
                                                                d="M13 3.75003C13 3.47584 12.8504 3.22366 12.61 3.09204C12.3697 2.96055 12.0766 2.97054 11.8457 3.11823L5.7806 7.00001H1.75005C1.33573 7.00001 1 7.33576 1 7.74994V16.2499C1 16.6642 1.33573 17 1.75005 17H5.7806L11.8457 20.8816C12.0766 21.0295 12.3697 21.0395 12.61 20.9078C12.8504 20.7763 13 20.524 13 20.25V3.75003Z"
                                                                fill="currentColor"
                                                            ></path>
                                                            <path
                                                                d="M18.7197 4.22156C19.0125 3.92875 19.4875 3.92875 19.7803 4.22156C21.7702 6.21133 23.0022 8.96235 23.0022 11.9997C23.0022 15.0371 21.7702 17.7881 19.7803 19.7779C19.4875 20.0708 19.0125 20.0708 18.7197 19.7779C18.4268 19.4851 18.4268 19.0101 18.7197 18.7173C20.4396 16.9973 21.5022 14.6233 21.5022 11.9997C21.5022 9.37626 20.4396 7.00229 18.7197 5.28226C18.4268 4.98931 18.4268 4.51451 18.7197 4.22156Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
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
                                    <h3 className="text-[4.5vw] body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 lg:text-[1.35vw]">
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
                                        Engage with faster, better phone calls
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 text-[1] text-gray-400">
                                        Your agent delivers delightful and
                                        personalized conversations. Always
                                        available, endlessly patient, and able
                                        to reason, predict, and act in
                                        real-time.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-[4.5vw]   body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 lg:text-[1.35vw]">
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
                                        Connect to your call center ecosystem
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 text-[1] text-gray-400">
                                        Seamlessly integrate with your existing
                                        technology stack, with comprehensive
                                        summaries and intelligent routing when
                                        escalation is required.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-[4.5vw] body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 lg:text-[1.35vw]">
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
                                        Scale consistent experiences on every
                                        channel
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 text-[1] text-gray-400">
                                        Use Agent OS to build once and run
                                        everywhere, with a
                                        continuously-improving, trusted AI agent
                                        tailored to your brand, goals, and
                                        processes.
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
