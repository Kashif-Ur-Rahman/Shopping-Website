"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Use `usePathname` for the current route
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // Get the current path

    // Utility function to check if the route is active
    const isActiveRoute = (path: string) => pathname === path;

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/categories", label: "Categories" },
        { href: "/mens", label: "Men's" },
        { href: "/womens", label: "Women's" },
        { href: "/jewelry", label: "Jewelry" },
        { href: "/perfume", label: "Perfume" },
        { href: "/blog", label: "Blog's" },
        { href: "/hot-offers", label: "Hot Offers" },
    ];

    return (
        <nav className="border-b border-gray-200">
            {/* Desktop Navbar */}
            <div className="ml-[452px] flex justify-between items-center py-4 px-4 lg:px-0">
                {/* Menu Button (Mobile View) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block lg:hidden text-3xl text-blackish focus:outline-none"
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Links - Hidden on Mobile */}
                <div className="hidden lg:flex gap-10 font-medium text-blackish">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`navbar_link relative ${isActiveRoute(href) ? "text-red-500  font-semibold" : ""
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-gray-100">
                    <div className="flex flex-col gap-4 py-4 px-4 font-medium text-blackish">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`navbar_link relative ${isActiveRoute(href) ? "text-red-500 font-semibold" : ""
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
