import React from 'react';
import DashboardPreview from './DashboardPreview';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#C6EE8599] pt-8 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A202C]">
            <div className="whitespace-nowrap">Grow Wealth Sustainably: Connect</div>
            <div className="mt-2">
              <span className="text-[#22C55E]">Exporters and Investors</span>{' '}
              in Agriculture
            </div>
          </h1>
          <p className="text-[#4A5568] text-lg mb-8">
            Join a global network of exporters and investors in agriculture to expand your
            opportunities, trade sustainably, and build a brighter future together.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#22C55E] text-white px-8 py-3 rounded-md font-medium hover:bg-green-600 transition-colors">
              Get Started
            </button>
            <Link href={"/login"} className="border-2 border-[#22C55E] text-[#22C55E] px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors">
              Log In
            </Link>
          </div>
        </div>
        <div className="relative w-full max-w-5xl mx-auto">
          <DashboardPreview />
        </div>
      </div>
    </div>
  );
};

export default Hero;