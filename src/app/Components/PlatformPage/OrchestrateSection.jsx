"use client";
import React, { useState, useRef } from "react";
import { PLATFORM_VIDEO_URL } from "../../utils/Images/ImagesUrl";
import { VideoPauseSVG, VideoPlaySVG } from "../../utils/Icons/Icons";

const OrchestrateSection = () => {
    const [videoPlaying, setVideoPlaying] = useState(true);
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
            className="theme-platform relative py-12 text-gray-500 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
            style={{ zIndex: 4 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2 className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                            Orchestrate across multiple systems, knowledge
                            sources, and AI models
                        </h2>
                        <p className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6">
                            You define the goal. Agent OS coordinates the
                            resources needed to accomplish it.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 gap-y-8 md:gap-y-0">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl aspect-square">
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
                                <p className="sr-only" id=":r6:">
                                    technology
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
                    <div className="body-m col-span-12 pr-4 md:col-span-5 md:col-start-8">
                        <p className="my-6 first:mt-0 last:mb-0">
                            Executing complex, multi-step workflows can be
                            beyond the capabilities of even the most
                            sophisticated AI models, and often requires
                            interacting with multiple systems and sources of
                            knowledge. Agent OS orchestrates across all of these
                            seamlessly.
                        </p>
                        <p className="my-6 first:mt-0 last:mb-0">
                            Agent OS breaks down high-level goals and processes
                            into smaller steps, and coordinates access to
                            resources needed to solve a given task. Agents can
                            access knowledge and key systems as needed, and draw
                            on a constellation of AI models for planning,
                            decision making, response generation,
                            self-evaluation, and more.
                        </p>
                        <p className="my-6 first:mt-0 last:mb-0">
                            The result is an AI agent that can make contextual
                            decisions, take the appropriate action, and respond
                            with meaningful, helpful language.
                        </p>
                        <p className="my-6 first:mt-0 last:mb-0">
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrchestrateSection;
