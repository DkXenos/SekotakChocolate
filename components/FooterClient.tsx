'use client';

import dynamic from 'next/dynamic';

// Import Footer dynamically with ssr: false to prevent GSAP localStorage errors
const Footer = dynamic(() => import('./footer'), { ssr: false });

export default Footer;
