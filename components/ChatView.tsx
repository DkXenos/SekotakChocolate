import { Product } from '@/lib/products';
import Image from 'next/image';

type ChatViewProps = {
    product: Product;
};

export default function ChatView({ product }: ChatViewProps) {
    return (
        <div className="space-y-4">
            {/* Received Message (Product inquiry) */}
            <div className="flex justify-end">
                <div className="relative max-w-xs">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                        <p>Hey! Can you tell me about the {product.name} chocolate?</p>
                    </div>
                </div>
            </div>

            {/* Sent Message (Product Image) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="p-2 rounded-2xl bg-blue-500 border-[3px] border-blue-600">
                        <div className="bg-orange-200 rounded-lg overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sent Message (Introduction) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                        <p>Absolutely! Our {product.name} chocolate is {product.description}</p>
                    </div>
                </div>
            </div>

            {/* Received Message (More info request) */}
            <div className="flex justify-end">
                <div className="relative max-w-xs">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                        <p>That sounds amazing! Can you tell me more about it?</p>
                    </div>
                </div>
            </div>

            {/* Sent Message (Details) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                        <p className="text-sm">{product.details}</p>
                    </div>
                </div>
            </div>

            {/* Received Message (Ingredients inquiry) */}
            <div className="flex justify-end">
                <div className="relative max-w-xs">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                        <p>What ingredients do you use?</p>
                    </div>
                </div>
            </div>

            {/* Sent Message (Ingredients) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                        <p className="text-sm">{product.ingredients}</p>
                    </div>
                </div>
            </div>

            {/* Received Message (Allergens inquiry) */}
            <div className="flex justify-end">
                <div className="relative max-w-xs">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                        <p>Are there any allergens I should know about?</p>
                    </div>
                </div>
            </div>

            {/* Sent Message (Allergens) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                        <p className="text-sm">{product.allergens}</p>
                    </div>
                </div>
            </div>

            {/* Received Message (Thank you) */}
            <div className="flex justify-end">
                <div className="relative max-w-xs">
                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl">
                        <p>Perfect! Thanks for all the info 😊</p>
                    </div>
                </div>
            </div>

            {/* Sent Message (Closing) */}
            <div className="flex justify-start">
                <div className="relative max-w-xs">
                    <div className="bg-blue-500 text-white p-3 rounded-2xl">
                        <p>You&apos;re welcome! Hope you&apos;ll love our {product.name} chocolate! 🍫</p>
                    </div>
                </div>
            </div>
        </div>
    );
}