import React, { useRef, useEffect } from 'react';
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
    // Create multiple copies of products for infinite scroll
    const infiniteProducts = [...products, ...products, ...products, ...products];
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        let isUserScrolling = false;
        let userScrollTimeout: NodeJS.Timeout;

        const autoScroll = () => {
            if (!isUserScrolling && scrollContainer) {
                scrollContainer.scrollLeft += 0.5; // Slow scroll speed
                
                // Reset to beginning when reaching 3/4 of the way through for smoother infinite effect
                const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                const resetPoint = maxScroll * 0.75; // Reset at 75% instead of 50%
                
                if (scrollContainer.scrollLeft >= resetPoint) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        // Detect user scrolling
        const handleUserScroll = () => {
            isUserScrolling = true;
            clearTimeout(userScrollTimeout);
            
            // Resume auto-scroll after user stops scrolling
            userScrollTimeout = setTimeout(() => {
                isUserScrolling = false;
            }, 3000); // Resume after 3 seconds of no user interaction
        };

        scrollContainer.addEventListener('scroll', handleUserScroll);
        scrollContainer.addEventListener('touchstart', handleUserScroll);
        scrollContainer.addEventListener('mousedown', handleUserScroll);

        // Start auto-scroll
        animationId = requestAnimationFrame(autoScroll);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            clearTimeout(userScrollTimeout);
            scrollContainer.removeEventListener('scroll', handleUserScroll);
            scrollContainer.removeEventListener('touchstart', handleUserScroll);
            scrollContainer.removeEventListener('mousedown', handleUserScroll);
        };
    }, []);

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
                ref={scrollRef}
                className="overflow-x-auto overflow-y-hidden"
                style={{ scrollBehavior: 'auto' }}
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