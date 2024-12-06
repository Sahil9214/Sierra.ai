/* eslint-disable prettier/prettier */
"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "../../Buttons/Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
    ADAPT_TO_ANY_INQUIRY_DESCRIPTION,
    ADAPT_TO_ANY_INQUIRY_HEADING,
    DELIVER_EMPATHETIC_SUPPORT_DESCRIPTION,
    DELIVER_EMPATHETIC_SUPPORT_HEADING,
    INTUITIVE_AND_AUTHENTIC_CONVERSATIONS_DESCRIPTION,
    INTUITIVE_AND_AUTHENTIC_CONVERSATIONS_HEADING,
    RESPOND_IN_ANY_LANGUAGE_HEADING,
    RESPOND_IN_ANY_LANGUAGE_DESCRIPTION,
    NO_MORE_MENUS_HEADING,
    NO_MORE_MENUS_DESCRIPTION,
} from "../../../utils/Constant";
const IntuitiveAndAuthentic = () => {
    const [openTab, setOpenTab] = useState("groundAI");
    const [videomute, setVideomute] = useState(false);
    const ref = useRef(null);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleTab = (tabKey) => {
        setOpenTab((prev) => (prev === tabKey ? prev : tabKey));
    };
    const handleMakeOwnVideoMutedOrNot = () => {
        setVideomute(!videomute);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!titleRef.current || !textRef.current || !buttonRef.current) return;

        const elements = [
            titleRef.current,
            textRef.current,
            buttonRef.current,
        ].filter(Boolean);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.set(elements, { opacity: 0, y: -100 });

        tl.to(elements, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={ref} className="transition-opacity">
            <div>
                <section
                    className="theme-platform relative py-12 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
                    style={{
                        zIndex: 4,
                        backgroundColor: "#f6f5f3",
                    }}
                >
                    <div style={{ opacity: 1, transform: "none" }}>
                        <div className="mx-auto max-w-screen-3xl px-4 lg:px-0">
                            <div
                                ref={sectionRef}
                                className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18"
                            >
                                <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                                    <h2
                                        ref={titleRef}
                                        // className="text-[7vw] title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0 lg:text-[2.8vw]"
                                        className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0"
                                    >
                                        {
                                            INTUITIVE_AND_AUTHENTIC_CONVERSATIONS_HEADING
                                        }
                                    </h2>
                                    <p
                                        ref={textRef}
                                        //className="text-[4.5vw] body-m mt-2 text-pretty pr-4 text-gray-600 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6 lg:text-[1.17vw]"
                                        className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6"
                                    >
                                        {
                                            INTUITIVE_AND_AUTHENTIC_CONVERSATIONS_DESCRIPTION
                                        }
                                    </p>
                                    {/* <Button name={"Our platform"} /> */}
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                                <div className="relative col-span-12 row-start-2 md:col-span-5 md:col-start-1 md:row-start-1 lg:col-span-3 lg:col-start-2">
                                    <div
                                        className="absolute top-0 w-full overflow-hidden rounded-2xl bg-gray-100 theme-tech:bg-gray-700 theme-product:bg-white"
                                        style={{
                                            height: "auto",
                                            transform: "none",
                                        }}
                                    ></div>
                                    <div
                                        id="react-aria-:Rjad6bpla:"
                                        role="tablist"
                                        aria-orientation="horizontal"
                                        className="relative flex flex-col gap-0.5"
                                    >
                                        {/* Ground Your AI Agent Tab */}
                                        <div
                                            tabIndex="0"
                                            data-key="84517070a64a"
                                            id="react-aria-:Rjad6bpla:-tab-84517070a64a"
                                            aria-selected={
                                                openTab === "groundAI"
                                            }
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden outline-none transition-[background-color] ${openTab === "groundAI" ? "bg-white rounded-3xl" : "hover:bg-white"}`}
                                            style={{
                                                backgroundColor:
                                                    openTab === "groundAI"
                                                        ? "white"
                                                        : "#f6f5f3",
                                            }}
                                            onClick={() =>
                                                toggleTab("groundAI")
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-black theme-tech:text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M21.5 12C21.5 7 17.8056 4 12 4C6.19444 4 2.5 7 2.5 12C2.5 13.2943 3.39422 15.4896 3.53656 15.8309C3.54957 15.862 3.56246 15.8905 3.57409 15.9222C3.67156 16.188 4.06312 17.5822 2.5 19.6439C4.61111 20.6439 6.8531 19 6.8531 19C8.40425 19.8154 10.2499 20 12 20C17.8056 20 21.5 17 21.5 12Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="square"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M6.625 12C6.625 12.4832 7.01675 12.875 7.5 12.875C7.98325 12.875 8.375 12.4832 8.375 12C8.375 11.5168 7.98325 11.125 7.5 11.125C7.01675 11.125 6.625 11.5168 6.625 12ZM11.125 12C11.125 12.4832 11.5168 12.875 12 12.875C12.4832 12.875 12.875 12.4832 12.875 12C12.875 11.5168 12.4832 11.125 12 11.125C11.5168 11.125 11.125 11.5168 11.125 12ZM15.625 12C15.625 12.4832 16.0168 12.875 16.5 12.875C16.9832 12.875 17.375 12.4832 17.375 12C17.375 11.5168 16.9832 11.125 16.5 11.125C16.0168 11.125 15.625 11.5168 15.625 12Z"
                                                            fill="currentColor"
                                                            stroke="currentColor"
                                                            strokeWidth="0.75"
                                                            strokeLinecap="square"
                                                        ></path>
                                                    </svg>

                                                    {
                                                        DELIVER_EMPATHETIC_SUPPORT_HEADING
                                                    }
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openTab === "groundAI"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openTab === "groundAI"
                                                            ? 1
                                                            : 0,
                                                    transform:
                                                        openTab === "groundAI"
                                                            ? "translateY(0)"
                                                            : "translateY(-20px)",
                                                    transitionDelay:
                                                        openTab === "groundAI"
                                                            ? "0.1s"
                                                            : "0s",
                                                }}
                                            >
                                                <div>
                                                    <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                        {
                                                            DELIVER_EMPATHETIC_SUPPORT_DESCRIPTION
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Solve Problems the Right Way Tab */}
                                        <div
                                            tabIndex="-1"
                                            data-key="solveProblems"
                                            id="react-aria-:Rjad6bpla:-tab-solveProblems"
                                            aria-selected={
                                                openTab === "solveProblems"
                                            }
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden outline-none transition-[background-color] ${openTab === "solveProblems" ? " rounded-3xl" : "hover:bg-white"}`}
                                            style={{
                                                backgroundColor:
                                                    openTab === "solveProblems"
                                                        ? "white"
                                                        : "#f6f5f3",
                                            }}
                                            onClick={() =>
                                                toggleTab("solveProblems")
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-black theme-tech:text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M3 11L5 14L8 9L13 20L18 4L21 10"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                    {
                                                        ADAPT_TO_ANY_INQUIRY_HEADING
                                                    }
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openTab ===
                                                        "solveProblems"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openTab ===
                                                        "solveProblems"
                                                            ? 1
                                                            : 0,
                                                    transform:
                                                        openTab ===
                                                        "solveProblems"
                                                            ? "translateY(0)"
                                                            : "translateY(-20px)",
                                                    transitionDelay:
                                                        openTab ===
                                                        "solveProblems"
                                                            ? "0.1s"
                                                            : "0s",
                                                }}
                                            >
                                                <div>
                                                    <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                        {
                                                            ADAPT_TO_ANY_INQUIRY_DESCRIPTION
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Take Action on Your Systems Tab */}
                                        <div
                                            tabIndex="-1"
                                            data-key="0542939c6a4a"
                                            id="react-aria-:Rjad6bpla:-tab-0542939c6a4a"
                                            aria-selected={
                                                openTab === "takeAction"
                                            }
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden outline-none
                                         transition-[background-color] ${openTab === "takeAction" ? "bg-white rounded-3xl" : "hover:bg-white"}`}
                                            style={{
                                                backgroundColor:
                                                    openTab === "takeAction"
                                                        ? "white"
                                                        : "#f6f5f3",
                                            }}
                                            onClick={() =>
                                                toggleTab("takeAction")
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-black theme-tech:text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M14.9218 16.8649V17.8649C15.3005 17.8649 15.6468 17.6509 15.8162 17.3121L14.9218 16.8649ZM15.8947 14.9189L16.7892 15.3662C17.0141 14.9163 16.8699 14.3694 16.4525 14.0889L15.8947 14.9189ZM13.0264 12.9915L13.5842 12.1615C13.4372 12.0627 13.2668 12.0048 13.0901 11.9935L13.0264 12.9915ZM11.1359 12.8708L11.1996 11.8729C10.9135 11.8546 10.6332 11.9601 10.4301 12.1624L11.1359 12.8708ZM10.0569 13.946L9.35108 13.2376C9.01292 13.5745 8.96006 14.1035 9.22485 14.5007L10.0569 13.946ZM12.0029 16.8649L11.1708 17.4196C11.3563 17.6978 11.6685 17.8649 12.0029 17.8649V16.8649ZM4.77184 7.27033C4.33013 6.9388 3.7033 7.02812 3.37177 7.46983C3.04024 7.91154 3.12956 8.53837 3.57127 8.8699L4.77184 7.27033ZM8.11113 11.027L7.51084 11.8268C7.74763 12.0045 8.05099 12.0681 8.33924 12.0006C8.6275 11.9331 8.87101 11.7413 9.00421 11.4769L8.11113 11.027ZM9.08896 9.0859L8.845 8.11611C8.56341 8.18695 8.32652 8.37668 8.19588 8.636L9.08896 9.0859ZM12.976 8.10806L13.22 9.07784C13.5776 8.98788 13.8567 8.70839 13.9461 8.35064L12.976 8.10806ZM15.0962 3.7514C15.2302 3.21561 14.9044 2.67266 14.3686 2.53869C13.8328 2.40471 13.2899 2.73044 13.1559 3.26623L15.0962 3.7514ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM15.8162 17.3121L16.7892 15.3662L15.0003 14.4717L14.0273 16.4177L15.8162 17.3121ZM16.4525 14.0889L13.5842 12.1615L12.4687 13.8215L15.337 15.7489L16.4525 14.0889ZM13.0901 11.9935L11.1996 11.8729L11.0722 13.8688L12.9627 13.9894L13.0901 11.9935ZM10.4301 12.1624L9.35108 13.2376L10.7627 14.6543L11.8418 13.5792L10.4301 12.1624ZM9.22485 14.5007L11.1708 17.4196L12.8349 16.3102L10.889 13.3913L9.22485 14.5007ZM12.0029 17.8649H14.9218V15.8649H12.0029V17.8649ZM3.57127 8.8699L7.51084 11.8268L8.71141 10.2272L4.77184 7.27033L3.57127 8.8699ZM9.00421 11.4769L9.98204 9.53579L8.19588 8.636L7.21805 10.5771L9.00421 11.4769ZM9.33293 10.0557L13.22 9.07784L12.732 7.13827L8.845 8.11611L9.33293 10.0557ZM13.9461 8.35064L15.0962 3.7514L13.1559 3.26623L12.0059 7.86548L13.9461 8.35064Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                    {
                                                        RESPOND_IN_ANY_LANGUAGE_HEADING
                                                    }
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openTab === "takeAction"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openTab === "takeAction"
                                                            ? 1
                                                            : 0,
                                                    transform:
                                                        openTab === "takeAction"
                                                            ? "translateY(0)"
                                                            : "translateY(-20px)",
                                                    transitionDelay:
                                                        openTab === "takeAction"
                                                            ? "0.1s"
                                                            : "0s",
                                                }}
                                            >
                                                <div>
                                                    <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                        {
                                                            RESPOND_IN_ANY_LANGUAGE_DESCRIPTION
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* No More menus */}
                                        <div
                                            tabIndex="-1"
                                            data-key="0542939c6a4a"
                                            id="react-aria-:Rjad6bpla:-tab-0542939c6a4a"
                                            aria-selected={
                                                openTab === "noMoreMenus"
                                            }
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden outline-none
                                            transition-[background-color] ${openTab === "noMoreMenus" ? "bg-white rounded-3xl" : "hover:bg-white"}`}
                                            style={{
                                                backgroundColor:
                                                    openTab === "noMoreMenus"
                                                        ? "white"
                                                        : "#f6f5f3",
                                            }}
                                            onClick={() =>
                                                toggleTab("noMoreMenus")
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-black theme-tech:text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M17 14.5V4.5M17 14.5C18.6575 14.5 20 15.8425 20 17.5C20 19.1575 18.6575 20.5 17 20.5C15.3425 20.5 14 19.1575 14 17.5C14 15.8425 15.3425 14.5 17 14.5ZM7 20.5V12.5M7 12.5C5.3425 12.5 4 11.1575 4 9.5C4 7.8425 5.3425 6.5 7 6.5M7 12.5C8.6575 12.5 10 11.1575 10 9.5C10 7.8425 8.6575 6.5 7 6.5M7 6.5V4.5"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="square"
                                                        ></path>
                                                    </svg>
                                                    {NO_MORE_MENUS_HEADING}
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openTab ===
                                                        "noMoreMenus"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openTab ===
                                                        "noMoreMenus"
                                                            ? 1
                                                            : 0,
                                                    transform:
                                                        openTab ===
                                                        "noMoreMenus"
                                                            ? "translateY(0)"
                                                            : "translateY(-20px)",
                                                    transitionDelay:
                                                        openTab ===
                                                        "noMoreMenus"
                                                            ? "0.1s"
                                                            : "0s",
                                                }}
                                            >
                                                <div>
                                                    <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                        {
                                                            NO_MORE_MENUS_DESCRIPTION
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 row-start-1 md:col-span-6 md:col-start-7 md:row-start-1 lg:col-span-5 lg:col-start-7">
                                    <div
                                        id="react-aria-:Rjad6bpla:-tabpanel-84517070a64a"
                                        aria-labelledby="react-aria-:Rjad6bpla:-tab-84517070a64a"
                                        role="tabpanel"
                                        className="relative aspect-square w-full animate-fade-in rounded-3xl bg-gray-200 data-[focused]:outline data-[focused]:outline-2 data-[focused]:outline-offset-4 data-[focused]:outline-yellow theme-tech:bg-gray-700 theme-platform:bg-gray-100"
                                    >
                                        <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-3xl">
                                            <div className="relative h-full w-full">
                                                <video
                                                    loop
                                                    autoPlay={!videomute}
                                                    playsInline
                                                    preload="metadata"
                                                    controls
                                                    muted={!videomute}
                                                    src="/assets/video/Speaks.mp4"
                                                    className="h-full w-full object-cover"
                                                    id=":R236bpla:"
                                                ></video>
                                            </div>
                                            <p className="sr-only" id=":r0:">
                                                {`Chat example showcasing how an AI
                                        agent can be customized with a
                                        knowledge base, integration,
                                        customer information and a company's
                                        personality`}
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
                                                                onClick={
                                                                    handleMakeOwnVideoMutedOrNot
                                                                }
                                                                aria-label="Play video"
                                                                className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                            >
                                                                <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                                    {!videomute ? (
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
                                                                            ></path>
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default IntuitiveAndAuthentic;
