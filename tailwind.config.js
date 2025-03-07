/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        fhd: '1920px',
      },
      keyframes: {
        infiniteSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        infiniteSlide: 'infiniteSlide 90s linear infinite',
      },
    },
    fontFamily: {
      suit: ['SUIT', 'sans-serif'],
      pretendard: ['Pretendard', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
