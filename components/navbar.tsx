'use client';

import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#065598] backdrop-blur-md border-b-2" style={{borderColor: '#FFECBA'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left: Hamburger Menu */}
                    <div className="flex-1 flex justify-start">
                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 text-2xl"
                                style={{backgroundColor: '#f5f5f5', color: '#065598'}}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
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

            {/* Overlay for menu */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-20 z-40"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
    );
}