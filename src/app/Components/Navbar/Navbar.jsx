/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="lg:w-[98vw] top-0 left-0 right-0 z-50 py-2 lg:py-4 mx-auto">
            <div className="max-w mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Left Items */}
                    <div className="flex items-center space-x-8">
                        <div className="flex-shrink-0">
                            <img
                                className="h-9 lg:h-11 object-cover"
                                src="/assets/Images/logo_company.png"
                                alt="company_logo"
                                layout="responsive"
                            />
                        </div>
                        {/* Desktop Menu Items */}
                        <div
                            className="hidden lg:flex items-center space-x-14"
                            style={{
                                marginLeft:
                                    "calc(5rem * (1 - var(--tw-space-x-reverse)))",
                            }}
                        >
                            <a
                                className='before relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:text-white theme-tech:hover:text-gray-200 theme-tech:focus-visible:text-yellow'
                                href="/customers"
                            >
                                Product
                            </a>
                            <a
                                className='before relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:text-white theme-tech:hover:text-gray-200 theme-tech:focus-visible:text-yellow'
                                href="/platform"
                            >
                                Platform
                            </a>
                            <a
                                className='before relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:text-white theme-tech:hover:text-gray-200 theme-tech:focus-visible:text-yellow'
                                href="/customers"
                            >
                                Customers
                            </a>
                            <a
                                className='before relative py-1 text-gray-400 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[""] active:text-green-300 theme-tech:text-white theme-tech:hover:text-gray-200 theme-tech:focus-visible:text-yellow'
                                href="/company"
                            >
                                Company
                            </a>
                        </div>
                    </div>

                    {/* Hamburger Menu Button for Mobile */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-400 hover:text-green-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Learn More Button */}
                    <ul className="hidden shrink-0 gap-8 lg:flex">
                        <li>
                            <a
                                className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border border-gray-300 text-gray-400 group-hover:border-green-500 hover:border-green-500 hover:text-green-500 group-hover:text-green-500 focus-visible:border-yellow active:border-green-300 active:text-green-300 gap-6 py-3 md:py-2 theme-tech:text-white theme-tech:border-white theme-tech:hover:text-gray-200 theme-platform:border-gray-300 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:hover:border-gray-200 theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4"
                                href="/about"
                            >
                                Learn More
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
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Modal */}
            <div
                className={`fixed top-0 right-0 h-auto transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full opacity-0"
                } `}
                style={{
                    minWidth: "300px",
                    backgroundColor: "rgb(0 104 56 / var(--tw-bg-opacity))",
                    color: "white",
                    zIndex: 1000,
                    padding: "1rem",
                    marginTop: "1rem",
                    marginRight: "1rem",
                    borderRadius: "0.75rem",
                    overflow: "hidden", // Added to ensure the menu is fully hidden when not open
                }}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                        <a href="#" className="text-white text-lg font-medium">
                            Product
                        </a>
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-200"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <a href="#" className="text-white text-lg font-medium">
                            Platform
                        </a>
                        <a href="#" className="text-white text-lg font-medium">
                            Customers
                        </a>
                        <a href="#" className="text-white text-lg font-medium">
                            Company
                        </a>
                        <div className="pt-4">
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 border border-white rounded-full text-sm font-medium text-white hover:bg-white hover:text-green-800"
                            >
                                Learn more
                                <svg
                                    className="ml-2 h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
