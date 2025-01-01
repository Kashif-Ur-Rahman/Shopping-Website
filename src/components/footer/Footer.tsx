"use client";

import React, { useEffect, useState } from "react";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto text-center flex flex-col lg:flex-row items-center justify-between">

                <h2 className="text-4xl bg-gradient-to-r from-[#69E6CD] to-[#e4e709] text-transparent bg-clip-text mb-4 lg:mb-0">
                    Shopping Hub
                </h2>

                <div className="flex flex-wrap justify-center gap-6 text-xl font-medium mb-4 lg:mb-0">
                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">
                        Home
                    </a>
                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/categories">
                        Categories
                    </a>
                    <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">
                        Products
                    </a>
                </div>

                <p className="text-xl text-center">
                    © {currentYear ?? ""} Shopping Hub. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
