import React from 'react';
import ProductCard from './ProductCard';

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

type ProductCarouselProps = {
    products: Product[];
    onProductClick: (product: Product) => void;
};

export default function ProductCarousel({ products, onProductClick }: ProductCarouselProps) {
    return (
        <section className="py-20 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif" style={{color: '#065598'}}>
                        Our Signature Collection
                    </h2>
                    <p className="text-lg text-gray-600">
                        Discover our range of premium chocolate bars
                    </p>
                </div>
            </div>

            <div className="relative">
                <div className="flex animate-scroll-right space-x-8">
                    {[...products, ...products].map((product, index) => (
                        <ProductCard
                            key={`carousel-${product.id}-${index}`}
                            name={product.name}
                            imageUrl={product.image}
                            bgColor={product.bgColor}
                            onClick={() => onProductClick(product)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}