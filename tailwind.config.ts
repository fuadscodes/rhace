/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          50: '#3B4656',
          90: '#12171b',
        },
        gray: {
          10: '#FAFAFC',
          20: '#F4F4F9',
          30: '#7B7B7B',
          40: '#EFEFEF',
          50: '#e2e2e2'
        },
      },
      backgroundImage: {
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
    },
  },
  plugins: [],
};