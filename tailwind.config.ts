import type { Config } from "tailwindcss";

// To use these fonts in your homepage (e.g., app/page.tsx),
// apply the corresponding Tailwind CSS utility class to an element.
//
// Example:
//
// export default function HomePage() {
//   return (
//     <div>
//       <h1 className="font-serif">This heading uses the Cinzel Decorative font</h1>
//       <p className="font-sans">This paragraph uses the default Montserrat font.</p>
//       <p className="font-rovaney">This paragraph uses the Rovaney font.</p>
//       <p className="font-chewy">This paragraph uses the Chewy font.</p>
//     </div>
//   );
// }
//
// Make sure you have also imported the actual font files (e.g., from Google Fonts)
// in your global CSS or layout file.

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
                serif: ["Playfair Display", "serif"],
                chewy: ["Chewy", "cursive"],
                rovaney: ["Rovaney", "sans-serif"],
                cinzel: ["Cinzel Decorative", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;