/* eslint-disable prettier/prettier */

"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../Buttons/Button";
import {
    GROUND_YOUR_AI_AGENT_DESCRIPTION,
    GROUND_YOUR_AI_AGENT_HEADING,
    MAKE_AI_YOUR_OWN_DESCRIPTION,
    MAKE_AI_YOUR_OWN_HEADING,
    SIERRA_SPEAKS_DESCRIPTION,
    SIERRA_SPEAKS_HEADING,
    SOLVE_PROBLEMS_THE_RIGHT_WAY_DESCRIPTION,
    SOLVE_PROBLEMS_THE_RIGHT_WAY_HEADING,
    TAKE_ACTION_ON_YOUR_SYSTEMS_DESCRIPTION,
    TAKE_ACTION_ON_YOUR_SYSTEMS_HEADING,
} from "../../utils/Constant";

const MakeAIYourOwn = () => {
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
                        backgroundColor: "rgb(228, 224, 220, 1)",
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
                                        {MAKE_AI_YOUR_OWN_HEADING}
                                    </h2>
                                    <p
                                        ref={textRef}
                                        //className="text-[4.5vw] body-m mt-2 text-pretty pr-4 text-gray-600 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6 lg:text-[1.17vw]"
                                        className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6"
                                    >
                                        {MAKE_AI_YOUR_OWN_DESCRIPTION}
                                    </p>
                                    <Button name={"Our platform"} />
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
                                                        : "rgb(228, 224, 220, 1)",
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
                                                            d="M6.40323 19.0481C6.58717 18.6051 6.75637 18.1545 6.91024 17.6969M14.3413 20.6926C14.6075 19.9418 14.8436 19.1768 15.0483 18.399C15.2339 17.6934 15.3936 16.9772 15.5264 16.2516M19.4458 17.0583C19.8102 15.0944 20.0007 13.0694 20.0007 11C20.0007 6.58172 16.4189 3 12.0007 3C10.7452 3 9.55736 3.28918 8.5 3.80456M3.52148 15.0245C3.83468 13.7343 4.00067 12.3865 4.00067 11C4.00067 9.25969 4.55637 7.64917 5.5 6.33621M12.0011 11C12.0011 13.7604 11.5537 16.4163 10.7275 18.8992C10.5149 19.5381 10.2772 20.1655 10.0156 20.7803M7.71032 14.5C7.90127 13.3618 8.00067 12.1925 8.00067 11C8.00067 8.79086 9.79153 7 12.0007 7C14.2098 7 16.0007 8.79086 16.0007 11C16.0007 11.6166 15.9814 12.2287 15.9435 12.8357"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>

                                                    {
                                                        GROUND_YOUR_AI_AGENT_HEADING
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
                                                            GROUND_YOUR_AI_AGENT_DESCRIPTION
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
                                            className={`group cursor-pointer overflow-hidden outline-none transition-[background-color] ${openTab === "solveProblems" ? "bg-white rounded-3xl" : "hover:bg-white"}`}
                                            style={{
                                                backgroundColor:
                                                    openTab === "solveProblems"
                                                        ? "white"
                                                        : "rgb(228, 224, 220, 1)",
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
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M13 7C13.5523 7 14 7.44772 14 8C14 10.3085 14.5108 11.7424 15.3842 12.6158C16.2576 13.4892 17.6915 14 20 14C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16C17.6915 16 16.2576 16.5108 15.3842 17.3842C14.5108 18.2576 14 19.6915 14 22C14 22.5523 13.5523 23 13 23C12.4477 23 12 22.5523 12 22C12 19.6915 11.4892 18.2576 10.6158 17.3842C9.74243 16.5108 8.30849 16 6 16C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14C8.30849 14 9.74243 13.4892 10.6158 12.6158C11.4892 11.7424 12 10.3085 12 8C12 7.44772 12.4477 7 13 7ZM13 12.7334C12.7361 13.212 12.4147 13.6453 12.03 14.03C11.6453 14.4147 11.212 14.7361 10.7334 15C11.212 15.2639 11.6453 15.5853 12.03 15.97C12.4147 16.3547 12.7361 16.788 13 17.2666C13.2639 16.788 13.5853 16.3547 13.97 15.97C14.3547 15.5853 14.788 15.2639 15.2666 15C14.788 14.7361 14.3547 14.4147 13.97 14.03C13.5853 13.6453 13.2639 13.212 13 12.7334Z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            d="M6 5.5C6 5.22386 5.77614 5 5.5 5C5.22386 5 5 5.22386 5 5.5C5 6.48063 4.78279 7.0726 4.4277 7.4277C4.0726 7.78279 3.48063 8 2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9C3.48063 9 4.0726 9.21721 4.4277 9.5723C4.78279 9.9274 5 10.5194 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 10.5194 6.21721 9.9274 6.5723 9.5723C6.9274 9.21721 7.51937 9 8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C7.51937 8 6.9274 7.78279 6.5723 7.4277C6.21721 7.0726 6 6.48063 6 5.5Z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            d="M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5C10 2.13341 9.85918 2.47538 9.66728 2.66728C9.47538 2.85918 9.13341 3 8.5 3C8.22386 3 8 3.22386 8 3.5C8 3.77614 8.22386 4 8.5 4C9.13341 4 9.47538 4.14082 9.66728 4.33272C9.85918 4.52462 10 4.86659 10 5.5C10 5.77614 10.2239 6 10.5 6C10.7761 6 11 5.77614 11 5.5C11 4.86659 11.1408 4.52462 11.3327 4.33272C11.5246 4.14082 11.8666 4 12.5 4C12.7761 4 13 3.77614 13 3.5C13 3.22386 12.7761 3 12.5 3C11.8666 3 11.5246 2.85918 11.3327 2.66728C11.1408 2.47538 11 2.13341 11 1.5Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                    {
                                                        SOLVE_PROBLEMS_THE_RIGHT_WAY_HEADING
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
                                                            SOLVE_PROBLEMS_THE_RIGHT_WAY_DESCRIPTION
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
                                                        : "rgb(228, 224, 220, 1)",
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
                                                            d="M3 15L9.29412 20L21 4"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                    {
                                                        TAKE_ACTION_ON_YOUR_SYSTEMS_HEADING
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
                                                            TAKE_ACTION_ON_YOUR_SYSTEMS_DESCRIPTION
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

export default MakeAIYourOwn;
