"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const container = useRef(null);

    useGSAP(() => {
        const elements = gsap.utils.toArray(".animate-footer");

        gsap.from(elements, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: container });

    return (
        <footer ref={container} className="bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Mascot */}
                    <div className="md:col-span-3 flex justify-center md:justify-start animate-footer">
                        <Image src="/assets/section/Kucing.png" alt="Sekotak Chocolate Mascot" width={150} height={150} className="object-contain" />
                    </div>

                    {/* Links */}
                    <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div className="animate-footer">
                            <h3 className="font-bold text-lg mb-4">Our Chocolate</h3>
                            <ul className="space-y-2">
                                <li><Link href="/products" className="hover:underline">Chocolate Collection</Link></li>
                                <li><Link href="/products/nama" className="hover:underline">Nama Chocolate</Link></li>
                            </ul>
                        </div>
                        <div className="animate-footer">
                            <h3 className="font-bold text-lg mb-4">Info</h3>
                            <ul className="space-y-2">
                                <li><Link href="/story" className="hover:underline">Our Story</Link></li>
                                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Community */}
                    <div className="md:col-span-3 flex justify-center md:justify-end animate-footer">
                        <a href="#" className="inline-block border-2 border-black rounded-full px-5 py-3 text-center font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                            <div className="text-sm">Join the Community</div>
                            <div className="flex items-center justify-center gap-2 font-bold">
                                <span>@sekotak</span>
                                <i className="bi bi-instagram text-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    <p>&copy; 2024 Sekotak Chocolate. All Rights Reserved.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="hover:underline">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}