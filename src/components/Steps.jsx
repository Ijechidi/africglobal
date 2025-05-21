import React from 'react';

const Steps = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl mb-12">
          Start your Journey in <span className="text-[#22C55E]">3 Simple Steps</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-600">Create your account as an Exporter or Investor/Buyer</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Set Up Your Profile</h3>
            <p className="text-gray-600">Tell us about your goals, products and investment interests</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Connect and Grow</h3>
            <p className="text-gray-600">Explore, list your products, investors, find your partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;