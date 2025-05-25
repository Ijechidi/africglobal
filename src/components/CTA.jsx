import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div>
      <h2 className="m-2 text-4xl font-bold mb-4">
        Ready to <span className="text-[#22C55E]">Grow Your Future?</span>
      </h2>
      <p className="text-gray-600 mb-8">
        Join thousands of exporters and investors transforming the world of agriculture today!
      </p>
      <div className="flex gap-4">
        <Link 
          href="/sign-up" 
          className="flex-1 bg-[#22C55E] text-white px-8 py-3 rounded-md font-medium hover:bg-green-600 transition-colors text-center"
        >
          Sign Up
        </Link>
        <Link 
          href="/login" 
          className="flex-1 border-2 border-[#22C55E] text-[#22C55E] px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors text-center"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default CTA;