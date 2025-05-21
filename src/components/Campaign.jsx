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
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl text-[#1A202C] font-medium mb-6">Campaign Overview</h2>
              
              {/* Main Campaign Image */}
              <div className="rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/cocoa-main.jpg"
                  alt="Cocoa Campaign"
                  width={1200}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              
              {/* Gallery */}
              <div className="mb-8">
                <h3 className="text-2xl text-[#1A202C] font-medium mb-4">Campaign Gallery</h3>
                <div className="grid grid-cols-5 gap-4">
                  <div className="rounded-2xl overflow-hidden">
                    <Image src="/cocoa-1.jpg" alt="Cocoa" width={200} height={150} className="w-full h-[100px] object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image src="/cocoa-2.jpg" alt="Cocoa beans" width={200} height={150} className="w-full h-[100px] object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image src="/cocoa-3.jpg" alt="Farmers" width={200} height={150} className="w-full h-[100px] object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image src="/cocoa-4.jpg" alt="Processing" width={200} height={150} className="w-full h-[100px] object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image src="/cocoa-5.jpg" alt="Storage" width={200} height={150} className="w-full h-[100px] object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Exporter Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl text-[#1A202C] font-medium mb-6">Exporter's Information</h3>
                <div className="grid grid-cols-2 gap-y-4">
                  <div className="text-[#1A202C] text-lg">Exporter name:</div>
                  <div className="text-right text-[#1A202C] text-lg font-medium">Ghana Cocoa Story</div>
                  
                  <div className="text-[#1A202C] text-lg">Location:</div>
                  <div className="text-right text-[#1A202C] text-lg font-medium">Kumasi, Ghana</div>
                  
                  <div className="text-[#1A202C] text-lg">Funding Goal:</div>
                  <div className="text-right text-[#1A202C] text-lg font-medium">$50,000</div>
                  
                  <div className="text-[#1A202C] text-lg">Amount Raised:</div>
                  <div className="text-right text-[#1A202C] text-lg font-medium">$20,000</div>
                  
                  <div className="text-[#1A202C] text-lg">Campaign Duration:</div>
                  <div className="text-right text-[#1A202C] text-lg font-medium">30 days Remaining</div>
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