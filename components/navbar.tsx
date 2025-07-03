'use client';
import Image from 'next/image';

import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);

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

    useGSAP(() => {
        const top = iconRef.current?.querySelector('.top-line');
        const middle = iconRef.current?.querySelector('.middle-line');
        const bottom = iconRef.current?.querySelector('.bottom-line');

        if (!top || !middle || !bottom) return;

        gsap.set([top, middle, bottom], { transformOrigin: "50% 50%" });

        timeline.current = gsap.timeline({ paused: true })
            .to(top, { y: 6, rotation: 45, duration: 0.3 })
            .to(middle, { opacity: 0, duration: 0.3 }, "<")
            .to(bottom, { y: -6, rotation: -45, duration: 0.3 }, "<");

    }, { scope: iconRef });

    useEffect(() => {
        if (isMenuOpen) {
            timeline.current?.play();
        } else {
            timeline.current?.reverse();
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#065598] border-b-2" style={{borderColor: '#FFECBA'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Left: Hamburger Menu */}
                        <div className="flex-1 flex justify-start">
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 text-2xl font-bold"
                                    style={{backgroundColor: '#065598', color: '#C3170E'}}
                                    aria-label="Toggle menu"
                                >
                                    <svg ref={iconRef} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line className="top-line" x1="3" y1="6" x2="21" y2="6"></line>
                                        <line className="middle-line" x1="3" y1="12" x2="21" y2="12"></line>
                                        <line className="bottom-line" x1="3" y1="18" x2="21" y2="18"></line>
                                    </svg>
                                </button>

                            {/* Dropdown Menu */}
                            {isMenuOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-3xl shadow-xl border-2 overflow-hidden" 
                                     style={{borderColor: '#FFDE6A'}}>
                                    <div className="p-6 space-y-3">
                                        <a href="#" className="block w-full text-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105" 
                                           style={{color: '#065598', backgroundColor: '#FFDE6A'}}>
                                            Home
                                        </a>
                                        <a href="#" className="block w-full text-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 border-2" 
                                           style={{color: '#065598', borderColor: '#065598'}}
                                           onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#065598'; e.currentTarget.style.color = 'white'; }}
                                           onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#065598'; }}>
                                            Our Chocolate
                                        </a>
                                        <a href="#" className="block w-full text-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 border-2" 
                                           style={{color: '#065598', borderColor: '#065598'}}
                                           onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#065598'; e.currentTarget.style.color = 'white'; }}
                                           onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#065598'; }}>
                                            Our Story
                                        </a>
                                        <a href="#" className="block w-full text-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 border-2" 
                                           style={{color: '#065598', borderColor: '#065598'}}
                                           onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#065598'; e.currentTarget.style.color = 'white'; }}
                                           onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#065598'; }}>
                                            Sustainability
                                        </a>
                                        <a href="#" className="block w-full text-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 border-2" 
                                           style={{color: '#065598', borderColor: '#065598'}}
                                           onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#065598'; e.currentTarget.style.color = 'white'; }}
                                           onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#065598'; }}>
                                            Contact Us
                                        </a>
                                        <a href="#" className="block w-full text-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 border-2" 
                                           style={{color: '#065598', borderColor: '#065598'}}
                                           onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#065598'; e.currentTarget.style.color = 'white'; }}
                                           onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#065598'; }}>
                                            FAQ
                                        </a>
                                    </div>
                                </div>
                            )}
                            </div>
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
        </>
    );
}