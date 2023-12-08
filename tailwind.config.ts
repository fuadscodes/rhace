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
          90: '#12171b',
        },
        gray: {
          30: '#7B7B7B',
        },
        brown: {
          50: '#C3B091',
        },
        green: {
          40: '#9D9D80',
          50: '#9D9D80'
        }
        
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