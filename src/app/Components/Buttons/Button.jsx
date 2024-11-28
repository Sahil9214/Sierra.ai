import React from "react";

const Button = ({ name }) => {
    return (
        <div>
            <a
                class="body-s inline-flex items-center justify-between rounded-full outline-none transition cursor-pointer disabled:cursor-not-allowed border border-gray-300 text-gray-400 group-hover:border-green-500 hover:border-green-500 hover:text-green-500 group-hover:text-green-500 focus-visible:border-yellow active:border-green-300 active:text-green-300 gap-6 py-3 md:py-2 theme-tech:text-white theme-tech:border-white theme-tech:hover:text-gray-200 theme-platform:border-gray-300 theme-platform:hover:border-green-500 theme-platform:focus-visible:border-yellow theme-tech:hover:border-gray-200 theme-tech:focus-visible:border-yellow theme-tech:focus-visible:text-yellow disabled:border-gray-200 disabled:text-gray-300 px-4 mt-4 lg:mt-6"
                href="#"
            >
                {name}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="rotate-90 h-5 w-5"
                >
                    <path
                        d="M6 10L12 4L18 10M12 5V20"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </a>
        </div>
    );
};

export default Button;
