import React from 'react';

export const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyles = 'px-8 py-3 rounded-md font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    outline: 'border-2 border-green-500 text-green-500 hover:bg-green-50'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};