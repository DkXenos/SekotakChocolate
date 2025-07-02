'use client';

import { useState } from 'react';

type Product = {
    id: number;
    name: string;
    description: string;
    shortDesc: string;
    details: string;
    ingredients: string;
    allergens: string;
};

export default function Homepage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const products: Product[] = [
        { 
            id: 1,
            name: "Dark Elegance", 
            description: "85% pure dark chocolate crafted from single-origin Ecuador cacao beans",
            shortDesc: "85% pure dark chocolate",
            details: "Rich, intense flavor with notes of cherry and tobacco. Sourced directly from sustainable farms in Ecuador.",
            ingredients: "Organic cacao beans, organic cane sugar, organic cocoa butter",
            allergens: "May contain traces of nuts"
        },
        { 
            id: 2,
            name: "Milk Delight", 
            description: "Creamy milk chocolate made with 42% cacao and fresh Alpine milk",
            shortDesc: "Creamy milk chocolate perfection",
            details: "Smooth and creamy with the perfect balance of cacao and milk. Made with ethically sourced ingredients.",
            ingredients: "Organic cacao beans, organic milk powder, organic cane sugar, organic cocoa butter",
            allergens: "Contains milk. May contain traces of nuts"
        },
        { 
            id: 3,
            name: "White Bliss", 
            description: "Premium white chocolate made with Madagascar vanilla and cocoa butter",
            shortDesc: "Smooth white chocolate luxury",
            details: "Luxuriously smooth white chocolate infused with real Madagascar vanilla beans.",
            ingredients: "Organic cocoa butter, organic milk powder, organic cane sugar, Madagascar vanilla",
            allergens: "Contains milk. May contain traces of nuts"
        },
        { 
            id: 4,
            name: "Hazelnut Crunch", 
            description: "Dark chocolate with hand-roasted Italian hazelnuts",
            shortDesc: "Dark chocolate with roasted hazelnuts",
            details: "70% dark chocolate combined with perfectly roasted Italian hazelnuts for a satisfying crunch.",
            ingredients: "Organic cacao beans, organic hazelnuts, organic cane sugar, organic cocoa butter",
            allergens: "Contains nuts. May contain traces of milk"
        },
        { 
            id: 5,
            name: "Sea Salt Caramel", 
            description: "Milk chocolate filled with salted caramel and Himalayan pink salt",
            shortDesc: "Sweet meets salty perfection",
            details: "Creamy milk chocolate with a flowing salted caramel center, finished with Himalayan pink salt.",
            ingredients: "Organic cacao beans, organic milk powder, organic caramel, Himalayan salt, organic cane sugar",
            allergens: "Contains milk. May contain traces of nuts"
        },
        { 
            id: 6,
            name: "Orange Zest", 
            description: "Dark chocolate infused with natural orange essential oils",
            shortDesc: "Dark chocolate with citrus notes",
            details: "70% dark chocolate enhanced with natural orange essential oils for a bright, citrusy finish.",
            ingredients: "Organic cacao beans, organic cane sugar, organic cocoa butter, natural orange oil",
            allergens: "May contain traces of nuts and milk"
        },
        { 
            id: 7,
            name: "Raspberry Burst", 
            description: "White chocolate with freeze-dried raspberries",
            shortDesc: "Fruity white chocolate delight",
            details: "Creamy white chocolate studded with tangy freeze-dried raspberries for a perfect balance.",
            ingredients: "Organic cocoa butter, organic milk powder, freeze-dried raspberries, organic cane sugar",
            allergens: "Contains milk. May contain traces of nuts"
        },
        { 
            id: 8,
            name: "Espresso Bean", 
            description: "Dark chocolate with roasted coffee beans",
            shortDesc: "Coffee lovers' dream",
            details: "Rich 75% dark chocolate combined with premium roasted espresso beans for an energy boost.",
            ingredients: "Organic cacao beans, roasted coffee beans, organic cane sugar, organic cocoa butter",
            allergens: "Contains caffeine. May contain traces of nuts and milk"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center" style={{background: '#f5f5f5'}}>
                <div className="text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-chewy" style={{color: '#065598'}}>
                        Pure Chocolate
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{color: '#065598'}}>
                        Crafted with passion, made from the finest cacao beans. 
                        Experience chocolate like never before.
                    </p>
                    <button className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg hover:opacity-90" style={{backgroundColor: '#065598'}}>
                        Discover Our Chocolate
                    </button>
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
                            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#065598'}}>
                                <span className="text-white text-2xl">🌱</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{color: '#065598'}}>Sustainable Sourcing</h3>
                            <p className="text-gray-600">
                                We work directly with farmers to ensure fair trade and sustainable practices
                            </p>
                        </div>
                        
                        <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300" style={{background: 'linear-gradient(to bottom, #FFDE6A, #F5D554)'}}>
                            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#065598'}}>
                                <span className="text-white text-2xl">🏆</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{color: '#065598'}}>Premium Quality</h3>
                            <p className="text-gray-600">
                                Only the finest cacao beans are selected for our artisanal chocolate
                            </p>
                        </div>
                        
                        <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300" style={{background: 'linear-gradient(to bottom, #FFDE6A, #F5D554)'}}>
                            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#065598'}}>
                                <span className="text-white text-2xl">❤️</span>
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
            <section className="py-20 overflow-hidden" style={{background: 'linear-gradient(to bottom, #FFDE6A, #F5D554)'}}>
                <div className="max-w-7xl mx-auto px-4 mb-16">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#065598'}}>
                            Our Signature Collection
                        </h2>
                        <p className="text-lg text-gray-600">
                            Discover our range of premium chocolate bars
                        </p>
                    </div>
                </div>

                {/* First Row - Moving Right */}
                <div className="relative mb-8">
                    <div className="flex animate-scroll-right space-x-6">
                        {[...products, ...products].map((product, index) => (
                            <div 
                                key={`row1-${index}`}
                                onClick={() => setSelectedProduct(product)}
                                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                            >
                                <div className="h-48 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #D67F4A, #C3170E)'}}>
                                    <span className="text-4xl">🍫</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{color: '#065598'}}>{product.name}</h3>
                                <p className="text-gray-600 text-sm">{product.shortDesc}</p>
                                <div className="mt-4 text-sm font-medium" style={{color: '#065598'}}>
                                    Click to learn more →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row - Moving Left */}
                <div className="relative">
                    <div className="flex animate-scroll-left space-x-6">
                        {[...products.slice().reverse(), ...products.slice().reverse()].map((product, index) => (
                            <div 
                                key={`row2-${index}`}
                                onClick={() => setSelectedProduct(product)}
                                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                            >
                                <div className="h-48 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #D67F4A, #C3170E)'}}>
                                    <span className="text-4xl">🍫</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{color: '#065598'}}>{product.name}</h3>
                                <p className="text-gray-600 text-sm">{product.shortDesc}</p>
                                <div className="mt-4 text-sm font-medium" style={{color: '#065598'}}>
                                    Click to learn more →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-3xl font-bold" style={{color: '#065598'}}>{selectedProduct.name}</h2>
                                <button 
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ×
                                </button>
                            </div>
                            
                            <div className="h-64 rounded-xl mb-6 flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #D67F4A, #C3170E)'}}>
                                <span className="text-6xl">🍫</span>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{color: '#065598'}}>Description</h3>
                                    <p className="text-gray-700">{selectedProduct.description}</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{color: '#065598'}}>Details</h3>
                                    <p className="text-gray-700">{selectedProduct.details}</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{color: '#065598'}}>Ingredients</h3>
                                    <p className="text-gray-700">{selectedProduct.ingredients}</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{color: '#065598'}}>Allergen Information</h3>
                                    <p className="text-gray-700">{selectedProduct.allergens}</p>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <button 
                                    onClick={() => setSelectedProduct(null)}
                                    className="w-full text-white py-3 rounded-full font-semibold hover:opacity-90 transition-colors duration-300"
                                    style={{backgroundColor: '#065598'}}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="py-20 text-white" style={{backgroundColor: '#065598'}}>
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
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