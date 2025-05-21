'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can join the platform?",
      answer: "Agricultural exporters, investors, and buyers can join our platform."
    },
    {
      question: "Who can join the platform?",
      answer: "We welcome agricultural producers, exporters, investors, and buyers looking to participate in global agricultural trade."
    },
    {
      question: "Is Africglobal available in my country?",
      answer: "We operate globally with a focus on connecting agricultural businesses worldwide."
    },
    {
      question: "How do i start a crowdfunding campaign?",
      answer: "Sign up, complete your profile, and follow our simple campaign creation process."
    },
    {
      question: "What is the minimum investment amount?",
      answer: "Investment minimums vary by project. Contact us for specific details."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#F8FAFC] rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                <span className="text-2xl text-gray-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;