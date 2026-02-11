import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark GSAP plugins as external for server-side rendering
      config.externals = config.externals || [];
      config.externals.push({
        'gsap/ScrollTrigger': 'commonjs gsap/ScrollTrigger',
        'gsap/Draggable': 'commonjs gsap/Draggable',
      });
    }
    return config;
  },
};

export default nextConfig;
