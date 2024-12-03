/* eslint-disable prettier/prettier */
import React from "react";

const Toggler = ({ isOpen, content }) => {
    return (
        <div
            className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
            <p className="body-s px-4 pb-5 pt-2 md:p-4 md:pt-2 lg:px-6 lg:py-4">
                {content}
            </p>
        </div>
    );
};

export default Toggler;
