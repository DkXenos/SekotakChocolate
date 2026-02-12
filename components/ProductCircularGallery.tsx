"use client";

import React from "react";
import CircularGallery from "./CircularGallery";
import ScrollFloat from "./ScrollFloat";

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
  onProductClick: (product: Product) => void;
};

export default function ProductCircularGallery({
  products,
  onProductClick,
}: ProductCircularGalleryProps) {
  // Map products to the format CircularGallery expects
  const galleryItems = products.map((product) => ({
    image: product.image,
    text: product.name,
  }));

  // Handle clicks on gallery items by finding the corresponding product
  const handleGalleryClick = (index: number) => {
    const productIndex = index % products.length;
    onProductClick(products[productIndex]);
  };

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
          className="bg-white rounded-2xl overflow-hidden border-8"
          style={{
            width: "1200px",
            height: "600px",
            maxWidth: "90vw",
            borderColor: "#065598",
          }}
        >
          <CircularGallery
            items={galleryItems}
            bend={0}
            textColor="#065598"
            borderRadius={0.2}
            scrollSpeed={0.7}
            scrollEase={0.05}
            font="bold 30px serif"
          />
        </div>
      </div>
    </section>
  );
}
