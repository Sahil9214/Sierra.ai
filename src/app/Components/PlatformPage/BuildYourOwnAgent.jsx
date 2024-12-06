"use client";
import React, { useEffect, useState, useRef } from "react";
import {
    AGENT_DESCRIPTION,
    AGENT_FEATURES,
    BUILD_YOUR_OWN_AGENT_HEADING,
    BUILD_YOUR_OWN_AGENT_DESCRIPTION,
} from "../../utils/Constant";
import { VideoPauseSVG, VideoPlaySVG } from "../../utils/Icons/Icons";

const BuildYourOwnAgent = () => {
    const [videoPlaying, setVideoPlaying] = useState(false);
    const videoRef = useRef(null);
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
    return (
        <section
            className="theme-platform relative py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
            style={{ zIndex: 8 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2 className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                            {BUILD_YOUR_OWN_AGENT_HEADING}
                        </h2>
                        <p className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6">
                            {BUILD_YOUR_OWN_AGENT_DESCRIPTION}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 gap-y-8 md:gap-y-0">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl aspect-square  theme-tech:border-gray-600 theme-platform:border-gray-200">
                            <div className="relative h-full w-full cursor-pointer">
                                <div className="relative h-full w-full border-2 border-gray-300">
                                    <video
                                        className="block h-full w-full pointer-events-none absolute object-cover"
                                        ref={videoRef}
                                        loop
                                        autoPlay
                                        playsInline
                                        preload="metadata"
                                        src="https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2Fc258b1b7ae10b506dfcb62c91796d19b30bc6c32.mp4"
                                        id=":R676bpla:"
                                    ></video>
                                </div>
                                {/* <p className="sr-only text-gray-500" id=":r1n:">
                                    Product mock up customizing skills,
                                    knowledge, and personality combination to
                                    create a custom AI agent
                                </p> */}
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
                                                    onClick={handleVideo}
                                                    aria-label="Play video"
                                                    className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                >
                                                    <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                        {videoPlaying ? (
                                                            <VideoPauseSVG />
                                                        ) : (
                                                            <VideoPlaySVG />
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
                    <div className="body-m col-span-12 pr-4 md:col-span-5 md:col-start-8">
                        <p className="my-6 first:mt-0 last:mb-0 text-gray-500">
                            {AGENT_DESCRIPTION}
                        </p>
                        <ul className="my-6 flex list-disc flex-col gap-1 pl-6 first:pt-0 last:pb-0 lg:gap-2">
                            {AGENT_FEATURES.map((feature, index) => (
                                <li className="text-gray-500" key={index}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildYourOwnAgent;
