'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VerifyOTP() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Move to next input if value is entered
      if (value && index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Add verification logic here
    const otpString = otp.join('');
    console.log('Verifying OTP:', otpString);
  };

  return (
    <div className="h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-green-500 text-center mb-8">AfricGlobal</h1>
          
          <h2 className="text-2xl font-semibold text-center mb-4">OTP Verification</h2>
          <p className="text-gray-600 text-center mb-8">
            Enter the 4-digit code we sent to {email}
          </p>

          <form onSubmit={handleVerify}>
            <div className="flex justify-center gap-4 mb-8">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  ref={inputRefs[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-14 h-14 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              Verify email
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 relative hidden md:block">
        <Image
          src="/images/Carousel.png"
          alt="Agricultural tractor in a field at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-10 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Reach Global Buyers with Ease
          </h2>
          <p className="text-lg mb-6">
            Exporters, list your products and connect with buyers worldwide
          </p>
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}