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
        description: "The perfect balance of earthy green tea and rich white chocolate.",
        shortDesc: "Earthy & Aromatic Nama Chocolate",
        details: "Experience the fusion of Japanese tradition and artisanal chocolate. Our Nama-style chocolate is infused with authentic, high-grade matcha powder, creating a velvety smooth texture and a deep, aromatic green tea flavor that melts in your mouth.",
        ingredients: "White Chocolate (Cocoa Butter, Sugar, Milk Powder), Fresh Cream, Matcha Powder, Cocoa Powder for dusting.",
        allergens: "Contains milk. May contain traces of nuts.",
        image: "/assets/products/matcha.png",
        bgColor: "#73A02D" 
    },
    { 
        id: 2,
        name: "Almond", 
        description: "Vanilla-flavored oat milk with a high-protein formula.",
        shortDesc: "Vanilla oat milk with added protein",
        details: "Smooth and creamy vanilla oat milk enriched with 20g of plant-based protein for a delicious and nutritious drink.",
        ingredients: "Oat base (water, oats), pea protein, cane sugar, natural vanilla flavor, dipotassium phosphate, calcium carbonate, gellan gum",
        allergens: "Contains oats.",
        image: "/assets/products/almond.png",
        bgColor: "#AB784E" 
    },
    { 
        id: 3,
        name: "Dark", 
        description: "An intense and velvety 70% dark chocolate experience.",
        shortDesc: "Rich & Intense Dark Nama Chocolate",
        details: "For the true chocolate purist. This Nama chocolate is crafted with 70% premium dark chocolate for a deep, complex flavor profile. It's perfectly balanced—not too sweet, with a smooth, ganache-like texture that melts luxuriously.",
        ingredients: "Dark Chocolate (Cocoa Mass, Sugar, Cocoa Butter), Fresh Cream, Cocoa Powder for dusting.",
        allergens: "Contains milk. May contain traces of nuts.",
        image: "/assets/products/darkc.png",
        bgColor: "#68ABE4" 
    },
    { 
        id: 4,
        name: "Oreo", 
        description: "Creamy white chocolate packed with crushed Oreo cookie pieces.",
        shortDesc: "Cookies & Cream Nama Chocolate",
        details: "A playful and nostalgic treat. We've folded generous amounts of crunchy, chocolatey Oreo cookie pieces into our creamy white chocolate Nama base. It’s the ultimate cookies-and-cream experience with a sophisticated, velvety twist.",
        ingredients: "White Chocolate (Cocoa Butter, Sugar, Milk Powder), Fresh Cream, Crushed Chocolate Cookies (Wheat Flour, Sugar, Palm Oil, Cocoa Powder).",
        allergens: "Contains milk, wheat (gluten). May contain traces of nuts.",
        image: "/assets/products/oreo.png",
        bgColor: "#D45656" 
    },
    { 
        id: 5,
        name: "Salted Caramel", 
        description: "Sweet, buttery caramel with a hint of Himalayan pink salt.",
        shortDesc: "Sweet & Salty Caramel Nama",
        details: "A fan-favorite for a reason. We blend our smooth milk chocolate with rich, buttery caramel and a sprinkle of Himalayan pink salt. Each bite is a delightful journey of sweet and salty notes with an incredibly silky finish.",
        ingredients: "Milk Chocolate (Sugar, Cocoa Butter, Milk Powder, Cocoa Mass), Fresh Cream, Caramel, Himalayan Pink Salt, Cocoa Powder for dusting.",
        allergens: "Contains milk. May contain traces of nuts.",
        image: "/assets/products/salted.png",
        bgColor: "#FCDE71" 
    }
];