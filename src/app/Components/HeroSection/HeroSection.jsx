import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const HeroSection = ({ heading, subHeading, buttonText }) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [controlsOnVideo, setControlsVideo] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const pathname = usePathname();

    const handleControlOverVideo = () => {
        setControlsVideo(true);
        setIsMuted(false);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const getVideoSource = () => {
        if (pathname?.includes("Product")) {
            return windowWidth < 768
                ? "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2Fbd5219875ee27e023f68b8c4132763bc87310315.mp4"
                : "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F7e41653d24b76b90dd5d71a7dcda2cc41b054374.mp4";
        } else {
            // Assuming this is the home page
            return windowWidth < 768
                ? "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F241aead84eb6128e26b40905d3cf36d831763dce.mp4"
                : "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2Ff189003833c6b320256e3dddc9182f5caf157771.mp4";
        }
    };

    return (
        <section
            className="relative py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
            style={{
                zIndex: 1,
                backgroundColor: pathname?.includes("Product")
                    ? "#f6f5f3"
                    : "white",
            }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 md:gap-2.5 gap-4">
                    <div className="relative col-span-12 mb-10 flex justify-center md:col-span-10 md:col-start-2">
                        <div className="flex flex-col items-center text-center lg:max-w-[66.67%]">
                            <h1 className="headline mb-4 whitespace-pre-wrap text-balance text-black theme-tech:text-white lg:mb-8">
                                {heading}
                            </h1>
                            <p className="body-m md:body-l lg:title-s max-w-xl whitespace-pre-wrap text-pretty text-gray-500">
                                {subHeading}
                            </p>
                            {pathname?.includes("Product") && (
                                <div className="mt-6 flex w-full flex-wrap justify-center gap-4 md:gap-6 lg:mt-16">
                                    <a
                                        className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed bg-green-800 text-white hover:bg-transparent hover:text-green-500 border border-green-500 focus-visible:bg-transparent focus-visible:border-yellow focus-visible:text-yellow gap-12 px-4 py-3 md:px-8 md:py-4 active:bg-green-300 active:border-green-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white"
                                        href="/resources/videos/demo"
                                    >
                                        Watch demo
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="relative flex flex-col gap-4 md:gap-0">
                            <div className="relative overflow-hidden rounded-3xl md:rounded-4xl cursor-none">
                                <div
                                    className="relative"
                                    style={{ opacity: 1, height: "600px" }}
                                >
                                    <button
                                        className="group absolute z-10 h-full w-full bg-gray-100"
                                        onClick={handleControlOverVideo}
                                    >
                                        <div className="absolute bottom-9 z-10 flex w-full items-center justify-center">
                                            <div className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-green-800 p-1 outline-none transition hover:bg-white focus-visible:bg-white group-hover:bg-white w-auto">
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
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="pr-4 text-base text-white group-hover:text-green-500">
                                                    {buttonText}
                                                </span>
                                            </div>
                                        </div>
                                        <video
                                            loop
                                            autoPlay
                                            playsInline
                                            preload="metadata"
                                            muted={isMuted}
                                            controls={controlsOnVideo}
                                            src={getVideoSource()}
                                            className="h-full w-full object-cover"
                                            id=":R236bpla:"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
