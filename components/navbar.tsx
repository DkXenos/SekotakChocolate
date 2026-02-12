'use client';

import { useState, useEffect, useRef } from 'react';
import FlowingMenu from './FlowingMenu';

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
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                     className="transition-transform duration-300"
                                     style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
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
                        
                        <button onClick={() => window.location.href = '/'}>
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
                        </button>

                        {/* Right: Empty placeholder for balance */}
                        <div className="flex-1"></div>
                    </div>
                </div>
            </nav>

            {/* Flowing Menu */}
            <div 
                className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
                    isMenuOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-full pointer-events-none'
                }`} 
                style={{top: '5rem', height: 'calc(100vh - 5rem)'}}
            >
                <FlowingMenu 
                    items={[
                        { link: "/", text: "Home", image: "/assets/omg/aset1.jpg" },
                        { link: "/Product", text: "Our Chocolate", image: "/assets/products/almond.png" },
                        { link: "/Story", text: "Our Story", image: "/assets/omg/aset2.jpg" },
                        { link: "/Contacts", text: "Contact Us", image: "/assets/omg/aset3.jpg" },
                        { link: "/FAQ", text: "FAQ", image: "/assets/products/matcha.png" }
                    ]}
                    speed={15}
                    textColor="#065598"
                    bgColor="#ffffff"
                    marqueeBgColor="#FFECBA"
                    marqueeTextColor="#065598"
                    borderColor="#ffffff"
                />
            </div>
        </div>
    );
}