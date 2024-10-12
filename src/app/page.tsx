"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-arima-madurai-solid)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start min-h-screen min-w-full h-[90%]">
        <HeroSection />
      </main>
      <footer className="flex flex-col bg-heading-color"></footer>
    </div>
  );
}
