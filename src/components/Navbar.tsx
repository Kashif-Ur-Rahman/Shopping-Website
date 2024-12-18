"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className='border-b border-gray-200 '>
            {/* Desktop Navbar */}
            <div className='container mx-auto flex justify-between items-center py-4 px-4 lg:px-0 ml-[472px]'>

                {/* Menu Button (Mobile View) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='block lg:hidden text-3xl text-blackish focus:outline-none'
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Links - Hidden on Mobile */}
                <div className='hidden lg:flex gap-10 font-medium text-blackish'>
                    <Link className='navbar_link relative' href='#'>
                        Home
                    </Link>
                    <Link className='navbar_link relative' href='#'>
                        Categories
                    </Link>
                    <Link className='navbar_link relative' href='#'>
                        Men&apos;s
                    </Link>
                    <Link className='navbar_link relative' href='#'>
                        Women&apos;s
                    </Link>
                    <Link className='navbar_link relative' href='#'>
                        Jewelry
                    </Link>
                    <Link className='navbar_link relative' href='#'>
                        Perfume
                    </Link>
                    <Link className='navbar_link relative' href='#'>
                        Blog
                    </Link>
                    <Link className='navbar_link relative' href='#'>
                        Hot Offers
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='lg:hidden bg-gray-100'>
                    <div className='flex flex-col gap-4 py-4 px-4 font-medium text-blackish'>
                        <Link
                            className='navbar_link relative hover:text-primary transition-all'
                            href='#'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            className='navbar_link relative hover:text-primary transition-all'
                            href='#'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Categories
                        </Link>
                        <Link
                            className='navbar_link relative hover:text-primary transition-all'
                            href='#'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Men&apos;s
                        </Link>
                        <Link
                            className='navbar_link relative hover:text-primary transition-all'
                            href='#'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Women&apos;s
                        </Link>
                        <Link
                            className='navbar_link relative hover:text-primary transition-all'
                            href='#'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Jewelry
                        </Link>
                        <Link
                            className='navbar_link relative hover:text-primary transition-all'
                            href='#'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Perfume
                        </Link>
                        <Link
                            className='navbar_link relative hover:text-primary transition-all'
                            href='#'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            className='navbar_link relative hover:text-primary transition-all'
                            href='#'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hot Offers
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
