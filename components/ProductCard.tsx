import React from 'react';

type ProductCardProps = {
    name: string;
    imageUrl: string;
    bgColor: string;
    onClick: () => void;
};

export default function ProductCard({ name, imageUrl, bgColor, onClick }: ProductCardProps) {
    return (
        <div 
            className="flex-shrink-0 w-72 text-center cursor-pointer group"
            onClick={onClick}
        >
            <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-200 group-hover:border-gray-300 transition-colors duration-300"></div>
                
                {/* Colored Square */}
                <div 
                    className="relative w-64 h-64 rounded-3xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: bgColor }}
                >
                    {/* Product Image */}
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="absolute left-4 bottom-4 h-32 w-32 object-contain"
                    />
                    {/* Sticker Image */}
                    <img 
                        src="/assets/logo/sekotak-sticker.png"
                        alt="Sekotak Sticker" 
                        className="absolute right-4 bottom-4 h-24 w-24 object-contain"
                    />
                </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-800">{name}</h3>
        </div>
    );
}