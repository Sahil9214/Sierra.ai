/* eslint-disable prettier/prettier */
"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Logo from "../Logo/Logo";

import {
    PLATFORM,
    PRODUCT,
    CUSTOMERS,
    COMPANY,
    LEARN_MORE,
} from "../../utils/Constant";
import Link from "next/link";

const Navbar = ({ color }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (!menuRef.current) return;

        if (isOpen) {
            gsap.fromTo(
                menuRef.current,
                {
                    opacity: 0,
                    scale: 0.95,
                    y: -20,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power3.out",
                },
            );
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: PRODUCT, href: "/Product" },
        { label: PLATFORM, href: "/Platform" },
        { label: CUSTOMERS, href: "/Customers" },
        { label: COMPANY, href: "/About" },
    ];

    return (
        <nav
            className="py-3 lg:py-6"
            style={{
                backgroundColor: color,
            }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 flex w-full items-center justify-between md:h-11 lg:px-6">
                <div className="relative flex w-full justify-between gap-16 md:justify-normal">
                    <div className="mx-auto max-w-screen-3xl px-4 flex w-full items-center justify-between md:h-11 lg:px-6">
                        {/* Main container with logo and menu items */}
                        <div className="flex items-center gap-16 flex-1">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Link href={"/"}>
                                    {" "}
                                    <Logo />
                                </Link>
                            </div>

                            {/* Desktop Menu Items - Now directly next to logo */}
                            <div className="hidden lg:flex items-center gap-12">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.label}
                                        className="text-gray-500 hover:text-green-500 transition-colors duration-200"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                aria-label="Menu"
                                aria-expanded={isOpen}
                                className="group flex h-8 w-8 flex-col items-center justify-center gap-[6px] outline-none"
                            >
                                <div
                                    className={`h-[2px] w-5 bg-gray-600 transition-all duration-300 ease-out ${
                                        isOpen ? "translate-y-2 rotate-45" : ""
                                    }`}
                                />

                                <div
                                    className={`h-[2px] w-5 bg-gray-600 transition-all duration-300 ease-out ${
                                        isOpen
                                            ? "-translate-y-2 -rotate-45"
                                            : ""
                                    }`}
                                />
                            </button>
                        </div>

                        {/* Learn More Button (Desktop) - Updated arrow direction */}
                        <div className="hidden lg:block">
                            <a
                                //className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-500 transition-colors duration-200"

                                className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border border-gray-600 text-gray-600 group-hover:border-green-500 hover:border-green-500 hover:text-green-500 group-hover:text-green-500 focus-visible:border-yellow active:border-green-300 active:text-green-300 gap-6 py-3 md:py-2 theme-tech:text-white theme-tech:border-white theme-tech:hover:text-gray-200 theme-platform:border-gray-300 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:hover:border-gray-200 theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4"
                                href="/LearnMore"
                            >
                                Learn more
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
                        </div>
                    </div>
                </div>
                {/* Mobile Menu Modal */}
                {isOpen && (
                    <div
                        ref={menuRef}
                        className="absolute right-1 top-1.5 z-20 overflow-hidden rounded-lg transition-[background-color] lg:!hidden bg-green-800 theme-tech:bg-white "
                    >
                        {/* Add Close Button */}
                        <button
                            onClick={toggleMenu}
                            className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                            >
                                <path
                                    d="M18 6L6 18M6 6l12 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <div className="flex flex-col gap-10 pb-3 pl-3 pr-[62px] pt-6 md:pr-[110px]">
                            <ul className="flex flex-col gap-1">
                                {menuItems.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            className="body-m group inline-flex h-6 items-center gap-4 rounded px-1 py-1 text-white outline-none focus-visible:text-yellow theme-tech:text-gray-500"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex">
                                <a
                                    className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border px-4 h-8 shrink-0 gap-4 border-white text-white hover:border-gray-200 hover:text-gray-200 theme-tech:border-gray-200 theme-tech:text-gray-500 theme-tech:hover:border-green-500 theme-tech:hover:text-green-500"
                                    href="/learn-more"
                                >
                                    {LEARN_MORE}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            d="M9 6L15 12L9 18"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
