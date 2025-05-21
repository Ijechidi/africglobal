import React from 'react';

const Steps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl mb-12">
          Start your Journey in <span className="text-[#22C55E]">3 Simple Steps</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-lg shadow-md relative pt-16">
            <div className="w-14 h-14 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-2xl absolute -top-7 left-1/2 transform -translate-x-1/2">1</div>
            <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
            <p className="text-gray-600">Create your account as an Exporter or Investor/Buyer in minutes</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-md relative pt-16">
            <div className="w-14 h-14 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-2xl absolute -top-7 left-1/2 transform -translate-x-1/2">2</div>
            <h3 className="text-xl font-semibold mb-4">Set Up Your Profile</h3>
            <p className="text-gray-600">Tell us about your goals, products and investment interests</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-lg shadow-md relative pt-16">
            <div className="w-14 h-14 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-2xl absolute -top-7 left-1/2 transform -translate-x-1/2">3</div>
            <h3 className="text-xl font-semibold mb-4">Connect and Grow</h3>
            <p className="text-gray-600">Exporters, list your products. Investors, fund your projects or buy goods.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;