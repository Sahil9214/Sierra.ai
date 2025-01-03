/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import { usePathname } from "next/navigation";

import {
    ABOUT,
    CAREERS,
    COMPANY,
    CONVERSATIONAL_AI,
    COOKIE_PREFERENCES,
    CUSTOMERS,
    LEARN_MORE,
    LINKEDIN,
    PLATFORM,
    PRIVACY_POLICY,
    PRODUCT,
    SEE_WHAT_SIERRA_CAN_DO_FOR_YOU,
    SEE_WHAT_SIERRA_CAN_DO_FOR_YOU_DESCRIPTION,
    VOICE,
} from "../../utils/Constant";

const Footer = () => {
    const pathname = usePathname();

    return (
        <div>
            {pathname === "/LearnMore" ? (
                <div></div>
            ) : (
                <section
                    className="theme-base relative bg-white py-12 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18 text-black"
                    style={{ zIndex: 1 }}
                >
                    <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 ">
                        <div className="w-full sm:mx-auto max-w-5xl">
                            <h2 className="headline mb-8 w-full text-center">
                                {SEE_WHAT_SIERRA_CAN_DO_FOR_YOU}
                            </h2>
                            <p className="body-l mx-auto mb-8 w-[100%] sm:w-[80%] md:w-[60%] max-w-prose text-center md:mb-18 ">
                                {SEE_WHAT_SIERRA_CAN_DO_FOR_YOU_DESCRIPTION}
                            </p>
                            <div className="flex justify-center">
                                <a
                                    className="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed bg-green-800 text-white hover:bg-transparent hover:text-green-500 border border-green-800 focus-visible:bg-transparent focus-visible:border-yellow focus-visible:text-yellow gap-12 px-4 py-3 md:px-8 md:py-4 active:bg-green-300 active:border-green-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white"
                                    href="/LearnMore"
                                >
                                    {LEARN_MORE}
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
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <FooterPart />
        </div>
    );
};

export default Footer;
const FooterPart = () => {
    return (
        <footer>
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 flex h-full flex-col justify-between gap-6 md:gap-[198px] lg:gap-[293px]">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 gap-y-8 pt-6 lg:pt-14">
                    <div className="col-span-12 hidden md:col-span-3 md:block lg:col-start-2">
                        <a
                            aria-label="Homepage"
                            className="block text-green-500 outline-none transition-[color] focus-visible:text-yellow active:text-green-300 theme-tech:text-white theme-tech:focus-visible:text-yellow md:pl-2 lg:pl-0"
                            href="/"
                        >
                            <svg
                                viewBox="0 0 59 67"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[40px]"
                            >
                                <path
                                    d="M6.79411 33.4373C3.92187 33.9958 -1.81912 38.059 0.566563 50.1542C9.84075 58.2701 16.227 55.3257 18.1471 53.1161C17.1949 55.8859 17.8401 62.8935 29.5 66.8729C41.1599 62.8935 41.8051 55.8859 40.8529 53.1161C42.773 55.3257 49.161 58.2701 58.4334 50.1542C60.8191 38.059 55.0781 33.9958 52.2059 33.4373C55.0781 32.8788 60.8191 28.8139 58.4334 16.7187C49.1592 8.6028 42.773 11.5472 40.8529 13.7568C41.8051 10.9869 41.1599 3.97938 29.5 0C17.8401 3.97938 17.1949 10.9869 18.1471 13.7568C16.227 11.5472 9.84075 8.6028 0.566563 16.7187C-1.81912 28.8139 3.92187 32.8788 6.79411 33.4373ZM53.2243 19.7276C55.7199 24.0543 55.0816 29.5626 51.6879 33.1999C49.4086 26.7457 45.5912 25.222 42.4242 25.9672C44.653 23.5953 45.2441 19.5252 40.7989 14.3223C45.6435 13.1983 50.7288 15.3992 53.2261 19.7259L53.2243 19.7276ZM38.823 33.4373C40.1798 32.9486 43.066 31.7705 42.126 26.4175C45.1622 27.3775 47.2688 30.2311 47.2688 33.4373C47.2688 36.6418 45.1622 39.4971 42.126 40.4571C43.066 35.1041 40.1798 33.9277 38.823 33.4373ZM16.8722 40.4571C13.8361 39.4971 11.7294 36.6435 11.7294 33.4373C11.7294 30.2329 13.8361 27.3775 16.8722 26.4175C15.934 31.7705 18.8185 32.9469 20.1752 33.4373C18.8185 33.926 15.9323 35.1041 16.8722 40.4571ZM24.8385 25.3564C23.7363 24.4261 21.2757 22.5114 17.1129 26.0021C16.4258 22.8902 17.8419 19.6369 20.6147 18.0346C23.3875 16.4324 26.9103 16.8304 29.2593 18.9824C24.1584 20.8446 24.5821 23.9339 24.8367 25.3546L24.8385 25.3564ZM17.1129 40.8725C21.2757 44.3632 23.7363 42.4503 24.8385 41.5182C24.5839 42.939 24.1584 46.0282 29.2611 47.8905C26.912 50.0425 23.3893 50.4404 20.6165 48.8382C17.8436 47.236 16.4258 43.9827 17.1147 40.8707L17.1129 40.8725ZM25.1105 41.0487C23.0789 41.6142 20.9757 40.691 19.9695 38.9456C18.9632 37.2003 19.2161 34.9156 20.7211 33.4373C19.2161 31.9607 18.9632 29.6743 19.9695 27.929C20.9757 26.1837 23.0806 25.2604 25.1105 25.8259C25.6355 23.7821 27.4875 22.4207 29.5017 22.4207C31.516 22.4207 33.3663 23.7821 33.8929 25.8259C35.9246 25.2604 38.0278 26.1837 39.034 27.929C40.0403 29.6743 39.7874 31.959 38.2824 33.4373C39.7874 34.9139 40.0403 37.2003 39.034 38.9456C38.0278 40.691 35.9229 41.6142 33.8929 41.0487C33.368 43.0925 31.516 44.4539 29.5017 44.4539C27.4875 44.4539 25.6372 43.0925 25.1105 41.0487ZM29.7407 18.9841C32.0897 16.8321 35.6124 16.4342 38.3853 18.0364C41.1581 19.6386 42.5759 22.8919 41.8871 26.0039C37.7243 22.5132 35.2637 24.4261 34.1615 25.3581C34.4161 23.9374 34.8416 20.8481 29.7389 18.9859L29.7407 18.9841ZM34.1632 41.52C35.2654 42.4503 37.7261 44.3649 41.8888 40.8742C42.5759 43.9862 41.1599 47.2395 38.387 48.8417C35.6142 50.4439 32.0915 50.046 29.7424 47.894C34.8434 46.0317 34.4196 42.9424 34.165 41.5217L34.1632 41.52ZM29.5017 6.02144C34.4946 6.02144 38.9416 9.33061 40.3908 14.0902C33.6662 12.8388 30.44 15.3852 29.5017 18.5024C28.5635 15.3852 25.3355 12.837 18.6109 14.0884C20.0619 9.32886 24.5089 6.01969 29.5 6.01969L29.5017 6.02144ZM7.31031 33.1999C3.91664 29.5626 3.27662 24.0543 5.77392 19.7276C8.26947 15.4009 13.3565 13.2 18.2011 14.324C13.7559 19.5269 14.347 23.5971 16.5758 25.969C13.4088 25.2237 9.59137 26.7457 7.31206 33.2017L7.31031 33.1999ZM7.31031 33.6729C9.58962 40.1272 13.4071 41.6491 16.574 40.9039C14.3453 43.2758 13.7541 47.3459 18.1994 52.5488C13.3548 53.6728 8.26947 51.4719 5.77217 47.1452C3.27662 42.8185 3.9149 37.3102 7.30857 33.6729H7.31031ZM29.4983 60.8549C24.5054 60.8549 20.0584 57.5475 18.6092 52.7862C25.3338 54.0376 28.56 51.4894 29.5 48.3722C30.4382 51.4894 33.6645 54.0376 40.3891 52.7862C38.9381 57.5457 34.4911 60.8549 29.5 60.8549H29.4983ZM53.2243 47.1452C50.7288 51.4719 45.6418 53.6728 40.7971 52.5488C45.2424 47.3459 44.6512 43.2758 42.4225 40.9039C45.5894 41.6491 49.4069 40.1272 51.6862 33.6729C55.0799 37.3102 55.7199 42.8185 53.2226 47.1452H53.2243ZM33.8895 35.9733V30.8996L29.4983 28.3618L25.1071 30.8996V35.9733L29.4983 38.511L33.8895 35.9733Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="col-span-12 grid grid-cols-subgrid gap-y-8 md:col-span-9 md:gap-y-18 lg:col-span-8">
                        <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
                            <h3 className="text-gray-500  theme-tech:text-gray-100">
                                {CONVERSATIONAL_AI}
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/product"
                                    >
                                        {PRODUCT}
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/platform"
                                    >
                                        {PLATFORM}
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/voice"
                                    >
                                        {VOICE}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
                            <h3
                                className="text-gray-500 
                             theme-tech:text-gray-100"
                            >
                                {CUSTOMERS}
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/customers"
                                    >
                                        Customer Stories
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
                            <h3
                                className="text-gray-500 
                             theme-tech:text-gray-100"
                            >
                                {COMPANY}
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/about"
                                    >
                                        {ABOUT}
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/blog"
                                    >
                                        Blog &amp; Resources
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/careers"
                                    >
                                        {CAREERS}
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/terms-and-conditions"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="/privacy-policy"
                                    >
                                        {PRIVACY_POLICY}
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="#manage-cookies"
                                    >
                                        {COOKIE_PREFERENCES}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
                            <h3
                                className="text-gray-500 
                             theme-tech:text-gray-100"
                            >
                                Social
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li className="body-s">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="https://www.linkedin.com/company/sierra"
                                    >
                                        {LINKEDIN}
                                    </a>
                                </li>
                                <li className="body-s">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="before relative py-1 text-gray-500 outline-none transition-colors duration-200 hover:text-green-500 focus-visible:text-yellow focus-visible:before:absolute focus-visible:before:-left-2 focus-visible:before:top-0 focus-visible:before:h-full focus-visible:before:w-[calc(100%+1rem)] focus-visible:before:rounded-full focus-visible:before:border focus-visible:before:border-yellow focus-visible:before:px-2 focus-visible:before:content-[''] active:text-green-300 theme-tech:focus-visible:text-yellow theme-tech:text-gray-100 theme-tech:hover:text-gray-300"
                                        href="https://x.com/sierraplatform?s=20"
                                    >
                                        X
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 mt-32 md:hidden">
                        <a
                            aria-label="Homepage"
                            className="text-green-400 outline-none focus-visible:text-yellow active:text-green-300 theme-tech:text-white"
                            href="/"
                        >
                            <svg
                                viewBox="0 0 59 67"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[40px]"
                            >
                                <path
                                    d="M6.79411 33.4373C3.92187 33.9958 -1.81912 38.059 0.566563 50.1542C9.84075 58.2701 16.227 55.3257 18.1471 53.1161C17.1949 55.8859 17.8401 62.8935 29.5 66.8729C41.1599 62.8935 41.8051 55.8859 40.8529 53.1161C42.773 55.3257 49.161 58.2701 58.4334 50.1542C60.8191 38.059 55.0781 33.9958 52.2059 33.4373C55.0781 32.8788 60.8191 28.8139 58.4334 16.7187C49.1592 8.6028 42.773 11.5472 40.8529 13.7568C41.8051 10.9869 41.1599 3.97938 29.5 0C17.8401 3.97938 17.1949 10.9869 18.1471 13.7568C16.227 11.5472 9.84075 8.6028 0.566563 16.7187C-1.81912 28.8139 3.92187 32.8788 6.79411 33.4373ZM53.2243 19.7276C55.7199 24.0543 55.0816 29.5626 51.6879 33.1999C49.4086 26.7457 45.5912 25.222 42.4242 25.9672C44.653 23.5953 45.2441 19.5252 40.7989 14.3223C45.6435 13.1983 50.7288 15.3992 53.2261 19.7259L53.2243 19.7276ZM38.823 33.4373C40.1798 32.9486 43.066 31.7705 42.126 26.4175C45.1622 27.3775 47.2688 30.2311 47.2688 33.4373C47.2688 36.6418 45.1622 39.4971 42.126 40.4571C43.066 35.1041 40.1798 33.9277 38.823 33.4373ZM16.8722 40.4571C13.8361 39.4971 11.7294 36.6435 11.7294 33.4373C11.7294 30.2329 13.8361 27.3775 16.8722 26.4175C15.934 31.7705 18.8185 32.9469 20.1752 33.4373C18.8185 33.926 15.9323 35.1041 16.8722 40.4571ZM24.8385 25.3564C23.7363 24.4261 21.2757 22.5114 17.1129 26.0021C16.4258 22.8902 17.8419 19.6369 20.6147 18.0346C23.3875 16.4324 26.9103 16.8304 29.2593 18.9824C24.1584 20.8446 24.5821 23.9339 24.8367 25.3546L24.8385 25.3564ZM17.1129 40.8725C21.2757 44.3632 23.7363 42.4503 24.8385 41.5182C24.5839 42.939 24.1584 46.0282 29.2611 47.8905C26.912 50.0425 23.3893 50.4404 20.6165 48.8382C17.8436 47.236 16.4258 43.9827 17.1147 40.8707L17.1129 40.8725ZM25.1105 41.0487C23.0789 41.6142 20.9757 40.691 19.9695 38.9456C18.9632 37.2003 19.2161 34.9156 20.7211 33.4373C19.2161 31.9607 18.9632 29.6743 19.9695 27.929C20.9757 26.1837 23.0806 25.2604 25.1105 25.8259C25.6355 23.7821 27.4875 22.4207 29.5017 22.4207C31.516 22.4207 33.3663 23.7821 33.8929 25.8259C35.9246 25.2604 38.0278 26.1837 39.034 27.929C40.0403 29.6743 39.7874 31.959 38.2824 33.4373C39.7874 34.9139 40.0403 37.2003 39.034 38.9456C38.0278 40.691 35.9229 41.6142 33.8929 41.0487C33.368 43.0925 31.516 44.4539 29.5017 44.4539C27.4875 44.4539 25.6372 43.0925 25.1105 41.0487ZM29.7407 18.9841C32.0897 16.8321 35.6124 16.4342 38.3853 18.0364C41.1581 19.6386 42.5759 22.8919 41.8871 26.0039C37.7243 22.5132 35.2637 24.4261 34.1615 25.3581C34.4161 23.9374 34.8416 20.8481 29.7389 18.9859L29.7407 18.9841ZM34.1632 41.52C35.2654 42.4503 37.7261 44.3649 41.8888 40.8742C42.5759 43.9862 41.1599 47.2395 38.387 48.8417C35.6142 50.4439 32.0915 50.046 29.7424 47.894C34.8434 46.0317 34.4196 42.9424 34.165 41.5217L34.1632 41.52ZM29.5017 6.02144C34.4946 6.02144 38.9416 9.33061 40.3908 14.0902C33.6662 12.8388 30.44 15.3852 29.5017 18.5024C28.5635 15.3852 25.3355 12.837 18.6109 14.0884C20.0619 9.32886 24.5089 6.01969 29.5 6.01969L29.5017 6.02144ZM7.31031 33.1999C3.91664 29.5626 3.27662 24.0543 5.77392 19.7276C8.26947 15.4009 13.3565 13.2 18.2011 14.324C13.7559 19.5269 14.347 23.5971 16.5758 25.969C13.4088 25.2237 9.59137 26.7457 7.31206 33.2017L7.31031 33.1999ZM7.31031 33.6729C9.58962 40.1272 13.4071 41.6491 16.574 40.9039C14.3453 43.2758 13.7541 47.3459 18.1994 52.5488C13.3548 53.6728 8.26947 51.4719 5.77217 47.1452C3.27662 42.8185 3.9149 37.3102 7.30857 33.6729H7.31031ZM29.4983 60.8549C24.5054 60.8549 20.0584 57.5475 18.6092 52.7862C25.3338 54.0376 28.56 51.4894 29.5 48.3722C30.4382 51.4894 33.6645 54.0376 40.3891 52.7862C38.9381 57.5457 34.4911 60.8549 29.5 60.8549H29.4983ZM53.2243 47.1452C50.7288 51.4719 45.6418 53.6728 40.7971 52.5488C45.2424 47.3459 44.6512 43.2758 42.4225 40.9039C45.5894 41.6491 49.4069 40.1272 51.6862 33.6729C55.0799 37.3102 55.7199 42.8185 53.2226 47.1452H53.2243ZM33.8895 35.9733V30.8996L29.4983 28.3618L25.1071 30.8996V35.9733L29.4983 38.511L33.8895 35.9733Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="body-s col-span-11 mb-6 text-gray-500 theme-tech:text-gray-100 md:pb-6 lg:col-start-2">
                        © 2024 Sierra
                    </div>
                </div>
            </div>
        </footer>
    );
};
