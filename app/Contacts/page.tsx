'use client';

import React from 'react';

// Note: This component uses Font Awesome icons (fab/fas classes). 
// Please ensure Font Awesome is included in your project for icons to display correctly.
// You can add it via a script tag in your app/layout.tsx file.

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold font-serif" style={{ color: '#065598' }}>
                        Contact Us
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Have a question or just want to talk about chocolate? We&apos;re here for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* General Inquiries */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                        <i className="bi bi-envelope-heart text-5xl mb-4" style={{ color: '#065598' }}></i>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">General Inquiries</h2>
                        <p className="text-gray-600 mb-4">For questions, feedback, or just to say hello.</p>
                        <a href="mailto:contact@sekotakchocolate.com" className="font-semibold text-lg text-blue-600 hover:underline">
                            No WA.Sekotak
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
                        <i className="bi bi-instagram text-5xl mb-4" style={{ color: '#065598' }}></i>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Follow Our Journey</h2>
                        <p className="text-gray-600 mb-4">Join our community for updates and sweet content.</p>
                        <a href="https://www.instagram.com/sekotakchocolate/" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg text-blue-600 hover:underline">
                            @sekotakchocolate
                        </a>
                    </div>
                </div>

                {/* Visit Us Section */}
                <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Visit Our Store</h2>
                        <p className="text-gray-600 mt-2">Come by and experience our chocolate firsthand.</p>
                        <p className="font-semibold mt-1">Sekotak Nama Chocolate, Solo, Indonesia</p>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border-4" style={{ paddingTop: '56.25%', borderColor: '#065598' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.150448463541!2d110.811957775545!3d-7.558569874641297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a175920a6e8a7%3A0x6abd0cc1d4299c03!2sSekotak%20Nama%20Chocolate!5e0!3m2!1sen!2sid!4v1753649989390!5m2!1sen!2sid"
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                {/* Order Now Section */}
                <div className="mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Order for Delivery</h2>
                        <p className="text-gray-600 mt-2">Get your favorite chocolate delivered to your door.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-6 px-8 bg-white rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300" style={{ borderColor: "#065598" }}>
                            <span className="text-xl font-semibold" style={{ color: "#065598" }}>WhatsApp</span>
                        </a>
                        <a href="https://www.tokopedia.com/sekotak" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-6 px-8 bg-white rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300" style={{ borderColor: "#065598" }}>
                            <span className="text-xl font-semibold" style={{ color: "#065598" }}>Tokopedia</span>
                        </a>
                        <a href="https://food.grab.com/id/en/restaurant/sekotak-delivery/IDGFSTI00000b2j" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-6 px-8 bg-white rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300" style={{ borderColor: "#065598" }}>
                            <span className="text-xl font-semibold" style={{ color: "#065598" }}>GrabFood</span>
                        </a>
                        <a href="https://shopeefood.co.id/restaurant/sekotak" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-6 px-8 bg-white rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300" style={{ borderColor: "#065598" }}>
                            <span className="text-xl font-semibold" style={{ color: "#065598" }}>ShopeeFood</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}