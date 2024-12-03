/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";

const TransformYourCustomerExperince = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section
            className={`slide-in theme-base relative
                
                ${windowWidth > 768 ? "py-12" : "py-4"}
                
                bg-white  text-gray-500 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:pt-18`}
            style={{ zIndex: "6" }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2
                            className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0"
                            // className="text-[7.2vw] text-pretty pr-4 text-black theme-tech:text-white md:pr-0 lg:text-[2.8vw]"
                        >
                            Transform your customer experience{" "}
                        </h2>
                        <p
                            className="body-m mt-2 text-pretty pr-4 text-gray-400 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6"
                            //className="body-m mt-2 text-pretty pr-4 text-gray-600 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6 lg:text-[1.2vw]"
                        >
                            Enable your customers to get answers, solve
                            problems, and take action through a natural,
                            conversational experience.
                        </p>

                        <Button name="Our product" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 ">
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
                                    //  src="/assets/video/TrasnformCustomer.mp4"
                                    src="https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2Fc258b1b7ae10b506dfcb62c91796d19b30bc6c32.mp4"
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
                    <div className="col-span-12 md:col-span-5 lg:col-span-3 md:col-start-8 lg:col-start-9 ">
                        <ul className="flex flex-col gap-6">
                            <li>
                                <h3
                                    //className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0"
                                    className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 sm:text-[2.2vw] lg:text-[1.2vw]"
                                >
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
                                <p
                                    className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-600"

                                    //className="body-s text-sm pr-4 md:pr-0 lg:pb-4 lg:text-[1.1vw] text-gray-600"
                                >
                                    Deploy an AI agent that is always available,
                                    empathetic, and aligned to your brand tone
                                    and voice.
                                </p>
                            </li>
                            <li>
                                <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 sm:text-[2.2vw] lg:text-[1.2vw]">
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
                                <p
                                    className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-600"
                                    //className="body-s text-sm pr-4 md:pr-0 lg:pb-4 lg:text-[1.1vw] text-gray-600"
                                >
                                    Help customers with even their most complex
                                    issues, whether making an exchange or
                                    updating a subscription.{" "}
                                </p>
                            </li>
                            <li>
                                <h3
                                    // className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0"
                                    className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0 sm:text-[2.2vw] lg:text-[1.2vw]"
                                >
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
                                <p
                                    className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-600"
                                    //className="body-s text-sm pr-4 md:pr-0 lg:pb-4 lg:text-[1.1vw] text-gray-600"
                                >
                                    Respond swiftly to changes in your business,
                                    and harness analytics and reporting to
                                    continuously improve the customer
                                    experience.{" "}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformYourCustomerExperince;
