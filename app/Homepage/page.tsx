'use client';

import { useState, useRef } from 'react';
import ProductCarousel from '@/components/ProductCarousel';
import Image from 'next/image';
import { Product, products } from '@/lib/products';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const heroRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const hero = heroRef.current;
        if (!hero) return;

        // Smaller, fixed offsets to scatter assets AROUND the center
        const animationPresets = [
            { x: 50, y: 40, rotation: -35 }, { x: -40, y: 30, rotation: 45 },
            { x: 60, y: -30, rotation: 25 }, { x: -50, y: -40, rotation: -50 },
            { x: 30, y: 50, rotation: 15 }, { x: -60, y: 40, rotation: -20 },
            { x: 40, y: -50, rotation: 60 }, { x: -35, y: -35, rotation: -10 },
            { x: 35, y: 35, rotation: 10 }, { x: -45, y: 45, rotation: -30 },
            { x: 45, y: -45, rotation: 30 }, { x: 20, y: 60, rotation: 5 },
            { x: -60, y: -20, rotation: -5 }, { x: 55, y: 25, rotation: 40 },
            { x: -25, y: -55, rotation: -40 },
        ];

        gsap.utils.toArray<Element>(".decorative-image").forEach((image, index) => {
            const preset = animationPresets[index % animationPresets.length];

            // Calculate the vector to the center of the hero section
            const centerX = (hero.clientWidth / 2) - (image.getBoundingClientRect().left + image.clientWidth / 2);
            const centerY = (hero.clientHeight / 2) - (image.getBoundingClientRect().top + image.clientHeight / 2);

            // Start from the center, plus the small, fixed offset
            const startX = centerX + preset.x;
            const startY = centerY + preset.y;

            // Animate from the fixed preset position to the final CSS position
            gsap.from(image, {
                x: startX,
                y: startY,
                rotation: preset.rotation,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: hero,
                    start: "top top",
                    end: "+=500",
                    scrub: 1.5,
                }
            });
        });
    }, { scope: heroRef });

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center" style={{background: '#f5f5f5'}}>
                {/* Decorative Images Container */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    {/* Template for images - add as many as you need */}
                    {/* Using percentages for positioning and vw for size to maintain relative layout and scale on different devices. */}
                    <div className="decorative-image absolute top-[5rem] left-[8rem] w-16 h-16 md:w-24 md:h-24">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[8rem] right-[10rem] w-20 h-20 md:w-32 md:h-32">
                        <Image src="/assets/nuts/Almond2.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute bottom-[10rem] left-[12rem] w-16 h-16 md:w-28 md:h-28">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute bottom-[15rem] right-[15rem] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[25rem] left-[5rem] w-16 h-16 md:w-24 md:h-24">
                        <Image src="/assets/nuts/Almond2.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[35rem] right-[8rem] w-20 h-20 md:w-28 md:h-28">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute bottom-[8rem] left-[30rem] w-12 h-12 md:w-16 md:h-16">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[4rem] right-[25rem] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                     <div className="decorative-image absolute bottom-[6rem] left-[45rem] w-12 h-12 md:w-16 md:h-16">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[6rem] right-[40rem] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                     <div className="decorative-image absolute bottom-[25rem] left-[55rem] w-12 h-12 md:w-16 md:h-16">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[40rem] right-[30rem] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    {/* Center-ish images */}
                    <div className="decorative-image absolute top-[20rem] left-[35rem] w-12 h-12 md:w-16 md:h-16">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[30rem] right-[38rem] w-16 h-16 md:w-24 md:h-24">
                        <Image src="/assets/nuts/Almond2.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute bottom-[20rem] left-[25rem] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Almond2.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{borderColor: '#065598'}}>
                        <div className="w-1 h-3 rounded-full mt-2" style={{backgroundColor: '#065598'}}></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif" style={{color: '#065598'}}>
                            Why Choose Sekotak Chocolate?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Every bar tells a story of quality, sustainability, and exceptional taste
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-2 rounded-2xl shadow-lg" style={{ backgroundColor: '#065598' }}>
                            <div className="relative w-full h-96 rounded-xl overflow-hidden">
                                <Image src="/assets/omg/aset1.jpg" alt="Sustainable Sourcing" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="p-2 rounded-2xl shadow-lg" style={{ backgroundColor: '#065598' }}>
                            <div className="relative w-full h-96 rounded-xl overflow-hidden">
                                <Image src="/assets/omg/aset2.jpg" alt="Premium Quality" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="p-2 rounded-2xl shadow-lg" style={{ backgroundColor: '#065598' }}>
                            <div className="relative w-full h-96 rounded-xl overflow-hidden">
                                <Image src="/assets/omg/aset3.jpg" alt="Made with Love" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Carousel */}
            <ProductCarousel products={products} onProductClick={setSelectedProduct} />

            {/* Location Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif" style={{color: '#065598'}}>
                            Our Location
                        </h2>
                        <p className="text-lg text-gray-600">
                            Come visit us and discover your new favorite chocolate.
                        </p>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border-5 border-[#065598]" style={{ paddingTop: '56.25%' }}>
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
            </section>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl flex flex-col" style={{maxHeight: '90vh'}}>
                        {/* Window Header */}
                        <div className="flex-shrink-0 h-10 flex items-center justify-end px-4" style={{backgroundColor: '#FFDE6A'}}>
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => setSelectedProduct(null)}
                                    className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                                ></button>
                                <button
                                    onClick={() => window.location.href = '/Product'}
                                    className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                                ></button>
                            </div>
                        </div>

                        {/* Chat-like Content */}
                        <div className="p-6 space-y-4 overflow-y-auto">
                            {/* Received Message (Product Image) */}
                            <div className="flex justify-end">
                                <div className="relative max-w-xs">
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                                        <p>Hey! Can you tell me about the {selectedProduct.name} chocolate?</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message (Product Image) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                    <div className="p-2 rounded-2xl bg-blue-500 border-[3px] border-blue-600">
                                        <div className="bg-orange-200 rounded-lg overflow-hidden">
                                            <Image
                                                src={selectedProduct.image}
                                                alt={selectedProduct.name}
                                                width={200}
                                                height={200}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message (Introduction) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                                        <p>Absolutely! Our {selectedProduct.name} chocolate is {selectedProduct.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Received Message (More info request) */}
                            <div className="flex justify-end">
                                <div className="relative max-w-xs">
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                                        <p>That sounds amazing! Can you tell me more about it?</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message (Details) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                                        <p className="text-sm">{selectedProduct.details}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Received Message (Ingredients inquiry) */}
                            <div className="flex justify-end">
                                <div className="relative max-w-xs">
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                                        <p>What ingredients do you use?</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message (Ingredients) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                     <div className="bg-blue-500 text-white p-3 rounded-2xl">
                                        <p className="text-sm">{selectedProduct.ingredients}</p>
                                    </div>
                                </div>
                            </div>

                             {/* Received Message (Allergens inquiry) */}
                             <div className="flex justify-end">
                                <div className="relative max-w-xs">
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                                        <p>Are there any allergens I should know about?</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message (Allergens) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                                        <p className="text-sm">{selectedProduct.allergens}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Received Message (Thank you) */}
                            <div className="flex justify-end">
                                <div className="relative max-w-xs">
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                                        <p>Perfect! Thanks for all the info 😊</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message (Closing) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                                        <p>You&apos;re welcome! Hope you&apos;ll love our {selectedProduct.name} chocolate! 🍫</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Order Now Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif" style={{color: '#065598'}}>
                            Order Your Chocolate
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get your favorite Nama chocolate delivered right to your doorstep.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* WhatsApp */}
                        <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-2 border-[#25D366] hover:bg-[#25D366] transition-all duration-300 transform hover:-translate-y-2">
                            <i className="fab fa-whatsapp text-6xl text-[#25D366] group-hover:text-white transition-colors duration-300"></i>
                            <span className="mt-4 text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">WhatsApp</span>
                        </a>
                        {/* Tokopedia */}
                        <a href="https://www.tokopedia.com/YOUR_STORE" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-2 border-[#42b549] hover:bg-[#42b549] transition-all duration-300 transform hover:-translate-y-2">
                            <i className="fas fa-store text-6xl text-[#42b549] group-hover:text-white transition-colors duration-300"></i>
                            <span className="mt-4 text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">Tokopedia</span>
                        </a>
                        {/* GrabFood */}
                        <a href="https://food.grab.com/YOUR_STORE" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-2 border-[#00b14f] hover:bg-[#00b14f] transition-all duration-300 transform hover:-translate-y-2">
                            <i className="fas fa-motorcycle text-6xl text-[#00b14f] group-hover:text-white transition-colors duration-300"></i>
                            <span className="mt-4 text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">GrabFood</span>
                        </a>
                        {/* ShopeeFood */}
                        <a href="https://shopeefood.co.id/YOUR_STORE" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-2 border-[#ee4d2d] hover:bg-[#ee4d2d] transition-all duration-300 transform hover:-translate-y-2">
                            <i className="fas fa-shopping-bag text-6xl text-[#ee4d2d] group-hover:text-white transition-colors duration-300"></i>
                            <span className="mt-4 text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">ShopeeFood</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 text-white" style={{backgroundColor: '#065598'}}>
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
                        Ready to Experience Pure Chocolate?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of chocolate lovers who have discovered the difference
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => window.location.href = '/Product'}
                        className="text-black px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-colors duration-300" style={{backgroundColor: '#FFDE6A'}}>
                            Explore Collection
                        </button>
                        <button 
                            className="border-2 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300" 
                            style={{borderColor: '#FFDE6A'}}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFDE6A';
                                e.currentTarget.style.color = 'black';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'white';
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Order Now Section */}
            
        </div>
    );
}