/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#F0FDF4',
          500: '#22C55E',
          600: '#16A34A',
        },
        gray: {
          600: '#4A5568',
          900: '#1A202C',
        }
      },
    },
  },
  plugins: [],
}