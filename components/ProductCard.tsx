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
            className="flex-shrink-0 w-72 text-center cursor-pointer group"
            onClick={onClick}
        >
            <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Background Shape */}
                <div 
                    // className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 p-1"
                    className="absolute inset-0 rounded-full bg-[#065598] p-1"
    >
                    <div className="h-full w-full rounded-full" />
                </div>
                
                {/* Colored Content Area */}
                <div 
                    className="relative w-66 h-66 rounded-[50%/50%] transition-transform duration-300 group-hover:scale-120 flex items-center justify-center"
                    style={{ backgroundColor: bgColor }}
                >
                    {/* Product Image */}
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="  object-contain rounded-full"
                    />
                </div>

                {/* Number Circle */}
                <div 
                    className="absolute bottom-4 right-4 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                    style={{ backgroundColor: '#C3170E' }}
                >
                    {id}
                </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-800">{name}</h3>
        </div>
    );
}