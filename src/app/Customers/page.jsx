"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const customerData = [
    {
        href: "/customers/sonos",
        imageSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fb3f87feb3ff0c7bd257db2125940f708b9fe8b34-6000x6000.jpg&width=3840&quality=90",
        logoSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ffde6590808fad7d7a764c6008f2a1bee57a85298-1030x240.png&width=3840&quality=90",
        altText: "Woman walking with Sonos speaker",
        description: "How Sonos elevates the listener experience with Sierra.",
        stats: [{ label: "Customers", value: "15 Million" }],
    },
    {
        href: "/customers/casper",
        imageSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F5c5d8d67597b3f82fe4dc820df37324f7b5ef2a6-934x934.png&width=3840&quality=90",
        logoSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fcfa67bb226240ad5a303d3302371b458c2a8e14f-402x125.png&width=3840&quality=90",
        altText: "Couple on a casper mattress",
        description:
            "How Casper turns a big purchase into a lifelong relationship with AI.",
        stats: [
            { label: "Resolution Rate", value: "74%" },
            { label: "Increase in CSAT", value: ">20%" },
        ],
    },
    {
        href: "/customers/casper",
        imageSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fbcc85200ff2a86566f88ca73ef74e7bb19bcb81c-1400x788.jpg&width=640&quality=90",
        logoSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F8ab9c2fc63ff045de128c9294bf1e26711e73d45-1431x240.png&width=384&quality=90",
        altText: "Couple on a casper mattress",
        description:
            "How Casper turns a big purchase into a lifelong relationship with AI.",
        stats: [
            { label: "Subscribe", value: "34 Million" },
            { label: "Increase in CSAT", value: ">20%" },
        ],
    },
    {
        href: "/customers/casper",
        imageSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F4cfa06ede9c1900a1d9f7a427428f0b795dc0575-744x1072.png&width=640&quality=90",
        logoSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F2e7a7ac68fec4e39ff38989241e3139397020540-4062x1782.webp&width=384&quality=90",
        altText: "Couple on a casper mattress",
        description:
            "How Casper turns a big purchase into a lifelong relationship with AI.",
        stats: [
            {
                label: "5/5 scores converstaional & technical excellence",
                value: "99%",
            },
            { label: "", value: "" },
        ],
    },
    {
        href: "/customers/casper",
        imageSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F5cb8b2c55957dac799cbd2360bbc41ca63acd400-1080x1080.jpg&width=640&quality=90",
        logoSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F6f8d151165955078a37f047746191a5c4f53501f-1110x240.png&width=384&quality=90",
        altText: "Couple on a casper mattress",
        description:
            "How Casper turns a big purchase into a lifelong relationship with AI.",
        stats: [
            { label: "CSAT", value: "4.5/5" },
            { label: "Resolution rate with Sierra", value: "70%" },
        ],
    },
    {
        href: "/customers/casper",
        imageSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F08edfd6b7f5b565d817526b307d1d5cf1af702a3-934x934.png&width=640&quality=90",
        logoSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F4fea30100f27638577c4dc6a6aa3b62d63a61536-833x185.png&width=384&quality=90",
        altText: "Couple on a casper mattress",
        description:
            "How Casper turns a big purchase into a lifelong relationship with AI.",
        stats: [
            { label: "", value: "" },
            { label: "", value: "" },
        ],
    },
    {
        href: "/customers/casper",
        imageSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F92956b1315c5e422807ae8d25b3c9ad961087f31-1216x1824.jpg&width=640&quality=90",
        logoSrc:
            "https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&width=384&quality=90",
        altText: "Couple on a casper mattress",
        description:
            "How Casper turns a big purchase into a lifelong relationship with AI.",
        stats: [
            { label: "CSAT", value: "4.6" },
            { label: "Resolution rate with Sierra", value: "~70%" },
        ],
    },
    // Add more customer data as needed
];

const CustomersPage = () => {
    return (
        <div>
            <Navbar />
            <main className="flex-grow outline-yellow" id="main" tabIndex={-1}>
                <header className="py-12 md:py-16 lg:py-20">
                    <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                        <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                            <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                                <h1 className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                                    Our customers
                                </h1>
                                <p className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6">
                                    Sierra is trusted by industry leaders with
                                    millions of customers.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                            <Link
                                href="#"
                                className="group col-span-12 grid grid-cols-subgrid rounded-3xl outline-offset-4 focus-visible:outline-yellow lg:col-span-10 lg:col-start-2"
                                aria-label="Read more about How ADT embraces AI to make every second count"
                            >
                                <article className="col-span-12 grid grid-cols-subgrid lg:col-span-10">
                                    <div className="col-span-12 md:col-span-6 md:col-start-1 lg:col-span-5">
                                        <figure className="relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl bg-vignette">
                                            <Image
                                                src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F808845a263fae7b65ba0d1a2107e029e252211ca-8256x5504.jpg&width=1920&quality=90"
                                                alt="ADT logo"
                                                layout="fill"
                                                objectFit="cover"
                                                className="block h-auto w-full object-cover transition-[transform] duration-200 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                                            />{" "}
                                            {/* <div className="absolute inset-0 bg-gray-200 opacity-10"></div> */}
                                            <div className="absolute z-10 flex h-full w-full flex-col justify-between p-4 md:p-6">
                                                <div className="relative h-5 w-5 shadow-2xl">
                                                    <Image
                                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fc6c847d50cc23bbde4781d24ba29e54c0b2fc3a2-720x720.png&width=384&quality=90"
                                                        alt="undefined Logo"
                                                        layout="responsive"
                                                        width={10}
                                                        height={10}
                                                        className="block  brightness-0 invert w-6 shadow-2xl"
                                                    />
                                                </div>
                                                <ul className="flex divide-x divide-gray-100">
                                                    <li className="flex flex-col gap-1 px-4 first:pl-0 last:pr-0 md:px-6">
                                                        <h4 className="body-s font-extrabold text-white">
                                                            Customer inquiries
                                                            per month
                                                        </h4>
                                                        <span className="title-s flex gap-2 tabular-nums text-white">
                                                            {/* Place SVG here */}
                                                            2 million
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="col-span-12 flex flex-col justify-between pb-6 pt-4 md:col-span-6 md:col-start-7 md:py-2 lg:col-span-5 lg:col-start-6 lg:py-6">
                                        <div className="flex flex-col pb-6 lg:pl-6">
                                            <time className="label mb-3.5 text-gray-500">
                                                November 12, 2024
                                            </time>
                                            <h3 className="title-m">
                                                How ADT embraces AI to make
                                                every second count
                                            </h3>
                                        </div>
                                        <div className="lg:pl-6">
                                            <div className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border border-gray-600 text-gray-500 group-hover:border-green-900 hover:border-green-900 hover:text-green-900 group-hover:text-green-900 focus-visible:border-yellow active:border-green-900 active:text-green-900 gap-6 py-3 md:py-2 theme-tech:text-white theme-tech:border-white theme-tech:hover:text-gray-200 theme-platform:border-gray-300 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:hover:border-gray-200 theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4">
                                                Read more
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 rotate-90 lg:h-5 lg:w-5"
                                                >
                                                    <path
                                                        d="M6 10L12 4L18 10M12 5V20"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    </div>
                </header>
                <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                        <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                            <h2 className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                                Sierra sets businesses up for success
                            </h2>
                            <p className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6">
                                Visionary startups and industry leaders already
                                use Sierra to move quicker and smarter.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 md:gap-2.5 gap-y-8 lg:gap-y-14">
                        {customerData.map((customer, index) => (
                            <Link
                                key={index}
                                href={customer.href}
                                className="group col-span-12 overflow-hidden rounded-2xl outline-offset-4 outline-yellow md:col-span-6 lg:col-span-4"
                            >
                                <figure className="relative mb-2 aspect-square overflow-hidden rounded-2xl bg-gray-900 lg:mb-4">
                                    <Image
                                        alt={customer.altText}
                                        src={customer.imageSrc}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-[transform] duration-200 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
                                    <div className="absolute z-10 flex h-full w-full flex-col justify-between p-4 md:p-6 text-white">
                                        <div className="relative h-5">
                                            <Image
                                                alt={`${customer.altText} Logo`}
                                                src={customer.logoSrc}
                                                width={1030}
                                                height={240}
                                                className="block h-full w-auto brightness-0 invert"
                                            />
                                        </div>
                                        <ul className="flex divide-x divide-gray-100">
                                            {customer.stats.map(
                                                (stat, statIndex) => (
                                                    <li
                                                        key={statIndex}
                                                        className="flex flex-col gap-1 px-4 first:pl-0 last:pr-0 md:px-6"
                                                    >
                                                        <h4 className="body-s font-medium text-gray-100">
                                                            {stat.label}
                                                        </h4>
                                                        <span className="title-s flex gap-2 tabular-nums text-white">
                                                            {stat.value}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </figure>
                                <div className="body-l mx-auto max-w-sm text-balance text-center text-gray-500">
                                    {customer.description}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CustomersPage;
