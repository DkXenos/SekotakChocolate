'use client';

import { useState } from 'react';
import ProductCarousel from '@/components/ProductCarousel';
import Image from 'next/image';
import { Product, products } from '@/lib/products';

export default function Homepage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center" style={{background: '#f5f5f5'}}>
                {/* Decorative Images Container */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    {/* Template for images - add as many as you need */}
                    <div className="absolute top-[10vh] left-[5vw] w-32 h-32">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute top-[20vh] right-[8vw] w-48 h-48">
                        <Image src="/assets/nuts/Almond2.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute bottom-[15vh] left-[15vw] w-40 h-40">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute bottom-[25vh] right-[20vw] w-28 h-28">
                        <Image src="/assets/nuts/Cashew1.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute top-[45vh] left-[2vw] w-36 h-36">
                        <Image src="/assets/nuts/Cashew2.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute top-[65vh] right-[5vw] w-44 h-44">
                        <Image src="/assets/nuts/Cashew3.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute bottom-[5vh] left-[40vw] w-24 h-24">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute top-[5vh] right-[30vw] w-32 h-32">
                        <Image src="/assets/nuts/Cashew1.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                     <div className="absolute bottom-[8vh] left-[70vw] w-24 h-24">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute top-[8vh] right-[60vw] w-32 h-32">
                        <Image src="/assets/nuts/Cashew1.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                     <div className="absolute bottom-[50vh] left-[80vw] w-24 h-24">
                        <Image src="/assets/nuts/Almond3.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute top-[85vh] right-[45vw] w-32 h-32">
                        <Image src="/assets/nuts/Cashew1.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    {/* Center-ish images */}
                    <div className="absolute top-[35vh] left-[45vw] w-24 h-24">
                        <Image src="/assets/nuts/Almond1.png" alt="Decorative Almond" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute top-[55vh] right-[40vw] w-36 h-36">
                        <Image src="/assets/nuts/Cashew2.png" alt="Decorative Cashew" fill className="object-contain opacity-100" />
                    </div>
                    <div className="absolute bottom-[30vh] left-[30vw] w-28 h-28">
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
                                We work directly with farmers to ensure fair trade and sustainable practices
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
                                Only the finest cacao beans are selected for our artisanal chocolate
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
                                Every chocolate bar is crafted with passion and attention to detail
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
                            {/* Received Message (Image) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                    <div className="p-2 rounded-2xl bg-blue-500 border-[3px] border-blue-600">
                                        <div className="bg-orange-200 rounded-lg overflow-hidden">
                                            <img
                                                src={selectedProduct.image}
                                                alt={selectedProduct.name}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message (Name) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                                        <p className="text-lg">Take a look at our {selectedProduct.name} Chocolate!</p>
                                    </div>
                                </div>
                            </div>

                             {/* Sent Message (Description) */}
                             <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                                        <p>It's a fan favorite! We describe it as: <span className="font-semibold">"{selectedProduct.description}"</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Received Message (Details) */}
                            <div className="flex justify-end">
                                <div className="relative max-w-xs">
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                                        <h4 className="font-bold mb-1">Details</h4>
                                        <p className="text-sm">{selectedProduct.details}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sent Message (Ingredients) */}
                            <div className="flex justify-start">
                                <div className="relative max-w-xs">
                                     <div className="bg-blue-500 text-white p-3 rounded-2xl">
                                        <h4 className="font-bold mb-1">Ingredients</h4>
                                        <p className="text-sm">{selectedProduct.ingredients}</p>
                                    </div>
                                </div>
                            </div>

                             {/* Received Message (Allergens) */}
                             <div className="flex justify-end">
                                <div className="relative max-w-xs">
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                                        <h4 className="font-bold mb-1">Allergens</h4>
                                        <p className="text-sm">{selectedProduct.allergens}</p>
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
                        <button className="text-black px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-colors duration-300" style={{backgroundColor: '#FFDE6A'}}>
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