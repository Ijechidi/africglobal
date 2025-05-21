import React from 'react';

const FAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="p-4 rounded-lg bg-gray-50">
            <summary className="font-medium cursor-pointer">Who can join the platform?</summary>
            <p className="mt-2 text-gray-600">Agricultural exporters, investors, and buyers can join our platform.</p>
          </details>

          <details className="p-4 rounded-lg bg-gray-50">
            <summary className="font-medium cursor-pointer">Is AfricGlobal available in my country?</summary>
            <p className="mt-2 text-gray-600">We operate globally with a focus on connecting agricultural businesses worldwide.</p>
          </details>

          <details className="p-4 rounded-lg bg-gray-50">
            <summary className="font-medium cursor-pointer">How do I start a crowdfunding campaign?</summary>
            <p className="mt-2 text-gray-600">Sign up, complete your profile, and follow our simple campaign creation process.</p>
          </details>

          <details className="p-4 rounded-lg bg-gray-50">
            <summary className="font-medium cursor-pointer">What is the minimum investment amount?</summary>
            <p className="mt-2 text-gray-600">Investment minimums vary by project. Contact us for specific details.</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;