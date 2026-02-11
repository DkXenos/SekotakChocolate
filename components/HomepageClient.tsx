'use client';

import dynamic from 'next/dynamic';

// Import Homepage dynamically with ssr: false to prevent GSAP localStorage errors
const Homepage = dynamic(() => import('@/app/Homepage/page'), { ssr: false });

export default Homepage;
