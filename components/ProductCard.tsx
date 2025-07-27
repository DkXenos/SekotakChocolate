import Image from "next/image";
import React from "react";

type ProductCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  bgColor: string;
  onClick: () => void;
};

export default function ProductCard({
  name,
  imageUrl,
  bgColor,
  onClick,
}: ProductCardProps) {
  return (
    <div
      className="flex-shrink-0 w-80 text-center cursor-pointer group p-4"
      onClick={onClick}
    >
      {/* Container for the visual elements */}
      <div
        className="relative w-56 h-80 mx-auto rounded-[50%/25%] flex items-center justify-center p-4
                   transition-transform duration-300 group-hover:scale-110
                   shadow-[0_0_0_3px_black]"
        style={{ backgroundColor: bgColor }}
      >
        {/* Product Image with a fixed aspect ratio container */}
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="mt-4 text-xl font-bold text-gray-800">{name} Chocolate</h3>
    </div>
  );
}
