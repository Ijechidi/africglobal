import React from 'react';
import Image from 'next/image';
import CTA from './CTA';

const Campaign = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#C6EE8599] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12">
          {/* CTA Section */}
          <div className="md:col-span-2">
            <CTA />
          </div>
          
          {/* Campaign Section - White card */}
<div className="md:col-span-3">
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-2xl text-[#1A202C] font-medium mb-4">Campaign Overview</h2>

    {/* Main Campaign Image */}
    <div className="rounded-2xl overflow-hidden mb-4">
      <Image
        src="/cocoa-main.jpg"
        alt="Cocoa Campaign"
        width={1200}
        height={300}
        className="w-full h-[200px] object-cover"
      />
    </div>

    {/* Gallery */}
    <div className="mb-4">
      <h3 className="text-xl text-[#1A202C] font-medium mb-2">Campaign Gallery</h3>
      <div className="grid grid-cols-5 gap-2">
        {["cocoa-1.jpg", "cocoa-2.jpg", "cocoa-3.jpg", "cocoa-4.jpg", "cocoa-5.jpg"].map((src, i) => (
          <div className="rounded-2xl overflow-hidden" key={i}>
            <Image
              src={`/${src}`}
              alt="Cocoa"
              width={200}
              height={100}
              className="w-full h-[80px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Exporter Information */}
    <div className="bg-gray-50 rounded-2xl p-4">
      <h3 className="text-xl text-[#1A202C] font-medium mb-4">Exporter's Information</h3>
      <div className="grid grid-cols-2 gap-y-3">
        <div className="text-[#1A202C] text-sm">Exporter name:</div>
        <div className="text-right text-[#1A202C] text-sm font-medium">Ghana Cocoa Story</div>

        <div className="text-[#1A202C] text-sm">Location:</div>
        <div className="text-right text-[#1A202C] text-sm font-medium">Kumasi, Ghana</div>

        <div className="text-[#1A202C] text-sm">Funding Goal:</div>
        <div className="text-right text-[#1A202C] text-sm font-medium">$50,000</div>

        <div className="text-[#1A202C] text-sm">Amount Raised:</div>
        <div className="text-right text-[#1A202C] text-sm font-medium">$20,000</div>

        <div className="text-[#1A202C] text-sm">Campaign Duration:</div>
        <div className="text-right text-[#1A202C] text-sm font-medium">30 days Remaining</div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Campaign;