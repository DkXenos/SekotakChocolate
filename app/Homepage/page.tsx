"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ScrollFloat from "../../components/ScrollFloat";
import LoadingScreen from "../../components/LoadingScreen";
import ProductCircularGallery from "../../components/ProductCircularGallery";
import GridMotion from "../../components/GridMotion";
import { products, Product } from "@/lib/products";

export default function Homepage() {
  const router = useRouter();

  const handleProductClick = (product: Product) => {
    router.push(`/Product#${product.id}`);
  };

  // GridMotion items using local assets as JSX elements
  const imagePaths = [
    "/assets/products/matcha.png",
    "/assets/products/almond.png",
    "/assets/products/darkc.png",
    "/assets/products/oreo.png",
    "/assets/products/salted.png",
    "/assets/products/cashew.png",
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
      <LoadingScreen text="Sekotak Chocolate" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* GridMotion Background */}
        <div className="absolute inset-0 z-0">
          <GridMotion items={gridItems} gradientColor="white" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="text-6xl md:text-8xl font-bold mb-6 font-serif"
            style={{ color: "#065598" }}
          >
            Sekotak Chocolate
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Premium Artisanal Nama Chocolate
          </p>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
            </p>
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
            <p className="text-lg text-gray-600">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom-=20%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.05}
              >
                Come visit us and discover your new favorite chocolate.
              </ScrollFloat>
            </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6285842097907"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-4 hover:-translate-y-2 transition-all duration-300"
              style={{ borderColor: "#25D366" }}
            >
              <div
                className="text-6xl mb-4 transition-colors duration-300 group-hover:scale-110"
                style={{ color: "#25D366" }}
              >
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800 transition-colors duration-300">
                WhatsApp
              </span>
            </a>
            {/* Tokopedia */}
            <a
              href="https://www.tokopedia.com/sekotaknamachocolate"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-4 hover:-translate-y-2 transition-all duration-300"
              style={{ borderColor: "#42b549" }}
            >
              <div
                className="text-6xl mb-4 transition-colors duration-300 group-hover:scale-110"
                style={{ color: "#42b549" }}
              >
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800 transition-colors duration-300">
                Tokopedia
              </span>
            </a>
            {/* GrabFood */}
            <a
              href="https://food.grab.com/id/en/restaurant/sekotak-nama-chocolate-wonokromo-delivery/IDJKTCTW000018q0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-4 hover:-translate-y-2 transition-all duration-300"
              style={{ borderColor: "#00b14f" }}
            >
              <div
                className="text-6xl mb-4 transition-colors duration-300 group-hover:scale-110"
                style={{ color: "#00b14f" }}
              >
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800 transition-colors duration-300">
                GrabFood
              </span>
            </a>
            {/* ShopeeFood */}
            <a
              href="https://shopeefood.co.id/yogyakarta/sekotak-nama-chocolate"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border-4 hover:-translate-y-2 transition-all duration-300"
              style={{ borderColor: "#ee4d2d" }}
            >
              <div
                className="text-6xl mb-4 transition-colors duration-300 group-hover:scale-110"
                style={{ color: "#ee4d2d" }}
              >
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800 transition-colors duration-300">
                ShopeeFood
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
