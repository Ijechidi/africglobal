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
          
          {/* Campaign Section - Compact Card */}
<div className="md:col-span-3">
  <div className="bg-white rounded-lg shadow-md p-2">
    <h2 className="text-xl text-[#1A202C] font-semibold mb-2">Campaign Overview</h2>

    {/* Main Image */}
    <div className="rounded-xl overflow-hidden mb-2">
      <Image
        src="/cocoa-main.jpg"
        alt="Cocoa Campaign"
        width={1200}
        height={200}
        className="w-full h-[150px] object-cover"
      />
    </div>

    {/* Gallery */}
    <div className="mb-2">
      <h3 className="text-lg text-[#1A202C] font-medium mb-1">Gallery</h3>
      <div className="grid grid-cols-5 gap-1">
        {["cocoa-1.jpg", "cocoa-2.jpg", "cocoa-3.jpg", "cocoa-4.jpg", "cocoa-5.jpg"].map((src, i) => (
          <div className="rounded-xl overflow-hidden" key={i}>
            <Image
              src={`/${src}`}
              alt={`Cocoa ${i + 1}`}
              width={200}
              height={100}
              className="w-full h-[60px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Exporter Info */}
    <div className="bg-gray-50 rounded-xl p-2">
      <h3 className="text-lg text-[#1A202C] font-medium mb-2">Exporter s Info</h3>
      <div className="grid grid-cols-2 gap-y-2 text-sm">
        <div>Exporter name:</div><div className="text-right font-medium">Ghana Cocoa Story</div>
        <div>Location:</div><div className="text-right font-medium">Kumasi, Ghana</div>
        <div>Funding Goal:</div><div className="text-right font-medium">$50,000</div>
        <div>Amount Raised:</div><div className="text-right font-medium">$20,000</div>
        <div>Duration:</div><div className="text-right font-medium">30 days</div>
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