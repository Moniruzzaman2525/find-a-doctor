"use client"
// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';  // Import Menu icon from lucide-react

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg z-10 py-4">
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-semibold text-blue-500">bd</div>
                    <div className="text-xl font-semibold text-blue-600">DOCTOR</div>
                </div>

                {/* Navbar Links */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-900 hover:text-blue-600">Home</Link>
                    <Link href="/about" className="text-gray-900 hover:text-blue-600">About us</Link>
                    <Link href="/doctors" className="text-gray-900 hover:text-blue-600">Doctors</Link>
                    <Link href="/search" className="text-gray-900 hover:text-blue-600">Search</Link>
                    <Link href="/newsfeed" className="text-gray-900 hover:text-blue-600">Newsfeed</Link>
                    <Link href="/contact" className="text-gray-900 hover:text-blue-600">Contact</Link>
                    <button className="text-blue-600 hover:text-blue-800">বাংলা</button>
                </div>

                {/* Hamburger for Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-900 hover:text-blue-600">
                    <Menu size={24} /> {/* Lucide Menu icon */}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/50 backdrop-blur-lg py-4">
                    <div className="flex flex-col space-y-4 px-6">
                        <Link href="/" className="text-gray-900 hover:text-blue-600">Home</Link>
                        <Link href="/about" className="text-gray-900 hover:text-blue-600">About us</Link>
                        <Link href="/doctors" className="text-gray-900 hover:text-blue-600">Doctors</Link>
                        <Link href="/search" className="text-gray-900 hover:text-blue-600">Search</Link>
                        <Link href="/newsfeed" className="text-gray-900 hover:text-blue-600">Newsfeed</Link>
                        <Link href="/contact" className="text-gray-900 hover:text-blue-600">Contact</Link>
                        <button className="text-blue-600 hover:text-blue-800">বাংলা</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

