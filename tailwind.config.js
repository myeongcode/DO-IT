/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        fhd: '1920px',
      },
    },
    fontFamily: {
      suit: ['SUIT', 'sans-serif'],
      pretend: ['Pretendard', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
