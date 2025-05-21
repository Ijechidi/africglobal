import React from 'react';
import Image from 'next/image';

const DashboardPreview = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 rounded-lg overflow-hidden shadow-2xl">
      <Image
        src="/dashboard.png"
        alt="Dashboard Preview"
        width={1200}
        height={800}
        className="w-full h-auto rounded-lg"
        priority
      />
    </div>
  );
};

export default DashboardPreview;