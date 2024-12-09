/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";
import Button from "../Buttons/Button";
import {
    THE_RESULTS_SPEAK_FOR_THEMSELVES_DESCRIPTION,
    THE_RESULTS_SPEAK_FOR_THEMSELVES_HEADING,
} from "../../utils/Constant";
import Link from "next/link";
const ResultSpeak = () => {
    return (
        <section
            className="theme-base relative bg-white py-12 text-gray-500 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
            style={{ zIndex: 1 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2 className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                            {THE_RESULTS_SPEAK_FOR_THEMSELVES_HEADING}
                        </h2>
                        <p className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6">
                            {THE_RESULTS_SPEAK_FOR_THEMSELVES_DESCRIPTION}
                        </p>
                        <Button name={"Our customers"} />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-2 md:gap-2.5 gap-y-8 lg:gap-y-14">
                    {/* Sonos Card */}
                    <Link
                        className="group col-span-12 overflow-hidden rounded-2xl outline-offset-4 outline-yellow md:col-span-6 lg:col-span-4"
                        href="/Customers"
                    >
                        <figure className="bg-vignette relative mb-2 aspect-square overflow-hidden rounded-2xl bg-gray-300 lg:mb-4">
                            <Image
                                alt="Woman walking with Sonos speaker"
                                loading="lazy"
                                fill
                                className="block h-auto w-full object-cover transition-[transform] duration-200 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                                sizes="(min-width: 769px) 33vw, 100vw"
                                src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fb3f87feb3ff0c7bd257db2125940f708b9fe8b34-6000x6000.jpg&amp;width=3840&amp;quality=90"
                                style={{
                                    color: "transparent",
                                }}
                            />
                            <div className="absolute z-10 flex h-full w-full flex-col justify-between p-4 md:p-6">
                                <div className="relative h-5">
                                    <Image
                                        alt="Sonos Logo"
                                        loading="lazy"
                                        width={1030}
                                        height={240}
                                        className="block h-full w-auto brightness-0 invert"
                                        style={{ color: "transparent " }}
                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ffde6590808fad7d7a764c6008f2a1bee57a85298-1030x240.png&width=384&quality=90"
                                    />
                                </div>
                                <ul className="flex divide-x divide-gray-100">
                                    <li className="flex flex-col gap-1 px-4 first:pl-0 last:pr-0 md:px-6">
                                        <h4 className="body-s font-medium text-gray-100">
                                            Customers
                                        </h4>
                                        <span className="title-s flex gap-2 tabular-nums text-white">
                                            15 Million
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="body-l mx-auto max-w-sm text-balance text-center text-[#222222] opacity-70">
                            How Sonos elevates the listener experience with
                            Sierra.
                        </div>
                    </Link>

                    {/* SiriusXM Card */}
                    <Link
                        className="group col-span-12 overflow-hidden rounded-2xl outline-offset-4 outline-yellow md:col-span-6 lg:col-span-4"
                        href="/Customers"
                    >
                        <figure className="bg-vignette relative mb-2 aspect-square overflow-hidden rounded-2xl bg-gray-00 lg:mb-4">
                            <Image
                                alt="SiriusXM logo poster inside a train"
                                loading="lazy"
                                fill
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
                                className="block h-auto w-full object-cover transition-[transform] duration-200 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                                sizes="(min-width: 769px) 33vw, 100vw"
                                src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fbcc85200ff2a86566f88ca73ef74e7bb19bcb81c-1400x788.jpg&width=640&quality=90"
                            />
                            <div className="absolute z-10 flex h-full w-full flex-col justify-between p-4 md:p-6">
                                <div className="relative h-5">
                                    <Image
                                        alt="SiriusXM Logo"
                                        loading="lazy"
                                        width={1431}
                                        height={240}
                                        className="block h-full w-auto brightness-0 invert"
                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F8ab9c2fc63ff045de128c9294bf1e26711e73d45-1431x240.png&width=384&quality=90"
                                    />
                                </div>
                                <ul className="flex divide-x divide-gray-100">
                                    <li className="flex flex-col gap-1 px-4 first:pl-0 last:pr-0 md:px-6">
                                        <h4 className="body-s font-medium text-gray-100">
                                            Subscribers
                                        </h4>
                                        <span className="title-s flex gap-2 tabular-nums text-white">
                                            34 Million
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="body-l mx-auto max-w-sm text-balance text-center text-[#222222] opacity-70">
                            How SiriusXM drives listener loyalty with Sierra.
                        </div>
                    </Link>

                    {/* Casper Card */}
                    <Link
                        className="group col-span-12 overflow-hidden rounded-2xl outline-offset-4 outline-yellow md:col-span-6 lg:col-span-4"
                        href="/Customers"
                    >
                        <figure className="bg-vignette relative mb-2 aspect-square overflow-hidden rounded-2xl bg-gray-100 lg:mb-4">
                            <Image
                                alt="SiriusXM logo poster inside a train"
                                loading="lazy"
                                fill
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
                                className="block h-auto w-full object-cover transition-[transform] duration-200 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                                sizes="(min-width: 769px) 33vw, 100vw"
                                src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F5c5d8d67597b3f82fe4dc820df37324f7b5ef2a6-934x934.png&width=640&quality=90"
                            />
                            <div className="absolute z-10 flex h-full w-full flex-col justify-between p-4 md:p-6">
                                <div className="relative h-5">
                                    <Image
                                        alt="Casper Logo"
                                        loading="lazy"
                                        width={402}
                                        height={125}
                                        className="block h-full w-auto brightness-0 invert"
                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fcfa67bb226240ad5a303d3302371b458c2a8e14f-402x125.png&width=384&quality=90"
                                    />
                                </div>
                                <ul className="flex divide-x divide-gray-100">
                                    <li className="flex flex-col gap-1 px-4 first:pl-0 last:pr-0 md:px-6">
                                        <h4 className="body-s font-medium text-gray-100">
                                            Resolution Rate
                                        </h4>
                                        <span className="title-s flex gap-2 tabular-nums text-white">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="mt-[3px] h-5 w-5 md:mt-[4px] lg:mt-[5px]"
                                            >
                                                <path
                                                    d="M16 7H21V12M20.5 7.5L13 15L9 11L3 17"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            74%
                                        </span>
                                    </li>
                                    <li className="flex flex-col gap-1 px-4 first:pl-0 last:pr-0 md:px-6">
                                        <h4 className="body-s font-medium text-gray-100">
                                            Increase in CSAT
                                        </h4>
                                        <span className="title-s flex gap-2 tabular-nums text-white">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="mt-[3px] h-5 w-5 md:mt-[4px] lg:mt-[5px]"
                                            >
                                                <path
                                                    d="M16 7H21V12M20.5 7.5L13 15L9 11L3 17"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            &gt;20%
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="body-l mx-auto max-w-sm text-balance text-center text-[#222222] opacity-70">
                            How Casper turns a big purchase into a lifelong
                            relationship with AI.
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ResultSpeak;
