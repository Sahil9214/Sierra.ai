/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className="flex flex-col items-center text-center lg:max-w-[66.67%] mx-auto">
                <h1 className="text-headline-sm md:text-headline-md lg:text-headline-lg text-black mb-4 whitespace-pre-wrap text-balance text-center">
                    Meet Sierra.
                    <br />
                    Strike up a new type of
                    {windowWidth > 640 && windowWidth < 1024 ? (
                        ""
                    ) : (
                        <br />
                    )}{" "}
                    conversation.
                </h1>
                <p className="body-m md:body-l lg:title-s max-w-xl whitespace-pre-wrap text-pretty text-gray-600">
                    Elevate your customer experience with AI.{" "}
                </p>
            </div>
            {/* Making a video setup */}
            <div className="w-[92vw] border-none  col-span-12  pt-14 lg:w-[97vw] mx-auto lg:border-r border-l">
                <div className="relative flex flex-col gap-4 md:gap-0">
                    <div className="relative overflow-hidden rounded-3xl md:rounded-4xl cursor-none">
                        <div
                            className="relative"
                            style={{ opacity: 1, height: "600px" }}
                        >
                            <button className="group absolute z-10 h-full w-full bg-gray-100">
                                <div className="absolute bottom-9 z-10 flex w-full items-center justify-center">
                                    <div className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-green-500 p-1 outline-none transition hover:bg-white focus-visible:bg-white group-hover:bg-white w-auto">
                                        <span className="h-12 w-12 rounded-full border border-white p-4 text-white transition group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="-mt-[0.05rem] h-auto w-4"
                                            >
                                                <path
                                                    d="M21 12L6 3V21L21 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span className="pr-4 text-base text-white group-hover:text-green-500">
                                            Watch Video
                                        </span>
                                    </div>
                                </div>
                                <video
                                    loop
                                    autoPlay
                                    playsInline
                                    preload="metadata"
                                    // controls
                                    muted
                                    src={
                                        window.innerWidth < 768
                                            ? "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F241aead84eb6128e26b40905d3cf36d831763dce.mp4"
                                            : "/assets/video/LandingPage.mp4"
                                    }
                                    className="h-full w-full object-cover "
                                    id=":R236bpla:"
                                ></video>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
