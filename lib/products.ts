export type Product = {
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

export const products: Product[] = [
    { 
        id: 1,
        name: "Matcha", 
        description: "Oat milk infused with authentic Japanese matcha.",
        shortDesc: "Rich and earthy matcha oat milk",
        details: "A creamy blend of our signature oat milk and high-quality matcha for a smooth, earthy flavor with a hint of sweetness.",
        ingredients: "Oat base (water, oats), cane sugar, matcha tea powder, dipotassium phosphate, calcium carbonate, gellan gum",
        allergens: "Contains oats.",
        image: "/assets/products/matcha.png",
        bgColor: "#8DBA6A" // Green
    },
    { 
        id: 2,
        name: "Cashew", 
        description: "Chocolate-flavored oat milk packed with plant-based protein.",
        shortDesc: "Chocolate oat milk with a protein boost",
        details: "The classic taste of chocolate oat milk, now with an added 20g of plant-based protein to fuel your day.",
        ingredients: "Oat base (water, oats), pea protein, cane sugar, cocoa powder, dipotassium phosphate, calcium carbonate, gellan gum",
        allergens: "Contains oats.",
        image: "/assets/products/cashew.png",
        bgColor: "#C8A284" // Light Brown
    },
    { 
        id: 3,
        name: "Almond", 
        description: "Vanilla-flavored oat milk with a high-protein formula.",
        shortDesc: "Vanilla oat milk with added protein",
        details: "Smooth and creamy vanilla oat milk enriched with 20g of plant-based protein for a delicious and nutritious drink.",
        ingredients: "Oat base (water, oats), pea protein, cane sugar, natural vanilla flavor, dipotassium phosphate, calcium carbonate, gellan gum",
        allergens: "Contains oats.",
        image: "/assets/products/almond.png",
        bgColor: "#A9D2E5" // Light Blue
    },
    { 
        id: 4,
        name: "Dark", 
        description: "Rich and creamy chocolate oat milk, a timeless classic.",
        shortDesc: "Classic rich chocolate oat milk",
        details: "Our signature oat milk blended with premium cocoa for a rich, indulgent, and dairy-free chocolate experience.",
        ingredients: "Oat base (water, oats), cane sugar, cocoa powder, sea salt, dipotassium phosphate, calcium carbonate, gellan gum",
        allergens: "Contains oats.",
        image: "/assets/products/darkc.png",
        bgColor: "#C8A284" // Light Brown
    },
    { 
        id: 5,
        name: "Oreo", 
        description: "Milk chocolate filled with salted caramel and Himalayan pink salt",
        shortDesc: "Sweet meets salty perfection",
        details: "Creamy milk chocolate with a flowing salted caramel center, finished with Himalayan pink salt.",
        ingredients: "Organic cacao beans, organic milk powder, organic caramel, Himalayan salt, organic cane sugar",
        allergens: "Contains milk. May contain traces of nuts",
        image: "/assets/products/oreo.png",
        bgColor: "#F9E477" // Yellow
    },
    { 
        id: 6,
        name: "Salted Caramel", 
        description: "Dark chocolate infused with natural orange essential oils",
        shortDesc: "Dark chocolate with citrus notes",
        details: "70% dark chocolate enhanced with natural orange essential oils for a bright, citrusy finish.",
        ingredients: "Organic cacao beans, organic cane sugar, organic cocoa butter, natural orange oil",
        allergens: "May contain traces of nuts and milk",
        image: "/assets/products/salted.png",
        bgColor: "#8DBA6A" // Green
    }
];