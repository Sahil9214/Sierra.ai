/* eslint-disable prettier/prettier */
"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer.jsx';

// Dynamically import components that need window
const Landing = dynamic(() => import("./Components/Landing/Landing"), { ssr: false });
const SierraSpeak = dynamic(() => import("./Components/SierraSpeaks/SierraSpeak"), { ssr: false });
const MakeAIYourOwn = dynamic(() => import("./Components/MakeAIYourOwn/MakeAIYourOwn"), { ssr: false });
const ResultSpeak = dynamic(() => import('./Components/ResultSpeak/ResultSpeak'), { ssr: false });
const SafeAndSecure = dynamic(() => import("./Components/SafeAndSecure/SafeAndSecure"), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or return a loading spinner
  }

  return (
    <div style={{
      background: "rgba(255,255,255,1)",
    }}>
      <a className="body-s pointer-events-none absolute -top-8 left-[50%] z-30 -translate-x-[50%] rounded-full border-2 border-yellow bg-white px-12 py-3 text-yellow opacity-0 outline-none transition-[top] duration-200 focus:pointer-events-auto focus-visible:top-3 focus-visible:opacity-100 theme-tech:bg-black theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-2 lg:focus-visible:top-6" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <Landing />
      <SierraSpeak />
      <MakeAIYourOwn />
      <SafeAndSecure />
      <ResultSpeak />
      <Footer />
    </div>
  );
}