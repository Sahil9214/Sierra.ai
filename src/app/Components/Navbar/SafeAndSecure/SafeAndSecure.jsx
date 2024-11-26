/* eslint-disable prettier/prettier */

"use client";
import React, { useState } from "react";

const SafeAndSecure = () => {
    // State to manage the visibility of each dropdown
    const [openSection, setOpenSection] = useState("supervision"); // Set initial open section

    // Function to toggle the dropdown for a specific section
    const toggleDropdown = (section) => {
        setOpenSection((prev) => (prev === section ? null : section)); // Close if already open, otherwise open the new one
    };

    return (
        <div>
            <section
                className="max-h-full lg:h-screen  theme-tech relative bg-[#222222] py-12 text-white theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
                style={{ zIndex: 0 }}
            >
                <div style={{ opacity: 1, transform: "none" }}>
                    <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                        <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                            <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                                <h2 className="text-[8vw] title-l text-pretty pr-4 text-white lg:text-[2.8vw]">
                                    Safe and secure
                                </h2>
                                <p className="text-[4.5vw] body-m mt-2 text-pretty pr-4  theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6 lg:text-[1vw] text-white">
                                    Sierra is designed with the highest
                                    commitment to trust, security, and
                                    compliance. Your AI agent won&rsquo;t pretend to
                                    be something it’s not, and it will be honest
                                    about its limitations.
                                </p>
                            </div>
                        </div>
                        <div data-rac="" data-orientation="horizontal">
                            <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                                <div className="relative col-span-12 row-start-2 md:col-span-5 md:col-start-1 md:row-start-1 lg:col-span-3 lg:col-start-2">
                                    <div
                                        className="absolute top-0 h-6 w-full overflow-hidden rounded-2xl  theme-tech:bg-gray-700 theme-product:bg-white"
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
                                        {/* Supervision Section */}
                                        <div
                                            tabIndex="0"
                                            data-key="a0d85cab3173"
                                            id="react-aria-:Rjaf6bpla:-tab-a0d85cab3173"
                                            aria-selected={
                                                openSection === "supervision"
                                            }
                                            aria-controls="react-aria-:Rjaf6bpla:-tabpanel-a0d85cab3173"
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden rounded-2xl outline-none transition-[background-color] data-[hovered]:theme-tech:bg-gray-700 data-[hovered]:theme-product:bg-white ${openSection === "supervision" ? "bg-[#302E2D]" : ""}`}
                                            onClick={() =>
                                                toggleDropdown("supervision")
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M14 7H4M14 7C14 5.3425 15.3425 4 17 4C18.6575 4 20 5.3425 20 7C20 8.6575 18.6575 10 17 10C15.3425 10 14 8.6575 14 7ZM20 17H12M12 17C12 18.6575 10.6575 20 9 20C7.3425 20 6 18.6575 6 17M12 17C12 15.3425 10.6575 14 9 14C7.3425 14 6 15.3425 6 17M6 17H4"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                    Supervision
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openSection ===
                                                        "supervision"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openSection ===
                                                        "supervision"
                                                            ? 1
                                                            : 0,
                                                }}
                                            >
                                                <div>
                                                    <p className="text-[4vw] body-s px-4 pb-5 pt-2 md:p-4 md:pt-2 lg:px-6 lg:py-4 lg:text-[0.8vw]">
                                                        Guardrails ensure your
                                                        agent stays on-topic,
                                                        and real-time monitoring
                                                        tracks live
                                                        interactions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Secure Integration Section */}
                                        <div
                                            tabIndex="-1"
                                            data-key="b5e5f352bd7d"
                                            id="react-aria-:Rjaf6bpla:-tab-b5e5f352bd7d"
                                            aria-selected={
                                                openSection ===
                                                "secureIntegration"
                                            }
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden rounded-2xl outline-none transition-[background-color] data-[hovered]:bg-gray-100 data-[hovered]:theme-tech:bg-gray-700 data-[hovered]:theme-product:bg-white ${openSection === "secureIntegration" ? "bg-[#302E2D]" : ""}`}
                                            onClick={() =>
                                                toggleDropdown(
                                                    "secureIntegration",
                                                )
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M16 10V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V10M12 14V17M5 10H19V21H5V10Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                    Secure integration
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openSection ===
                                                        "secureIntegration"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openSection ===
                                                        "secureIntegration"
                                                            ? 1
                                                            : 0,
                                                }}
                                            >
                                                <div>
                                                    <p className="text-[4vw] body-s px-4 pb-5 pt-2 md:p-4 md:pt-2 lg:px-6 lg:py-4 lg:text-[0.8vw]">
                                                        AI may be flexible, but
                                                        security standards
                                                        should not be. When AI
                                                        accesses your systems of
                                                        record, those
                                                        interactions are
                                                        deterministic and
                                                        controlled to ensure
                                                        your AI always follows
                                                        your policies and
                                                        security procedures.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Auditing Section */}
                                        <div
                                            tabIndex="-1"
                                            data-key="ad9189a4e04a"
                                            id="react-aria-:Rjaf6bpla:-tab-ad9189a4e04a"
                                            aria-selected={
                                                openSection === "auditing"
                                            }
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden rounded-2xl outline-none transition-[background-color] data-[hovered]:bg-gray-100 data-[hovered]:theme-tech:bg-gray-700 data-[hovered]:theme-product:bg-white ${openSection === "auditing" ? "bg-[#302E2D]" : ""}`}
                                            onClick={() =>
                                                toggleDropdown("auditing")
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M7.54296 9.49775L8.66796 10.2478L10.5396 7.75224M14.0579 9H16.0579M7.54296 15.4989L8.66796 16.2489L10.5396 13.7534M10 20H4V4H20V10M19.1213 19.1213C17.9497 20.2929 16.0503 20.2929 14.8787 19.1213C13.7071 17.9497 13.7071 16.0502 14.8787 14.8786C16.0503 13.7071 17.9497 13.7071 19.1213 14.8786C20.2929 16.0502 20.2929 17.9497 19.1213 19.1213ZM19.1213 19.1213L21 21"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                    Auditing
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openSection ===
                                                        "auditing"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openSection ===
                                                        "auditing"
                                                            ? 1
                                                            : 0,
                                                }}
                                            >
                                                <div>
                                                    <p className=" text-[4vw] body-s px-4 pb-5 pt-2 md:p-4 md:pt-2 lg:px-6 lg:py-4 text-white lg:text-[0.8vw]">
                                                        Built-in quality
                                                        assurance workflows
                                                        ensure your customer
                                                        experience team can
                                                        understand the reasoning
                                                        behind every AI
                                                        interaction.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Data Governance Section */}
                                        <div
                                            tabIndex="-1"
                                            data-key="8e2137d4b096"
                                            id="react-aria-:Rjaf6bpla:-tab-8e2137d4b096"
                                            aria-selected={
                                                openSection === "dataGovernance"
                                            }
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden rounded-2xl outline-none transition-[background-color] data-[hovered]:bg-gray-100 data-[hovered]:theme-tech:bg-gray-700 data-[hovered]:theme-product:bg-white ${openSection === "dataGovernance" ? "bg-[#302E2D]" : ""}`}
                                            onClick={() =>
                                                toggleDropdown("dataGovernance")
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M19 3H20C20 2.44772 19.5523 2 19 2V3ZM19 21V22H20V21H19ZM19 17V18H20V17H19ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8V6ZM15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6V8ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12V10ZM12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10V12ZM7 4H19V2H7V4ZM18 3V21H20V3H18ZM19 20H7V22H19V20ZM6 19V5H4V19H6ZM7 20C6.44771 20 6 19.5523 6 19H4C4 20.6569 5.34315 22 7 22V20ZM7 2C5.34315 2 4 3.34315 4 5H6C6 4.44772 6.44772 4 7 4V2ZM18 12V17H20V12H18ZM19 16H7V18H19V16ZM7 22H10V20H7V22ZM7 16C5.34315 16 4 17.3431 4 19H6C6 18.4477 6.44772 18 7 18V16ZM9 8H15V6H9V8ZM9 12H12V10H9V12Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                    Data governance
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openSection ===
                                                        "dataGovernance"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openSection ===
                                                        "dataGovernance"
                                                            ? 1
                                                            : 0,
                                                }}
                                            >
                                                <div>
                                                    <p className="text-[4vw] body-s px-4 pb-5 pt-2 md:p-4 md:pt-2 lg:px-6 lg:py-4 text-white lg:text-[0.8vw]">
                                                        Your data is only used
                                                        for your company’s
                                                        agent. We don’t use your
                                                        data to train models,
                                                        and we use industry
                                                        standard best practices
                                                        to ensure your data is
                                                        secure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Privacy Section */}
                                        <div
                                            tabIndex="-1"
                                            data-key="f22d29ca4cc1"
                                            id="react-aria-:Rjaf6bpla:-tab-f22d29ca4cc1"
                                            aria-selected={
                                                openSection === "privacy"
                                            }
                                            role="tab"
                                            className={`group cursor-pointer overflow-hidden rounded-2xl outline-none transition-[background-color] data-[hovered]:bg-gray-100 data-[hovered]:theme-tech:bg-gray-700 data-[hovered]:theme-product:bg-white ${openSection === "privacy" ? "bg-[#302E2D]" : ""}`}
                                            onClick={() =>
                                                toggleDropdown("privacy")
                                            }
                                        >
                                            <h3 className="body-m md:body-l text-white">
                                                <span className="flex gap-2 px-4 py-4 md:px-4 lg:px-6">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6 shrink-0 lg:mt-1"
                                                    >
                                                        <path
                                                            d="M19 11H21M19 11L18 4H6L5 11M19 11H5M3 11H5M9.99144 16.7717C9.87481 15.2215 8.58005 14 7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17C10 16.9232 9.99711 16.8471 9.99144 16.7717ZM9.99144 16.7717C11.1308 15.7429 12.8691 15.7428 14.0086 16.7713M14.0086 16.7713C14.0029 16.8468 14 16.9231 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.4201 14 14.1254 15.2213 14.0086 16.7713Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                    Privacy
                                                </span>
                                            </h3>
                                            <div
                                                className="overflow-hidden"
                                                style={{
                                                    height:
                                                        openSection ===
                                                        "privacy"
                                                            ? "auto"
                                                            : "0px",
                                                    opacity:
                                                        openSection ===
                                                        "privacy"
                                                            ? 1
                                                            : 0,
                                                }}
                                            >
                                                <div>
                                                    <p className="body-s px-4 pb-5 pt-2 md:p-4 md:pt-2 lg:px-6 lg:py-4">
                                                        Personally identifiable
                                                        information is
                                                        automatically encrypted
                                                        and masked.
                                                    </p>
                                                </div>
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
    );
};

export default SafeAndSecure;
