/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    fontFamily: {
      suit: ['SUIT', 'sans-serif'],
      pretend: ['Pretendard-Regular', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
