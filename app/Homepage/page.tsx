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
    const heroRef = useRef(null);

    useGSAP(() => {
        // Simple scroll-triggered animations for decorative images
        gsap.utils.toArray<Element>(".decorative-image").forEach((image) => {
            gsap.fromTo(image, 
                {
                    x: 0,
                    y: 0,
                    rotation: 0
                },
                {
                    x: Math.random() * 40 - 20, // Random movement between -20px and 20px
                    y: Math.random() * 40 - 20, // Random movement between -20px and 20px
                    rotation: Math.random() * 30 - 15, // Random rotation between -15deg and 15deg
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1,
                    }
                }
            );
        });
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center" style={{background: '#f5f5f5'}}>
                {/* Decorative Images Container */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    {/* Template for images - add as many as you need */}
                    {/* Using percentages for positioning and vw for size to maintain relative layout and scale on different devices. */}
                    <div className="decorative-image absolute top-[10%] left-[5%] w-16 h-16 md:w-24 md:h-24">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[20%] right-[8%] w-20 h-20 md:w-32 md:h-32">
                        <Image src="/assets/nuts/Almond2.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute bottom-[15%] left-[15%] w-16 h-16 md:w-28 md:h-28">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute bottom-[25%] right-[20%] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Cashew1.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[45%] left-[2%] w-16 h-16 md:w-24 md:h-24">
                        <Image src="/assets/nuts/Cashew2.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[65%] right-[5%] w-20 h-20 md:w-28 md:h-28">
                        <Image src="/assets/nuts/Cashew3.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute bottom-[10%] left-[40%] w-12 h-12 md:w-16 md:h-16">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[5%] right-[30%] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Cashew1.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                     <div className="decorative-image absolute bottom-[8%] left-[70%] w-12 h-12 md:w-16 md:h-16">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[8%] right-[60%] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Cashew1.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                     <div className="decorative-image absolute bottom-[50%] left-[80%] w-12 h-12 md:w-16 md:h-16">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[75%] right-[45%] w-14 h-14 md:w-20 md:h-20">
                        <Image src="/assets/nuts/Cashew1.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    {/* Center-ish images */}
                    <div className="decorative-image absolute top-[35%] left-[45%] w-12 h-12 md:w-16 md:h-16">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute top-[55%] right-[40%] w-16 h-16 md:w-24 md:h-24">
                        <Image src="/assets/nuts/Cashew2.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    <div className="decorative-image absolute bottom-[30%] left-[30%] w-14 h-14 md:w-20 md:h-20">
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
                        <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300" style={{background: 'linear-gradient(to bottom, #FFDE6A, #F5D554)'}}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#065598'}}>
                                <span className="text-white text-2xl">
                                    <Image src="/assets/section/Bocil.png" 
                                    alt="Sustainable Sourcing" 
                                    width={100} height={100} 
                                    className='w-full h-auto'
                                    />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{color: '#065598'}}>Sustainable Sourcing</h3>
                            <p className="text-gray-600">
                                By choosing Sekotak, you&apos;re part of a story that starts long before the chocolate reaches you
                            </p>
                        </div>
                        
                        <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-full0" style={{background: 'linear-gradient(to bottom, #FFDE6A, #F5D554)'}}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#065598'}}>
                                <span className="text-white text-2xl">
                                     <Image src="/assets/section/Kucing.png" 
                                    alt="Sustainable Sourcing" 
                                    width={100} height={100} 
                                    className='w-full h-auto'
                                    />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{color: '#065598'}}>Premium Quality</h3>
                            <p className="text-gray-600">
                                Experience the art of Indonesian Nama chocolate. We select only exceptional cacao beans to create our signature product
                            </p>
                        </div>
                        
                        <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300" style={{background: 'linear-gradient(to bottom, #FFDE6A, #F5D554)'}}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#065598'}}>
                                <span className="text-white text-2xl">
                                     <Image src="/assets/section/Cocoa.png" 
                                    alt="Sustainable Sourcing" 
                                    width={100} height={100} 
                                    className='w-30 h-auto'
                                    />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{color: '#065598'}}>Made with Love</h3>
                            <p className="text-gray-600">
                                From our hands to yours. Every piece of Sekotak Chocolate is a testament to our passion
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Carousel */}
            <ProductCarousel products={products} onProductClick={setSelectedProduct} />

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
                                e.currentTarget.style.color = '#065598';
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
        </div>
    );
}