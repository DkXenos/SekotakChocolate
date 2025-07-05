'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <div ref={menuRef}>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#065598] border-b-2" style={{borderColor: '#FFECBA'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Left: Hamburger Menu */}
                        <div className="flex-1 flex justify-start">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 text-2xl font-bold"
                                aria-label="Toggle menu"
                            >
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    {isMenuOpen ? (
                                        <>
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </>
                                    ) : (
                                        <>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <line x1="3" y1="12" x2="21" y2="12"></line>
                                            <line x1="3" y1="18" x2="21" y2="18"></line>
                                        </>
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Center: Logo */}
                        <div className="flex-1 flex justify-center">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/logo/sekotak.svg"
                                    alt="Sekotak Chocolate"
                                    className="h-10 w-auto"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                />
                            </div>
                        </div>

                        {/* Right: Empty placeholder for balance */}
                        <div className="flex-1"></div>
                    </div>
                </div>
            </nav>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white flex flex-col items-center justify-start pt-12 z-40" style={{top: '5rem'}}>
                    <div className="text-center space-y-6">
                        <a href="/" className="block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Home</a>
                        <a href="/Product" className="block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Our Chocolate</a>
                        <a href="#" className="block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Our Story</a>
                        <a href="#" className="block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Sustainability</a>
                        <a href="#" className="block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Contact Us</a>
                        <a href="#" className="block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">FAQ</a>
                    </div>
                </div>
            )}
        </div>
    );
}