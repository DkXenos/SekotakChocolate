"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryPage() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Animate each section as it enters the viewport
      gsap.utils.toArray<HTMLElement>(".story-section").forEach((section) => {
        const elems = section.querySelectorAll(".anim-element");
        gsap.from(elems, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-white text-gray-800 font-sans overflow-x-hidden "
    >
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-[#FFECBA] p-4">
        <h1 className="text-5xl md:text-7xl font-bold font-serif text-[#065598]">
          Our Not-So-Secret Story
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <div className="mt-12 animate-bounce">
          <svg
            className="w-8 h-8 text-[#065598]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </section>

      {/* Section 2: The Beginning */}
      <section className="py-20 px-4 story-section">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#065598] mb-6 anim-element">
              It all started with a craving.
            </h2>
            <p className="text-lg mb-4 anim-element">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg anim-element">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full h-80 relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 anim-element">
            <Image
              src="/assets/omg/aset1.jpg"
              alt="Chocolate inspiration"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: The "Nama-ste" Moment */}
      <section className="py-20 px-4 bg-[#065598] text-white story-section text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 anim-element">
            The &quot;Nama-ste&quot; Moment
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto anim-element">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Section 4: Why "Sekotak"? */}
      <section className="py-20 px-4 text-center story-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#065598] mb-6 anim-element">
            Why &quot;Sekotak&quot;?
          </h2>
          <p className="text-xl mb-8 anim-element">
            In Indonesian, &quot;Sekotak&quot; means{" "}
            <span className="font-bold">&quot;a box.&quot;</span> For us, it&apos;s more than
            that. It&apos;s a box of joy, a box of comfort, a box of meticulously
            crafted happiness waiting to be opened.
          </p>
          <div className="w-full h-96 relative rounded-2xl overflow-hidden shadow-2xl anim-element">
            <Image
              src="/assets/omg/aset3.jpg"
              alt="A box of chocolate"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Our Philosophy */}
      <section className="py-20 px-4 bg-gray-50 story-section text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 anim-element">
            <Image
              src="/assets/omg/aset2.jpg"
              alt="Indonesian cocoa beans"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="text-left md:order-first ">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#065598] mb-6 anim-element">
              From Bean, With Love.
            </h2>
            <p className="text-lg mb-4 anim-element">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg anim-element">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-[#FFECBA] story-section text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#065598] mb-6 anim-element">
            Ready for Your Own &quot;Aha!&quot; Moment?
          </h2>
          <p className="text-xl mb-8 text-gray-700 anim-element">
            Enough talk. The real story is in the taste.
          </p>
          <Link
            href="/Product"
            className="inline-block bg-[#065598] text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-blue-800 transition-colors duration-300 shadow-lg anim-element"
          >
            Explore The Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
