import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import ProductCard from './ProductCard';

// Register the Draggable plugin
gsap.registerPlugin(Draggable);

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
    const carouselRef = useRef<HTMLDivElement>(null);
    // Duplicate products to create the infinite loop effect
    const infiniteProducts = [...products, ...products];

    useGSAP(() => {
        const carousel = carouselRef.current;
        if (!carousel || products.length === 0) return;

        const singleSetWidth = carousel.scrollWidth / 2;

        // The main animation function
        const animate = (startPosition = 0) => {
            const remainingWidth = singleSetWidth - startPosition;
            const totalDuration = 40; // Base duration for a full scroll
            const remainingDuration = (remainingWidth / singleSetWidth) * totalDuration;

            // Animate from the startPosition to the end of the first set
            gsap.to(carousel, {
                scrollLeft: singleSetWidth,
                duration: remainingDuration,
                ease: 'none',
                // When the animation completes, jump back to the beginning and restart
                onComplete: () => {
                    carousel.scrollLeft = 0;
                    animate(0);
                },
                // Overwrite any conflicting animations
                overwrite: 'auto',
            });
        };

        // Set up GSAP Draggable
        Draggable.create(carousel, {
            type: "scrollLeft",
            edgeResistance: 0.9, // Makes it feel "sticky" at the edges
            onDragStart: () => {
                // Kill the animation when the user starts dragging
                gsap.killTweensOf(carousel);
            },
            onDragEnd: () => {
                // When the user stops dragging, restart the animation from the current position
                animate(carousel.scrollLeft);
            }
        });

        // Start the initial animation
        animate();

    }, { dependencies: [products], scope: carouselRef });

    return (
        <section className="py-20 bg-white">
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

            <div 
                ref={carouselRef}
                className="overflow-x-auto overflow-y-hidden cursor-grab"
                style={{ scrollbarWidth: 'none' }} // Hide scrollbar for Firefox
            >
                <div className="flex space-x-8 px-4 pb-4 py-8" style={{ width: 'max-content' }}>
                    {infiniteProducts.map((product, index) => (
                        <ProductCard
                            key={`${product.id}-${index}`}
                            id={product.id}
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