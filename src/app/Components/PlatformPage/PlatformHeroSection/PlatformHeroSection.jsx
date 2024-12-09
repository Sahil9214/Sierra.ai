/* eslint-disable prettier/prettier */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { PLATFORM_VIDEO_URL } from "../../../utils/Images/ImagesUrl";

const PlatformHeroSection = () => {
    const [videoPlaying, setVideoPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Check window width on mount
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener("resize", checkMobile);

        // Cleanup
        return () => window.removeEventListener("resize", checkMobile);
    }, [isMobile]);

    const handleVideo = () => {
        if (videoRef.current) {
            if (videoPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setVideoPlaying(!videoPlaying);
        }
    };
    console.log("*** isMobile ***", isMobile);
    return (
        <header>
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 flex flex-col items-center py-12 md:py-18">
                <div className="flex flex-col items-center text-center lg:max-w-[66.67%]">
                    <h1 className="headline mb-4 whitespace-pre-wrap text-balance text-black theme-tech:text-white lg:mb-8">
                        Get going with Agent OS, our platform for agent
                        management.
                    </h1>
                    <p className="body-m md:body-l lg:title-s max-w-xl whitespace-pre-wrap text-pretty text-gray-500">
                        In the age of conversational AI, every company needs an
                        agent.
                    </p>
                </div>
                <div className="relative mt-12 aspect-[3/4] w-full md:aspect-[16/7]">
                    <div className="overflow-hidden rounded-3xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 md:rounded-4xl cursor-pointer absolute inset-0">
                        <video
                            ref={videoRef}
                            className="block h-full w-full pointer-events-none absolute object-cover"
                            loop
                            autoPlay={videoPlaying}
                            muted
                            playsInline
                            preload="metadata"
                            src={
                                !isMobile
                                    ? "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F7e41653d24b76b90dd5d71a7dcda2cc41b054374.mp4#t=0.001"
                                    : "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2Fbd5219875ee27e023f68b8c4132763bc87310315.mp4"
                            }
                            id="platformVideo"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-end px-4 md:bottom-2 md:px-8"
                            style={{ pointerEvents: "auto", opacity: 1 }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer"></div>
                            <div className="pointer-events-none z-10 flex w-full items-center mb-4 justify-start gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        <button
                                            onClick={handleVideo}
                                            aria-label="Play video"
                                            className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                        >
                                            <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                {!videoPlaying ? (
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
                                                        ></path>
                                                        <path
                                                            d="M14.75 3.75H19.25V20.25H14.75V3.75Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                        ></path>
                                                    </svg>
                                                )}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PlatformHeroSection;
