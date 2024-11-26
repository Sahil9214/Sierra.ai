/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";

const Landing = () => {
    return (
        <div className="py-14">
            <h1 className="text-[8vw] leading-[9vw] text-center text-black headline mb-4 whitespace-pre-wrap text-balance theme-tech:text-white lg:mb-8 lg:text-[4vw] lg:leading-[4.5vw]">
                Meet Sierra.
                <br />
                Strike up a new type of
                <br />
                conversation.
            </h1>
            <p
                className="text-base text-center  lg:text-2xl
            body-m md:body-l lg:title-s  whitespace-pre-wrap text-pretty text-gray-500"
            >
                Elevate your customer experience with AI.{" "}
            </p>
            {/* Making a video setup */}
            <div className="w-[92vw] border-none  col-span-12 py-6 lg:w-[97vw] mx-auto lg:border-r border-l">
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
                                    src="/assets/video/LandingPage.mp4"
                                    className="h-full w-full object-cover"
                                    id=":R236bpla:"
                                ></video>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Trusted by leading Brands */}
            <section className="w-[85vw] mx-auto px-4 py-8 md:py-12 lg:py-16  ">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-20">
                    {/* Title */}
                    <div className="mx-auto max-w-screen-3xl px-4 lg:px-5.5                                     ">
                        <h3 className="text-lg md:text-xl lg:text-xl text-gray-600 font-medium text-left whitespace-nowrap">
                            Trusted by leading brands
                        </h3>
                    </div>

                    {/* Logo Grid */}
                    <div className="mr-7 flex flex-wrap md:flex-nowrap items-center justify-start md:justify-between gap-8 md:gap-6 lg:gap-13 w-full">
                        {/* Responsive image display for screen sizes less than 640px */}
                        <div className="flex justify-between gap-4 md:hidden">
                            {/* Sonos */}
                            <div className="w-24 md:w-32 lg:w-32 xl:w-38 h-4 md:h-6 lg:h-6 relative">
                                <Image
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    className="object-contain filter grayscale hover:grayscale-0 duration-300 
                                    block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                    src="/assets/Images/Sonas.png"
                                    alt="Sonos"
                                    fill
                                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 96px, (max-width: 1280px) 128px, 160px"
                                    priority
                                />
                            </div>

                            {/* SiriusXM */}
                            <div className="w-24 md:w-28 lg:w-36 xl:w-38 h-4 md:h-6 lg:h-6 relative">
                                <Image
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    className="object-contain filter grayscale hover:grayscale-0 duration-300 
                                    block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                    src="/assets/Images/Sirius.png"
                                    alt="SiriusXM"
                                    fill
                                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 96px, (max-width: 1280px) 144px, 176px"
                                    priority
                                />
                            </div>

                            {/* OluKai */}
                            <div className="w-24 md:w-32 lg:w-32 xl:w-38 h-4 md:h-6 lg:h-6 relative">
                                <Image
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    className="object-contain filter grayscale hover:grayscale-0 duration-300 
                                    block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                    src="/assets/Images/Olukai.png"
                                    alt="OluKai"
                                    fill
                                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 96px, (max-width: 1280px) 128px, 144px"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Full image display for screen sizes 640px and above */}
                        <div className="hidden md:flex flex-wrap gap-8 md:gap-6 lg:gap-13 w-full justify-between">
                            {/* Sonos */}
                            <div className="w-32 md:w-24 lg:w-32 xl:w-38 h-6 md:h-8 lg:h-6 relative">
                                <Image
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    className="object-contain filter grayscale hover:grayscale-0 duration-300 
                                    block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                    src="/assets/Images/Sonas.png"
                                    alt="Sonos"
                                    fill
                                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 96px, (max-width: 1280px) 128px, 160px"
                                    priority
                                />
                            </div>

                            {/* SiriusXM */}
                            <div className="w-32 md:w-28 lg:w-36 xl:w-38 h-6 md:h-8 lg:h-6 relative">
                                <Image
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    className="object-contain filter grayscale hover:grayscale-0 duration-300 
                                    block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                    src="/assets/Images/Sirius.png"
                                    alt="SiriusXM"
                                    fill
                                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 112px, (max-width: 1280px) 144px, 176px"
                                    priority
                                />
                            </div>

                            {/* OluKai */}
                            <div className="w-28 md:w-24 lg:w-32 xl:w-38 h-6 md:h-8 lg:h-6 relative">
                                <Image
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    className="object-contain filter grayscale hover:grayscale-0 duration-300 
                                    block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                    src="/assets/Images/Olukai.png"
                                    alt="OluKai"
                                    fill
                                    sizes="(max-width: 768px) 112px, (max-width: 1024px) 96px, (max-width: 1280px) 128px, 144px"
                                    priority
                                />
                            </div>

                            {/* Casper */}
                            <div className="w-24 md:w-20 lg:w-28 xl:w-38 h-6 md:h-8 lg:h-6 relative">
                                <Image
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    className="object-contain filter grayscale hover:grayscale-0 duration-300 
                                    block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                    src="/assets/Images/Casper.png"
                                    alt="Casper"
                                    fill
                                    sizes="(max-width: 768px) 96px, (max-width: 1024px) 80px, (max-width: 1280px) 112px, 128px"
                                    priority
                                />
                            </div>

                            {/* Weight Watchers */}
                            <div className="w-34 md:w-28 lg:w-36 xl:w-38 h-6 md:h-8 lg:h-10 relative ">
                                <Image
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    className="object-contain filter grayscale hover:grayscale-0 duration-300 
                                    block filter-gray-250 theme-tech:filter-gray-100 group-hover:filter-gray-300 group-active:filter-gray-400 h-full w-auto object-center transition-[filter]"
                                    src="/assets/Images/WeightWatcher.png"
                                    alt="Weight Watchers"
                                    fill
                                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 144px, (max-width: 1780px) 200px, 240px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className=" theme-base relative bg-white py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:pt-18"
                style={{ zIndex: "6" }}
            >
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                        <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                            <h2 className="text-[6.5vw] text-pretty pr-4 text-black theme-tech:text-white md:pr-0 lg:text-[2.8vw]">
                                Transform your customer experience{" "}
                            </h2>
                            <p className="body-m mt-2 text-pretty pr-4 text-gray-400 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6 lg:text-[1.2vw]">
                                Enable your customers to get answers, solve
                                problems, and take action through a natural,
                                conversational experience.
                            </p>
                            <a
                                className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border border-gray-300 text-gray-400 group-hover:border-green-500 hover:border-green-500 hover:text-green-500 group-hover:text-green-500 focus-visible:border-yellow active:border-green-300 active:text-green-300 gap-6 py-3 md:py-2 theme-tech:text-white theme-tech:border-white theme-tech:hover:text-gray-200 theme-platform:border-gray-300 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:hover:border-gray-200 theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4 mt-4 lg:mt-6"
                                href="/product"
                            >
                                Our product
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
                                <div className="cursor-pointer absolute inset-0">
                                    <video
                                        className="block h-full w-full pointer-events-none absolute object-cover"
                                        loop
                                        autoPlay
                                        playsInline
                                        preload="metadata"
                                        // controls
                                        muted
                                        src="/assets/video/TrasnformCustomer.mp4"
                                        id=":R676bpla:"
                                    ></video>

                                    <div
                                        className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-end px-4 md:bottom-2 md:px-8"
                                        style={{
                                            pointerEvents: "auto",
                                            opacity: "1",
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
                                            <div className="flex items-center gap-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 lg:col-span-3 md:col-start-8 lg:col-start-9">
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 lg:text-[1.2vw]">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 lg:mt-1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17.7929 2.29295C18.1834 1.90243 18.8166 1.90243 19.2071 2.29295L21.7071 4.79295C22.0976 5.18348 22.0976 5.81664 21.7071 6.20717L6.20711 21.7072C5.81658 22.0977 5.18342 22.0977 4.79289 21.7072L2.29289 19.2072C1.90237 18.8166 1.90237 18.1835 2.29289 17.793L17.7929 2.29295ZM16.1642 6.75006L17.25 7.83585L19.5858 5.50006L18.5 4.41428L16.1642 6.75006ZM15.8358 9.25006L14.75 8.16427L4.41421 18.5001L5.5 19.5858L15.8358 9.25006Z"
                                                fill="currentColor"
                                            ></path>
                                            <path
                                                d="M9.92504 2.03733C9.97342 2.01314 10.0127 1.97391 10.0368 1.92553L10.776 0.447279C10.8681 0.263016 11.1311 0.263017 11.2232 0.447279L11.9623 1.92553C11.9865 1.97391 12.0257 2.01314 12.0741 2.03733L13.5524 2.77646C13.7366 2.86859 13.7366 3.13154 13.5524 3.22367L12.0741 3.9628C12.0257 3.98699 11.9865 4.02622 11.9623 4.0746L11.2232 5.55285C11.1311 5.73711 10.8681 5.73711 10.776 5.55285L10.0368 4.0746C10.0127 4.02622 9.97342 3.98699 9.92504 3.9628L8.44679 3.22367C8.26253 3.13154 8.26253 2.86859 8.44679 2.77646L9.92504 2.03733Z"
                                                fill="currentColor"
                                            ></path>
                                            <path
                                                d="M18.925 13.0373C18.9734 13.0131 19.0127 12.9739 19.0368 12.9255L19.776 11.4473C19.8681 11.263 20.1311 11.263 20.2232 11.4473L20.9623 12.9255C20.9865 12.9739 21.0257 13.0131 21.0741 13.0373L22.5524 13.7765C22.7366 13.8686 22.7366 14.1315 22.5524 14.2237L21.0741 14.9628C21.0257 14.987 20.9865 15.0262 20.9623 15.0746L20.2232 16.5529C20.1311 16.7371 19.8681 16.7371 19.776 16.5529L19.0368 15.0746C19.0127 15.0262 18.9734 14.987 18.925 14.9628L17.4468 14.2237C17.2625 14.1315 17.2625 13.8686 17.4468 13.7765L18.925 13.0373Z"
                                                fill="currentColor"
                                            ></path>
                                            <path
                                                d="M4.92504 7.03733C4.97342 7.01314 5.01265 6.97391 5.03684 6.92553L5.77597 5.44728C5.8681 5.26302 6.13105 5.26302 6.22318 5.44728L6.96231 6.92553C6.9865 6.97391 7.02573 7.01314 7.07411 7.03733L8.55236 7.77646C8.73663 7.86859 8.73663 8.13154 8.55236 8.22367L7.07411 8.9628C7.02573 8.98699 6.9865 9.02622 6.96231 9.0746L6.22318 10.5529C6.13105 10.7371 5.8681 10.7371 5.77597 10.5529L5.03684 9.0746C5.01265 9.02622 4.97342 8.98699 4.92504 8.9628L3.44679 8.22367C3.26253 8.13154 3.26253 7.86859 3.44679 7.77646L4.92504 7.03733Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        Engage and delight customers
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 lg:text-[1.1vw]">
                                        Deploy an AI agent that is always
                                        available, empathetic, and aligned to
                                        your brand tone and voice.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0  lg:text-[1.2vw]">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 lg:mt-1"
                                        >
                                            <path
                                                d="M16 7H21V12M20.5 7.5L13 15L9 11L3 17"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        Support your customers in real-time
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 lg:text-[1.1vw]">
                                        Help customers with even their most
                                        complex issues, whether making an
                                        exchange or updating a subscription.{" "}
                                    </p>
                                </li>
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 lg:text-[1.2vw]">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 lg:mt-1"
                                        >
                                            <path
                                                d="M16 21.5L15.1429 18.5M8 21.5L8.85714 18.5M8 13V14M12 8V14M16 11V14M21 4V18H15H9H3V4H21Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        Adapt and get better, faster
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 lg:text-[1.1vw]">
                                        Respond swiftly to changes in your
                                        business, and harness analytics and
                                        reporting to continuously improve the
                                        customer experience.{" "}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-screen-3xl px-4 mt-28 lg:px-2.5 ">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                            <article className="grid w-full grid-cols-12 gap-y-6 lg:grid-cols-10 gap-2 md:gap-2.5">
                                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                                    <figure>
                                        <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-3xl md:mb-12 ">
                                            <img
                                                alt="Headshot of Maureen Martin"
                                                loading="lazy"
                                                decoding="async"
                                                data-nimg="fill"
                                                className="block h-auto w-full object-cover bg-gray-300"
                                                style={{
                                                    position: "absolute",
                                                    height: "100%",
                                                    width: "100%",
                                                    left: 0,
                                                    top: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    color: "transparent",
                                                }}
                                                sizes="(min-width: 769px) 20vw, 100vw"
                                                srcSet="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=128&amp;quality=90 128w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=256&amp;quality=90 256w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=384&amp;quality=90 384w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=640&amp;quality=90 640w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=750&amp;quality=90 750w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=828&amp;quality=90 828w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=1080&amp;quality=90 1080w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=1200&amp;quality=90 1200w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=1920&amp;quality=90 1920w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=2048&amp;quality=90 2048w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=3840&amp;quality=90 3840w"
                                                src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=3840&amp;quality=90"
                                            />
                                        </div>
                                        <figcaption className="flex flex-col text-gray-600">
                                            <span className="body-l inline-block font-medium">
                                                Maureen Martin
                                            </span>
                                            <span className="body-s inline-block">
                                                VP of Customer Care,
                                                WeightWatchers
                                            </span>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col-span-12 flex flex-col gap-9 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-5">
                                    <div className="relative hidden h-5 md:block lg:h-6">
                                        <img
                                            style={{
                                                filter: "var(--filter-gray-250)",
                                            }}
                                            alt="WeightWatchers Logo"
                                            loading="lazy"
                                            width="1820"
                                            height="240"
                                            decoding="async"
                                            data-nimg="1"
                                            className="block filter-gray-250 h-full w-auto"
                                            sizes="(min-width: 1025px) 10vw, 20vw"
                                            srcSet="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=64&amp;quality=90 64w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=96&amp;quality=90 96w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=128&amp;quality=90 128w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=256&amp;quality=90 256w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=384&amp;quality=90 384w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=640&amp;quality=90 640w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=750&amp;quality=90 750w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=828&amp;quality=90 828w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=1080&amp;quality=90 1080w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=1200&amp;quality=90 1200w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=1920&amp;quality=90 1920w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=2048&amp;quality=90 2048w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=3840&amp;quality=90 3840w"
                                            src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=3840&amp;quality=90"
                                        />
                                    </div>
                                    <blockquote className="title-m relative grow text-black before:absolute before:-left-2.5 before:content-['“'] theme-tech:text-white before:md:-left-3 before:lg:-left-4 pr-4 md:pr-0 lg:text-[2.5vw]">
                                        <span className="sr-only">“</span>I knew
                                        the AI agent would answer questions
                                        quickly, but I didn’t expect the
                                        responses to be so genuine and
                                        empathetic.
                                        <span>”</span>
                                    </blockquote>
                                    <div>
                                        <a
                                            className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border border-gray-300 text-gray-400 group-hover:border-green-500 hover:border-green-500 hover:text-green-500 group-hover:text-green-500 focus-visible:border-yellow active:border-green-300 active:text-green-300 gap-6 py-3 md:py-2 theme-tech:text-white theme-tech:border-white theme-tech:hover:text-gray-200 theme-platform:border-gray-300 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:hover:border-gray-200 theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4 md:px-4 lg:px-4"
                                            aria-label="Read more about How WeightWatchers embraces AI to engage members with empathy, at scale, with Sierra."
                                            href="/customers/weightwatchers"
                                        >
                                            Read more
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
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
