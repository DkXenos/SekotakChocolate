"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoLoop from "./LogoLoop";
import ScrollFloat from "./ScrollFloat";
import ChatView from "./ChatView";

type Product = {
  id: number;
  name: string;
  description: string;
  shortDesc: string;
  details: string;
  ingredients: string;
  allergens: string;
  image: string;
  bgColor: string;
};

type ProductCircularGalleryProps = {
  products: Product[];
  onProductClick?: (product: Product) => void;
};

export default function ProductCircularGallery({
  products,
}: ProductCircularGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Create custom render for each product
  const productLogos = products.map((product) => ({
    node: (
      <div
        key={product.id}
        className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-300"
        onClick={() => setSelectedProduct(product)}
      >
        <div
          className="rounded-2xl flex items-center justify-center p-6 shadow-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: product.bgColor,
            width: "240px",
            height: "240px",
            border: "3px solid #065598",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={180}
            height={180}
            className="object-contain"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-800 text-center">
          {product.name}
        </h3>
      </div>
    ),
    title: product.name,
  }));

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="py-12 px-4 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          style={{ color: "#065598" }}
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom-=20%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
          >
            Our Chocolate Collection
          </ScrollFloat>
        </h2>
        <div className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom-=20%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
          >
            Discover our exquisite range of handcrafted nama chocolates
          </ScrollFloat>
        </div>
      </div>

      <div className="flex justify-center items-center px-4 pb-12">
        <div
          className="bg-white rounded-2xl overflow-hidden border-8 flex items-center justify-center"
          style={{
            width: "1200px",
            height: "600px",
            maxWidth: "90vw",
            borderColor: "#065598",
          }}
        >
          <LogoLoop
            logos={productLogos}
            speed={60}
            direction="left"
            logoHeight={280}
            gap={60}
            hoverSpeed={10}
            scaleOnHover={false}
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Our Chocolate Products"
          />
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center">
                <div className="relative w-12 h-12 flex-shrink-0 mr-4">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    fill 
                    className="rounded-full object-cover" 
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  {selectedProduct.name} Chocolate
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            {/* Chat Content */}
            <div 
              className="p-6 overflow-y-auto" 
              style={{ 
                backgroundColor: '#A9D2E5',
                maxHeight: 'calc(90vh - 80px)'
              }}
            >
              <ChatView product={selectedProduct} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
