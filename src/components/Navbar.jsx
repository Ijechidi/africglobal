'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 relative border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="AfricGlobal" 
                width={70} 
                height={32}
                className="h-8"
              />
              <span className="text-[#22C55E] font-semibold text-xl ml-2">AfricGlobal</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-[#4A5568] hover:text-green-500 text-sm font-medium">
                About Us
              </Link>
              <Link href="#" className="text-[#4A5568] hover:text-green-500 text-sm font-medium">
                Solutions
              </Link>
              <Link href="#" className="text-[#4A5568] hover:text-green-500 text-sm font-medium">
                Resources
              </Link>
              <Link href="#" className="text-[#4A5568] hover:text-green-500 text-sm font-medium">
                Pricing
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <div className="hidden md:block">
              <button className="bg-[#22C55E] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="px-4 py-3 space-y-3">
              <Link href="#" className="block text-[#4A5568] hover:text-green-500 text-sm font-medium">
                About Us
              </Link>
              <Link href="#" className="block text-[#4A5568] hover:text-green-500 text-sm font-medium">
                Solutions
              </Link>
              <Link href="#" className="block text-[#4A5568] hover:text-green-500 text-sm font-medium">
                Resources
              </Link>
              <Link href="#" className="block text-[#4A5568] hover:text-green-500 text-sm font-medium">
                Pricing
              </Link>
              <button className="w-full bg-[#22C55E] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;