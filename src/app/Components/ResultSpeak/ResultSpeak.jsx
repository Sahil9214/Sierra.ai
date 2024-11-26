/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image"; // Import Next.js Image component

const ResultsSpeak = () => {
    return (
        <section>
            <div className="w-full lg:w-[85vw]  mx-auto py-12 px-4">
                <h2 className="text-[7vw] title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0 lg:text-[2.8vw]">
                    The results speak for themselves
                </h2>
                <p className="text-[4.5vw] body-m mt-2 text-pretty pr-4 text-gray-400 theme-tech:text-gray-100 md:max-w-[60%] md:pr-0 lg:mt-6 lg:text-[1.2vw] ">
                    Sierra is trusted by leading consumer brands with millions
                    of customers across a wide range of industries.
                </p>
                <a
                    className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border border-gray-300 text-gray-400 group-hover:border-green-500 hover:border-green-500 hover:text-green-500 group-hover:text-green-500 focus-visible:border-yellow active:border-green-300 active:text-green-300 gap-6 py-3 md:py-2 theme-tech:text-white theme-tech:border-white theme-tech:hover:text-gray-200 theme-platform:border-gray-300 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:hover:border-gray-200 theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4 mt-4 lg:mt-6"
                    href="/customers"
                >
                    Our customers
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
            <CaseStudy />
        </section>
    );
};

export default ResultsSpeak;

const CaseStudy = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[95vw] mx-auto mt-12">
            <div className="bg-gray-200 shadow-md rounded-2xl relative h-[95vw] sm:h-[30vw] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
                <h2 className="absolute top-4 left-4 text-xl font-bold text-white z-20">
                    SONOS
                </h2>
                <Image
                    src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdba5c52459dc3a6bfb382357e0efb6b77dd9a09c-8000x6000.jpg&width=1920&quality=90"
                    alt="Sonos Image"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="text-white font-semibold">
                        Customers: 15 Million
                    </p>
                    <p className="mt-2 text-gray-200">
                        How Sonos elevates the listener experience with Sierra.
                    </p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-2xl shadow-md relative h-[95vw] sm:h-[30vw] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
                <h2 className="absolute top-4 left-4 text-xl font-bold text-white z-20">
                    SiriusXM
                </h2>
                <Image
                    src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fd1a565cb2dbd2ca2e8b147b94075a47c2102b924-5333x3000.jpg&width=1920&quality=90"
                    alt="SiriusXM Image"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="text-white font-semibold">
                        Subscribers: 34 Million
                    </p>
                    <p className="mt-2 text-gray-200">
                        How SiriusXM drives listener loyalty with Sierra.
                    </p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-2xl shadow-md relative h-[95vw] sm:h-[30vw] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
                <h2 className="absolute top-4 left-4 text-xl font-bold text-white z-20">
                    Casper
                </h2>
                <Image
                    src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fc4191feb1b2d21a0121a36f9d523d67fc3854d4e-9504x6336.jpg&width=1920&quality=90"
                    alt="Casper Image"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="flex gap-4">
                        <p className="text-white font-semibold">
                            Resolution Rate: 74%
                        </p>
                        <p className="text-white font-semibold">
                            Increase in CSAT: &gt;20%
                        </p>
                    </div>
                    <p className="mt-2 text-gray-200">
                        How Casper turns a big purchase into a lifelong
                        relationship with AI.
                    </p>
                </div>
            </div>
        </div>
    );
};
