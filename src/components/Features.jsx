import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl mb-16">
          Empowering Agriculture for <span className="text-[#22C55E]">Everyone</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/tractor.jpg" 
              alt="For Exporters" 
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">For Exporters</h3>
              <p className="text-gray-600">
                Access a global network of buyers and investors, showcase your products, 
                secure better market prices, and get easy finance availability.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/investor.jpg" 
              alt="For Investors" 
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">For Investors</h3>
              <p className="text-gray-600">
                Find a global network of supply and investors, access verified agricultural 
                projects and assets, and grow your sustainable investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;