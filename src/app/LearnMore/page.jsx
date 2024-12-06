"use client";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
const LearnMore = () => {
    return (
        <div className="bg-[#f6f5f3]">
            <Navbar color={"#f6f5f3"} />
            <main className="flex-grow outline-yellow" id="main" tabIndex="-1">
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default LearnMore;

const ContactSection = () => {
    return (
        <section
            className="relative py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 pb-12 md:py-16 lg:py-18"
            style={{ zIndex: 1, backgroundColor: "#f6f5f3" }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="col-span-12 flex flex-col pb-10 md:col-span-10 md:col-start-2 xl:col-span-5 xl:col-start-2 xl:justify-between xl:pb-0 xl:pt-4">
                        <div>
                            <h1 className="title-m mb-7 text-pretty text-black md:mb-4 lg:mb-6 lg:max-w-[470px] xl:mb-8">
                                Learn how Sierra can elevate your customer
                                experience.
                            </h1>
                            <ul className="flex flex-col gap-2 lg:max-w-[420px] xl:gap-4">
                                <li>
                                    <span className="body-m md:body-l flex gap-2 text-black theme-tech:text-white py-0 md:py-0 lg:py-0 xl:py-0">
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
                                        Sierra’s conversational AI platform
                                        enables your company to tailor
                                        next-generation AI to your business and
                                        customers.
                                    </span>
                                </li>
                                <li>
                                    <span className="body-m md:body-l flex gap-2 text-black theme-tech:text-white py-0 md:py-0 lg:py-0 xl:py-0">
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
                                        With Sierra, you can enable your
                                        customers to get answers, solve
                                        problems, and take action through a
                                        conversational experience.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden py-6 md:py-0 xl:block">
                            <p className="body-m mb-6 block text-gray-500 md:mb-4 xl:mb-6">
                                Trusted by leading brands
                            </p>
                            <ul className="flex justify-between gap-3 md:justify-normal md:gap-4">
                                <li className="relative h-2.5 md:h-4">
                                    <Image
                                        alt="undefined Logo"
                                        loading="lazy"
                                        width="1030"
                                        height="240"
                                        decoding="async"
                                        className="block filter-gray-400 h-full w-auto"
                                        sizes="(min-width: 769px) 10vw, 20vw"
                                        src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ffde6590808fad7d7a764c6008f2a1bee57a85298-1030x240.png&amp;width=3840&amp;quality=90"
                                        style={{ color: "transparent" }}
                                    />
                                </li>
                                <li className="relative h-2.5 md:h-4">
                                    <Image
                                        alt="undefined Logo"
                                        loading="lazy"
                                        width="1030"
                                        height="240"
                                        decoding="async"
                                        className="block filter-gray-400 h-full w-auto"
                                        sizes="(min-width: 769px) 10vw, 20vw"
                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F8ab9c2fc63ff045de128c9294bf1e26711e73d45-1431x240.png&width=256&quality=90"
                                        style={{ color: "transparent" }}
                                    />
                                </li>
                                <li className="relative h-2.5 md:h-4">
                                    <Image
                                        alt="undefined Logo"
                                        loading="lazy"
                                        width="1030"
                                        height="240"
                                        decoding="async"
                                        className="block filter-gray-400 h-full w-auto"
                                        sizes="(min-width: 769px) 10vw, 20vw"
                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F6f8d151165955078a37f047746191a5c4f53501f-1110x240.png&width=256&quality=90"
                                        style={{ color: "transparent" }}
                                    />
                                </li>
                                <li className="relative h-2.5 md:h-4">
                                    <Image
                                        alt="undefined Logo"
                                        loading="lazy"
                                        width="1030"
                                        height="240"
                                        decoding="async"
                                        className="block filter-gray-400 h-full w-auto"
                                        sizes="(min-width: 769px) 10vw, 20vw"
                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&width=256&quality=90"
                                        style={{ color: "transparent" }}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 rounded-3xl bg-white px-4 py-8 md:px-15 xl:col-span-5 xl:col-start-7 xl:pt-14">
                        <div className="flex w-full flex-col justify-between">
                            <div className="flex flex-col">
                                <form
                                    className="flex h-full mx-auto w-[90%] flex-col justify-between gap-4 xl:gap-9 "
                                    id="lead-form"
                                >
                                    <div>
                                        <div className="flex justify-center">
                                            <h3 className="title-s mb-4 text-balance text-center text-gray-700 md:mb-6 md:max-w-[80%] xl:mb-12">
                                                Let us know a bit about
                                                yourself, and we will reach out
                                                soon.
                                            </h3>
                                        </div>
                                        <div className="flex w-full flex-col gap-2">
                                            <div className="flex flex-col md:flex-row gap-2 md:gap-2.5">
                                                <div className="flex-1">
                                                    <div
                                                        className="group"
                                                        data-rac=""
                                                    >
                                                        <div className="flex flex-col rounded-lg border border-gray-200 px-4 py-2 transition-[border-color] focus-within:border-gray-400 group-data-[invalid]:border-orange md:rounded-2xl md:px-6">
                                                            <label
                                                                className="label mb-1 text-black group-data-[invalid]:text-orange"
                                                                htmlFor="firstname"
                                                            >
                                                                First name
                                                            </label>
                                                            <input
                                                                required
                                                                placeholder="First name"
                                                                id="firstname"
                                                                className="body-m w-full min-w-0 border-none text-black outline-none placeholder:text-gray-250 group-data-[invalid]:text-orange"
                                                                type="text"
                                                                name="firstname"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div
                                                        className="group"
                                                        data-rac=""
                                                    >
                                                        <div className="flex flex-col rounded-lg border border-gray-200 px-4 py-2 transition-[border-color] focus-within:border-gray-400 group-data-[invalid]:border-orange md:rounded-2xl md:px-6">
                                                            <label
                                                                className="label mb-1 text-black group-data-[invalid]:text-orange"
                                                                htmlFor="lastname"
                                                            >
                                                                Last name
                                                            </label>
                                                            <input
                                                                required
                                                                placeholder="Last name"
                                                                id="lastname"
                                                                className="body-m w-full min-w-0 border-none text-black outline-none placeholder:text-gray-250 group-data-[invalid]:text-orange"
                                                                type="text"
                                                                name="lastname"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-2 md:gap-2.5">
                                                <div className="flex-1">
                                                    <div
                                                        className="group"
                                                        data-rac=""
                                                    >
                                                        <div className="flex flex-col rounded-lg border border-gray-200 px-4 py-2 transition-[border-color] focus-within:border-gray-400 group-data-[invalid]:border-orange md:rounded-2xl md:px-6">
                                                            <label
                                                                className="label mb-1 text-black group-data-[invalid]:text-orange"
                                                                htmlFor="jobtitle"
                                                            >
                                                                Job title
                                                            </label>
                                                            <input
                                                                required
                                                                placeholder="Job title"
                                                                id="jobtitle"
                                                                className="body-m w-full min-w-0 border-none text-black outline-none placeholder:text-gray-250 group-data-[invalid]:text-orange"
                                                                type="text"
                                                                name="jobtitle"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-2 md:gap-2.5">
                                                <div className="flex-1">
                                                    <div
                                                        className="group"
                                                        data-rac=""
                                                    >
                                                        <div className="flex flex-col rounded-lg border border-gray-200 px-4 py-2 transition-[border-color] focus-within:border-gray-400 group-data-[invalid]:border-orange md:rounded-2xl md:px-6">
                                                            <label
                                                                className="label mb-1 text-black group-data-[invalid]:text-orange"
                                                                htmlFor="email"
                                                            >
                                                                Company email
                                                            </label>
                                                            <input
                                                                required
                                                                placeholder="Company email"
                                                                id="email"
                                                                className="body-m w-full min-w-0 border-none text-black outline-none placeholder:text-gray-250 group-data-[invalid]:text-orange"
                                                                type="email"
                                                                name="email"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-2 md:gap-2.5">
                                                <div className="flex-1">
                                                    <div
                                                        className="group"
                                                        data-rac=""
                                                    >
                                                        <div className="flex flex-col rounded-lg border border-gray-200 px-4 py-2 transition-[border-color] focus-within:border-gray-400 group-data-[invalid]:border-orange md:rounded-2xl md:px-6">
                                                            <label
                                                                className="label mb-1 text-black group-data-[invalid]:text-orange"
                                                                htmlFor="companyname"
                                                            >
                                                                Company name
                                                            </label>
                                                            <input
                                                                required
                                                                placeholder="Company name"
                                                                id="companyname"
                                                                className="body-m w-full min-w-0 border-none text-black outline-none placeholder:text-gray-250 group-data-[invalid]:text-orange"
                                                                type="text"
                                                                name="companyname"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-2 md:gap-2.5">
                                                <div className="flex-1">
                                                    <div
                                                        className="react-aria-Select"
                                                        data-rac=""
                                                    >
                                                        <span
                                                            className="sr-only"
                                                            id="industry-label"
                                                        >
                                                            Industry
                                                        </span>
                                                        <button
                                                            type="button"
                                                            aria-labelledby="industry-label"
                                                            aria-haspopup="listbox"
                                                            aria-expanded="false"
                                                            className="data-[pressed]:border-b-none group relative flex items-center gap-10 rounded-2xl border border-gray-200 text-gray-400 outline-none data-[pressed]:rounded-b-none lg:gap-18 h-14 px-6 w-full justify-between data-[focus-visible]:border-gray-400"
                                                        >
                                                            <span
                                                                className="body-m"
                                                                data-placeholder="true"
                                                            >
                                                                Select your
                                                                industry
                                                            </span>
                                                            <span aria-hidden="true">
                                                                {/* SVG Icon Placeholder */}
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div
                                                        aria-hidden="true"
                                                        data-react-aria-prevent-focus="true"
                                                        data-a11y-ignore="aria-hidden-focus"
                                                        data-testid="hidden-select-container"
                                                        style={{
                                                            border: 0,
                                                            clip: "rect(0px, 0px, 0px, 0px)",
                                                            clipPath:
                                                                "inset(50%)",
                                                            height: 1,
                                                            margin: -1,
                                                            overflow: "hidden",
                                                            padding: 0,
                                                            position:
                                                                "absolute",
                                                            width: 1,
                                                            whiteSpace:
                                                                "nowrap",
                                                        }}
                                                    >
                                                        <input
                                                            tabIndex={0}
                                                            type="text"
                                                            style={{
                                                                fontSize: 16,
                                                            }}
                                                        />
                                                        <label>
                                                            <select
                                                                tabIndex={-1}
                                                                name="industry"
                                                                title=""
                                                            >
                                                                <option></option>
                                                                <option value="Automotive">
                                                                    Automotive
                                                                </option>
                                                                <option value="Energy & Utilities">
                                                                    Energy &
                                                                    Utilities
                                                                </option>
                                                                <option value="Financial Services">
                                                                    Financial
                                                                    Services
                                                                </option>
                                                                <option value="Healthcare & Life Sciences">
                                                                    Healthcare &
                                                                    Life
                                                                    Sciences
                                                                </option>
                                                                <option value="Information Technology">
                                                                    Information
                                                                    Technology
                                                                </option>
                                                                <option value="Manufacturing & Consumer Goods">
                                                                    Manufacturing
                                                                    & Consumer
                                                                    Goods
                                                                </option>
                                                                <option value="Media & Communications">
                                                                    Media &
                                                                    Communications
                                                                </option>
                                                                <option value="Public Sector">
                                                                    Public
                                                                    Sector
                                                                </option>
                                                                <option value="Retail">
                                                                    Retail
                                                                </option>
                                                                <option value="Telecommunications">
                                                                    Telecommunications
                                                                </option>
                                                                <option value="Travel and Hospitality">
                                                                    Travel and
                                                                    Hospitality
                                                                </option>
                                                                <option value="Other">
                                                                    Other
                                                                </option>
                                                            </select>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="label w-full py-4 text-center text-orange"
                                        aria-live="polite"
                                        role="alert"
                                    ></div>
                                    <div className="flex justify-center">
                                        <button
                                            className="body-s inline-flex items-center  justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed bg-green-500 text-white hover:bg-transparent hover:text-green-500 border border-green-500 focus-visible:bg-transparent focus-visible:border-yellow focus-visible:text-yellow py-3 md:px-8 md:py-4 active:bg-green-300 active:border-green-300 disabled:bg-gray-500 disabled:border-gray-300 disabled:text-white h-10 gap-0 px-12"
                                            type="submit"
                                            disabled
                                        >
                                            <div className="h-4 overflow-hidden transition-[width,opacity] duration-300 mr-0 w-0 opacity-0">
                                                {/* SVG Icon Placeholder */}
                                            </div>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <small className="body-s mt-4 block w-full text-balance text-center text-gray-500">
                                <blockquote>
                                    By clicking submit, you acknowledge our{" "}
                                    <a
                                        className="underline underline-offset-2 transition-[color] hover:text-green-500 focus-visible:outline focus-visible:outline-yellow active:text-green-300 theme-tech:hover:text-gray-300"
                                        href="/privacy-policy"
                                    >
                                        Privacy Policy
                                    </a>{" "}
                                    and agree to receive email communications
                                    from us.
                                </blockquote>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
