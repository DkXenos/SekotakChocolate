import { Product } from '@/lib/products';
import Image from 'next/image';

type ChatViewProps = {
    product: Product;
};

export default function ChatView({ product }: ChatViewProps) {
    return (
        <div className="space-y-4">
            {/* Received Message (Image) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="p-2 rounded-2xl bg-blue-500 border-[3px] border-blue-600">
                        <div className="bg-orange-200 rounded-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sent Message (Name) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                        <p className="text-lg">Take a look at our {product.name} Chocolate!</p>
                    </div>
                </div>
            </div>

            {/* Sent Message (Description) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                        <p>It's a fan favorite! We describe it as: <span className="font-semibold">"{product.description}"</span></p>
                    </div>
                </div>
            </div>

            {/* Received Message (Details) */}
            <div className="flex justify-end">
                <div className="relative max-w-xs">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                        <h4 className="font-bold mb-1">Details</h4>
                        <p className="text-sm">{product.details}</p>
                    </div>
                </div>
            </div>

            {/* Sent Message (Ingredients) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                        <h4 className="font-bold mb-1">Ingredients</h4>
                        <p className="text-sm">{product.ingredients}</p>
                    </div>
                </div>
            </div>

            {/* Received Message (Allergens) */}
            <div className="flex justify-end">
                <div className="relative max-w-xs">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                        <h4 className="font-bold mb-1">Allergens</h4>
                        <p className="text-sm">{product.allergens}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}