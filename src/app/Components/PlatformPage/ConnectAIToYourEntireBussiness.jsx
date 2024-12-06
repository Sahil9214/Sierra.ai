"use client";
import React, { useState, useRef } from "react";
import {
    KnowledgeRetrievalSVG,
    RealTimeActionSVG,
    VideoPauseSVG,
    VideoPlaySVG,
} from "../../utils/Icons/Icons";
import { PLATFORM_VIDEO_URL } from "../../utils/Images/ImagesUrl";
const ConnectAIToYourEntireBussiness = () => {
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
            style={{ zIndex: 5 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2 className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                            Connect AI to your entire business
                        </h2>
                        <p className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6">
                            Agent OS delivers secure, real-time integrations
                            across your systems of record, from commerce
                            platforms to CRM, to your homegrown systems.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="col-span-12 mb-6 md:mb-0 md:col-span-6 lg:col-span-5 lg:col-start-2">
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl">
                            <div className="relative h-full w-full cursor-pointer">
                                <div className="relative h-full w-full">
                                    <video
                                        ref={videoRef}
                                        className="block h-full w-full pointer-events-none absolute object-cover"
                                        loop
                                        autoPlay={videoPlaying}
                                        muted
                                        playsInline
                                        preload="metadata"
                                        src={PLATFORM_VIDEO_URL}
                                        id="platformVideo"
                                    />
                                </div>
                                <p className="sr-only" id=":r4:">
                                    alt
                                </p>
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
                                                    aria-label={
                                                        videoPlaying
                                                            ? "Pause video"
                                                            : "Play video"
                                                    }
                                                    className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                >
                                                    <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                        {!videoPlaying ? (
                                                            <VideoPlaySVG />
                                                        ) : (
                                                            <VideoPauseSVG />
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
                    <div className="col-span-12 md:col-span-5 lg:col-span-3 md:col-start-8 lg:col-start-9">
                        <ul className="flex flex-col gap-6">
                            <li>
                                <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                    <KnowledgeRetrievalSVG />
                                    Knowledge retrieval
                                </h3>
                                <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500">
                                    AI agents understand when and where to
                                    locate information, from account information
                                    to order history, Q&A documents to corporate
                                    policies.
                                </p>
                            </li>
                            <li>
                                <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                    <RealTimeActionSVG />
                                    Real-time action
                                </h3>
                                <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500">
                                    AI agents can take action on behalf of your
                                    customers via secure, real-time integrations
                                    to your systems of record.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectAIToYourEntireBussiness;
