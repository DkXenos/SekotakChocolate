"use client";

import { useState, useEffect } from "react";
import Grainient from "./Grainient";
import SplitText from "./SplitText";

interface LoadingScreenProps {
  text?: string;
  onComplete?: () => void;
}

export default function LoadingScreen({ 
  text = "Sekotak Chocolate",
  onComplete 
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Fade in the loading screen
    const fadeInTimer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    // Wait for animation to complete before hiding loading screen
    const fadeOutTimer = setTimeout(() => {
      setFadeIn(false);
    }, 2300);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 2800);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute top-0 left-0 w-full h-full">
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
      <div className="relative z-10">
        <SplitText
          text={text}
          className="text-6xl md:text-8xl font-bold text-white font-serif drop-shadow-2xl"
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
      </div>
    </div>
  );
}
