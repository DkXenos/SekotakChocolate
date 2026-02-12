"use client";

import Grainient from "../../components/Grainient";
import InfiniteMenu from "../../components/InfiniteMenu";
import SplitText from "../../components/SplitText";
import { products } from "@/lib/products";

export default function Homepage() {
  const productItems = products.map((product) => ({
    image: product.image,
    link: `/Product#${product.id}`,
    title: product.name,
    description: product.shortDesc,
  }));

  return (
    <>
      {/* Hero Section with Grainient Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Grainient
            color1="#065598"
            color2="#6AABE5"
            color3="#D9D9D9"
            timeSpeed={0.5}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={1.6}
            grainAmount={0}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <SplitText
            text="Sekotak Chocolate"
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-serif drop-shadow-2xl"
            delay={80}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
          />
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
            Premium Artisanal Nama Chocolate
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: "#FFECBA" }}
          >
            <div
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: "#FFECBA" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="py-12 px-4 text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
            style={{ color: "#065598" }}
          >
            Our Chocolate Collection
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Discover our exquisite range of handcrafted nama chocolates
          </p>
        </div>
        
        <div className="flex justify-center items-center px-4 pb-12">
          <div 
            className="bg-white rounded-2xl overflow-hidden border-8"
            style={{ 
              width: "800px", 
              height: "600px", 
              maxWidth: "90vw",
              borderColor: "#065598"
            }}
          >
            <InfiniteMenu items={productItems} scale={1} />
          </div>
        </div>
      </section>
    </>
  );
}

