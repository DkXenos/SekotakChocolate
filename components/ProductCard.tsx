import React from 'react';

type ProductCardProps = {
    id: number;
    name: string;
    imageUrl: string;
    bgColor: string;
    onClick: () => void;
};

export default function ProductCard({ id, name, imageUrl, bgColor, onClick }: ProductCardProps) {
    return (
        <div 
            className="flex-shrink-0 w-80 text-center cursor-pointer group p-4"
            onClick={onClick}
        >
            <div className="relative w-56 h-80 flex items-center justify-center mx-auto">
                {/* Background Shape */}
                <div 
                    className="absolute inset-0 rounded-[50%/25%] bg-[#065598] p-1"
                >
                    <div className="h-full w-full rounded-[50%/25%]" />
                </div>
                
                {/* Colored Content Area */}
                <div 
                    className="relative w-full h-full rounded-[50%/25%] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center p-2"
                    style={{ backgroundColor: bgColor }}
                >
                    {/* Product Image */}
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="object-contain h-full"
                    />
                </div>

            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-800">{name} Chocolate</h3>
        </div>
    );
}