/* eslint-disable prettier/prettier */

"use client";
import React, { useState } from "react";
import Toggler from "../Toggler/Toggler";

const SafeAndSecure = ({
    heading,
    description,
    innerHeadings,
    innerDescriptions,
}) => {
    const [openSection, setOpenSection] = useState(0);

    const toggleDropdown = (section) => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    return (
        <div>
            <section
                className="max-h-full lg:min-h-screen theme-tech relative bg-[#222222] py-12 text-white theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
                style={{ zIndex: 0 }}
            >
                <div style={{ opacity: 1, transform: "none" }}>
                    <div className="mx-auto max-w-screen-3xl px-4 lg:px-0">
                        <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                            <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                                <h2 className="title-l text-pretty pr-4 text-white theme-tech:text-white md:pr-0">
                                    {heading}
                                </h2>
                                <p className="body-m mt-2 text-pretty pr-4 text-white theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-66">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div data-rac="" data-orientation="horizontal">
                            <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                                <div className="relative col-span-12 row-start-2 md:col-span-5 md:col-start-1 md:row-start-1 lg:col-span-3 lg:col-start-2">
                                    <div
                                        className="absolute top-0 h-6 w-full overflow-hidden rounded-2xl theme-tech:bg-gray-700 theme-product:bg-white"
                                        style={{
                                            height: "138.391px",
                                            transform: "none",
                                        }}
                                    ></div>
                                    <div
                                        id="react-aria-:Rjaf6bpla:"
                                        role="tablist"
                                        aria-orientation="horizontal"
                                        className="relative flex flex-col gap-0.5"
                                    >
                                        {innerHeadings.map(
                                            (innerHeading, index) => (
                                                <div
                                                    key={index}
                                                    tabIndex="0"
                                                    role="tab"
                                                    className={`group cursor-pointer overflow-hidden rounded-2xl outline-none transition-[background-color] data-[hovered]:theme-tech:bg-gray-700 data-[hovered]:theme-product:bg-white ${openSection === index ? "bg-[#302E2D]" : ""}`}
                                                    onClick={() =>
                                                        toggleDropdown(index)
                                                    }
                                                >
                                                    <h3 className="body-m md:body-l text-white theme-tech:text-white">
                                                        <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                            {innerHeading}
                                                        </span>
                                                    </h3>
                                                    {openSection === index && (
                                                        <div className="p-4">
                                                            {
                                                                innerDescriptions[
                                                                    index
                                                                ]
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SafeAndSecure;
