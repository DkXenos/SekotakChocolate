'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, products } from '@/lib/products';
import ChatView from '@/components/ChatView';

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(products[3]);
    const [isChatVisible, setIsChatVisible] = useState(false);

    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product);
        if (window.innerWidth < 768) {
            setIsChatVisible(true);
        }
    };

    const handleBack = () => {
        setIsChatVisible(false);
    };

    return (
        <div className="h-screen w-full pt-20 flex font-sans bg-white">
            {/* Sidebar */}
            <div className={`w-full md:w-1/3 lg:w-1/4 h-full flex-col border-r border-gray-200 ${isChatVisible ? 'hidden' : 'flex'} md:flex`}>
                <div className="p-4 border-b border-gray-200" style={{ backgroundColor: '#065598' }}>
                    <h1 className="text-2xl font-bold text-white">Chats</h1>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`p-3 flex items-center cursor-pointer hover:bg-gray-100 ${selectedProduct?.id === product.id ? 'bg-gray-100' : ''}`}
                            onClick={() => handleProductSelect(product)}
                        >
                            <div className="relative w-14 h-14 flex-shrink-0 mr-3">
                                <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: product.bgColor }}>
                                    <Image src={product.image} alt={product.name} width={40} height={40} className="object-contain" />
                                </div>
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
            <div className={`flex-1 h-full flex-col ${isChatVisible ? 'flex' : 'hidden'} md:flex`}>
                {selectedProduct ? (
                    <>
                        {/* Header */}
                        <div className="flex-shrink-0 p-3 flex items-center border-b border-gray-200 bg-white shadow-sm">
                            <button onClick={handleBack} className="mr-4 text-gray-600 hover:text-gray-800 md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                            </button>
                            <div className="relative w-12 h-12 flex-shrink-0 mr-4">
                                <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="rounded-full object-cover" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">{selectedProduct.name} Chocolate</h2>
                        </div>
                        {/* Chat Content */}
                        <div className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: '#A9D2E5' }}>
                           <ChatView product={selectedProduct} />
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