/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <Image
                    src="/public/assets/Images/logo_company.png"
                    alt="Website Logo"
                    width={40}
                    height={40}
                    className="mr-2"
                />
                <h1 className="text-xl font-bold">Your Website Name</h1>{" "}
                {/* Website name */}
            </div>
        </header>
    );
};

export default Header;
