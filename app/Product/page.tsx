'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, products } from '@/lib/products';

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product>(products[3]);

    return (
        <div className="flex h-screen font-sans bg-white pt-20">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col border-r border-gray-200 h-full">
                <div className="p-4 border-b border-gray-200" style={{ backgroundColor: '#065598' }}>
                    <h1 className="text-2xl font-bold text-white">Chats</h1>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`p-3 flex items-center cursor-pointer hover:bg-gray-100 ${selectedProduct?.id === product.id ? 'bg-gray-100' : ''}`}
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="relative w-14 h-14 flex-shrink-0 mr-3">
                                <Image src={product.image} alt={product.name} layout="fill" className="rounded-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold text-gray-800">{product.name} Chocolate</h2>
                                    <span className="text-xs text-gray-500">10:52</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600 truncate">{product.shortDesc}</p>
                                    <span className="flex items-center justify-center w-5 h-5 text-xs text-white rounded-full" style={{backgroundColor: '#C3170E'}}>1</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className="hidden md:flex flex-1 flex-col h-full">
                {selectedProduct ? (
                    <>
                        <div className="p-3 flex items-center border-b border-gray-200 bg-white shadow-sm">
                            <div className="relative w-12 h-12 flex-shrink-0 mr-4">
                                <Image src={selectedProduct.image} alt={selectedProduct.name} layout="fill" className="rounded-full object-cover" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">{selectedProduct.name} Chocolate</h2>
                        </div>
                        <div className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: '#A9D2E5' }}>
                            <div className="space-y-4">
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
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        Select a chat to start messaging
                    </div>
                )}
            </div>
        </div>
    );
}