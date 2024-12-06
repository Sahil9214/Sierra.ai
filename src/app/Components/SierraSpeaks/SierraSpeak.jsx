/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../Buttons/Button";
import { LEARN_MORE } from "../../utils/Constant";
import {
    VideoPauseSVG,
    VideoPlaySVG,
    AudioOnSVG,
    AudioOffSVG,
} from "../../utils/Icons/Icons";

const SierraSpeak = ({
    heading,
    subHeading,
    video,
    innerHeading1,
    innerHeading1SVG: InnerHeading1SVG, // Note the capital letter - it's now a component
    innerDescription1,
    innerHeading2,
    innerHeading2SVG: InnerHeading2SVG,
    innerDescription2,
    innerHeading3,
    innerHeading3SVG: InnerHeading3SVG,
    innerDescription3,
    disableButton,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    // True means audio is on, false means muted
    const [isAudioOn, setIsAudioOn] = useState(false);
    // True means playing, false means paused
    const [isPlaying, setIsPlaying] = useState(true);

    const ref = useRef(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const videoRef = useRef(null);

    const handleAudioToggle = () => {
        setIsAudioOn(!isAudioOn);
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 }, // Adjust threshold as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Wait for elements to be available
        if (!titleRef.current || !textRef.current || !sectionRef.current)
            return;

        const elements = [
            titleRef.current,
            textRef.current,
            buttonRef.current,
        ].filter(Boolean); // Filter out any null elements

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Set initial state
        gsap.set(elements, { opacity: 0, y: -100 });

        // Animate
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
    }, [isVisible]);

    return (
        <div
            ref={ref}
            className={`transition-opacity ${isVisible ? "fade-in" : "opacity-0"}`}
        >
            <section
                className="theme-product relative bg-white py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
                //  className="h-full py-8 theme-product relative  theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18 "
                style={{
                    zIndex: 4,
                    background: "var(--sierra-grey-background-color)",
                    backgroundColor: "#F6F5F3",
                }}
            >
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-0">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                        <div
                            ref={sectionRef}
                            className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2"
                        >
                            <h2
                                ref={titleRef || null}
                                // className="text-[7vw] title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0 lg:text-[2.8vw]"
                                className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0"
                            >
                                {heading}
                            </h2>
                            <p
                                ref={textRef || null}
                                className="body-m mt-2 text-pretty  pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6"
                            >
                                {subHeading}
                            </p>
                            {disableButton ? "" : <Button name={LEARN_MORE} />}
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                        <div className="col-span-12 mb-6 md:mb-0 md:col-span-6 lg:col-span-5 lg:col-start-2">
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl">
                                <div className="bg-white cursor-pointer absolute inset-0">
                                    <video
                                        ref={videoRef}
                                        loop
                                        playsInline
                                        preload="metadata"
                                        muted={!isAudioOn}
                                        //src="/assets/video/Speaks.mp4"
                                        src={video}
                                        className="h-full w-full object-cover"
                                        id=":R236bpla:"
                                        autoPlay
                                    ></video>
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
                                                            handlePlayPause
                                                        }
                                                        aria-label={
                                                            isPlaying
                                                                ? "Pause video"
                                                                : "Play video"
                                                        }
                                                        className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                    >
                                                        <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                            {!isPlaying ? (
                                                                <VideoPlaySVG />
                                                            ) : (
                                                                <VideoPauseSVG />
                                                            )}
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={handleAudioToggle}
                                                    aria-label={
                                                        isAudioOn
                                                            ? "Mute audio"
                                                            : "Unmute audio"
                                                    }
                                                    className="group pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300/45 p-1 outline-none transition duration-300 hover:bg-white focus-visible:bg-white group-hover:bg-white"
                                                >
                                                    <span className="rounded-full border border-white p-2 text-white transition duration-300 group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-yellow group-focus-visible:text-yellow">
                                                        {isAudioOn ? (
                                                            <AudioOnSVG />
                                                        ) : (
                                                            <AudioOffSVG />
                                                        )}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 lg:col-span-3 md:col-start-8 lg:col-start-9">
                            <ul className="flex flex-col gap-6">
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <InnerHeading1SVG />
                                        {innerHeading1}
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500">
                                        {innerDescription1}
                                    </p>
                                </li>
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <InnerHeading2SVG />
                                        {innerHeading2}
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500">
                                        {innerDescription2}
                                    </p>
                                </li>
                                <li>
                                    <h3 className="body-m md:body-l flex gap-2 text-black theme-tech:text-white lg:py-4 mb-3 py-0 md:mb-0">
                                        <InnerHeading3SVG />
                                        {innerHeading3}
                                    </h3>
                                    <p className="body-s pr-4 md:pr-0 lg:pb-4 text-gray-500">
                                        {innerDescription3}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SierraSpeak;
