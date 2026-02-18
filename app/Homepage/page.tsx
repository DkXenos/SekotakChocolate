"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GlassSurface from "../../components/GlassSurface";
import ScrollFloat from "../../components/ScrollFloat";
import LoadingScreen from "../../components/LoadingScreen";
import ProductCircularGallery from "../../components/ProductCircularGallery";
import GridMotion from "../../components/GridMotion";
import GradualBlur from "../../components/GradualBlur";
import { products, Product } from "@/lib/products";

export default function Homepage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleProductClick = (product: Product) => {
    router.push(`/Product#${product.id}`);
  };

  // GridMotion items using local assets as JSX elements
  const imagePaths = [
    // "/assets/products/matcha.png",
    // "/assets/products/almond.png",
    // "/assets/products/darkc.png",
    // "/assets/products/oreo.png",
    // "/assets/products/salted.png",
    // "/assets/products/cashew.png",
    "/assets/bocil/kucing1.png",
    "/assets/bocil/cocoa1.png",
    "/assets/bocil/bocil1.png",
    "/assets/bocil/kucing2.png",
    "/assets/bocil/bocil2.png",
    "/assets/bocil/cocoa2.png",
    "/assets/bocil/kucing3.png",
    "/assets/bocil/bocil3.png",
    "/assets/bocil/cocoa3.png",
  ];

  const gridItems = Array.from({ length: 30 }, (_, i) => (
    <div key={`grid-item-${i}`} className="relative w-full h-full">
      <Image
        src={imagePaths[i % imagePaths.length]}
        alt="Chocolate"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 33vw, 20vw"
      />
    </div>
  ));

  return (
    <>
      <LoadingScreen 
        text="Sekotak Chocolate" 
        onComplete={() => setIsLoading(false)}
      />

      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in' }}>
        {/* Hero Section */}
        <section 
          style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
          className="flex items-center justify-center bg-white"
        >
          {/* GridMotion Background */}
          <div className="absolute inset-0 z-0 bg-white">
            <GridMotion items={gridItems} gradientColor="white" />
          </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={30}
            className="p-10"
            opacity={1}
            blur={40}
            borderWidth={1}
            // slight white tint to ensure contrast if background gets busy
            mixBlendMode="normal" 
          >
            <div className="flex flex-col items-center justify-center w-full">
              <h1
                className="text-6xl md:text-8xl font-bold mb-6 font-serif"
                style={{
                  color: "#065598",
                  //   WebkitTextStroke: "4px #ffffff",
                  //   paintOrder: "stroke fill"
                }}
              >
                Sekotak Chocolate
              </h1>
              <p className="text-xl md:text-2xl text-gray-700">
                Premium Artisanal Nama Chocolate
              </p>
            </div>
          </GlassSurface>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: "#065598" }}
          >
            <div
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: "#065598" }}
            ></div>
          </div>
        </div>

        <GradualBlur
          target="page"
          position="bottom"
          height="5rem"
          strength={1}
          divCount={6}
          curve="bezier"
          exponential
          opacity={1}
        />
      </section>

      {/* Product Showcase Section */}
      <ProductCircularGallery
        products={products}
        onProductClick={handleProductClick}
      />

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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
                Why Choose Sekotak Chocolate?
              </ScrollFloat>
            </h2>
            <div className="text-lg text-gray-600 max-w-2xl mx-auto">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="top bottom-=20%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.05}
              >
                Every bar tells a story of quality, sustainability, and
                exceptional taste
              </ScrollFloat>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="p-2 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#065598" }}
            >
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <Image
                  src="/assets/omg/aset1.jpg"
                  alt="Sustainable Sourcing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="p-2 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#065598" }}
            >
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <Image
                  src="/assets/omg/aset2.jpg"
                  alt="Premium Quality"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="p-2 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#065598" }}
            >
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <Image
                  src="/assets/omg/aset3.jpg"
                  alt="Made with Love"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 font-serif"
              style={{ color: "#065598" }}
            >
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom-=20%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.05}
              >
                Our Location
              </ScrollFloat>
            </h2>
            <div className="text-lg text-gray-600">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom-=20%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.05}
              >
                Come visit us and discover your new favorite chocolate.
              </ScrollFloat>
            </div>
          </div>
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-lg border-8"
            style={{ paddingTop: "56.25%", borderColor: "#065598" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.150448463541!2d110.811957775545!3d-7.558569874641297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a175920a6e8a7%3A0x6abd0cc1d4299c03!2sSekotak%20Nama%20Chocolate!5e0!3m2!1sen!2sid!4v1753649989390!5m2!1sen!2sid"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Order Now Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
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
                Order Your Chocolate
              </ScrollFloat>
            </h2>
            <p className="text-lg text-gray-600">
              Get your favorite Nama chocolate delivered right to your doorstep.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6285842097907"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-6 px-8 bg-white rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300"
              style={{ borderColor: "#065598" }}
            >
              <span className="text-xl font-semibold" style={{ color: "#065598" }}>
                WhatsApp
              </span>
            </a>
            {/* Tokopedia */}
            <a
              href="https://www.tokopedia.com/sekotaknamachocolate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-6 px-8 bg-white rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300"
              style={{ borderColor: "#065598" }}
            >
              <span className="text-xl font-semibold" style={{ color: "#065598" }}>
                Tokopedia
              </span>
            </a>
            {/* GrabFood */}
            <a
              href="https://food.grab.com/id/en/restaurant/sekotak-nama-chocolate-wonokromo-delivery/IDJKTCTW000018q0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-6 px-8 bg-white rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300"
              style={{ borderColor: "#065598" }}
            >
              <span className="text-xl font-semibold" style={{ color: "#065598" }}>
                GrabFood
              </span>
            </a>
            {/* ShopeeFood */}
            <a
              href="https://shopeefood.co.id/yogyakarta/sekotak-nama-chocolate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-6 px-8 bg-white rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300"
              style={{ borderColor: "#065598" }}
            >
              <span className="text-xl font-semibold" style={{ color: "#065598" }}>
                ShopeeFood
              </span>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
