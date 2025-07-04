'use client';

import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    const menuOverlayRef = useRef<HTMLDivElement>(null);
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
        gsap.set(menuOverlayRef.current, { yPercent: -100 });
        gsap.set('.menu-item', { y: 30 });

        const top = iconRef.current?.querySelector('.top-line');
        const middle = iconRef.current?.querySelector('.middle-line');
        const bottom = iconRef.current?.querySelector('.bottom-line');

        if (!top || !middle || !bottom) return;

        gsap.set([top, middle, bottom], { transformOrigin: "50% 50%" });

        timeline.current = gsap.timeline({ paused: true })
            .to(menuOverlayRef.current, { yPercent: 0, duration: 0.3, ease: 'power3.inOut' })
            .to(top, { y: 6, rotation: 45, duration: 0.3 }, "<")
            .to(middle, { opacity: 0, duration: 0.3 }, "<")
            .to(bottom, { y: -6, rotation: -45, duration: 0.3 }, "<")
            .to('.menu-item', { y: 0, stagger: 0.05, ease: 'power3.out' }, "-=0.2");

    }, { scope: menuOverlayRef });

    useEffect(() => {
        if (isMenuOpen) {
            timeline.current?.timeScale(1).play();
            document.body.style.overflow = 'hidden';
        } else {
            timeline.current?.timeScale(1.5).reverse();
            document.body.style.overflow = 'auto';
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
                                    className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 text-2xl font-bold z-50"
                                    style={{backgroundColor: '#065598', color: '#C3170E'}}
                                    aria-label="Toggle menu"
                                >
                                    <svg ref={iconRef} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line className="top-line" x1="3" y1="6" x2="21" y2="6"></line>
                                        <line className="middle-line" x1="3" y1="12" x2="21" y2="12"></line>
                                        <line className="bottom-line" x1="3" y1="18" x2="21" y2="18"></line>
                                    </svg>
                                </button>
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
            {/* Dropdown Menu */}
            <div ref={menuOverlayRef} className="fixed inset-0 bg-white flex flex-col items-center justify-start pt-12 z-40" style={{top: '5rem'}}>
                <div className="text-center space-y-6">
                    <a href="#" className="menu-item block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Home</a>
                    <a href="#" className="menu-item block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Our Chocolate</a>
                    <a href="#" className="menu-item block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Our Story</a>
                    <a href="#" className="menu-item block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Sustainability</a>
                    <a href="#" className="menu-item block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">Contact Us</a>
                    <a href="#" className="menu-item block text-4xl font-serif text-gray-800 hover:text-[#065598] transition-colors duration-300">FAQ</a>
                </div>
            </div>
        </>
    );
}