/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
          black: '#1a1a1a'
        },
        mainBg: "#f8f8f8",
        darkBg: "#2d374d",
        darkHeadline: "#fffffe",
        darkHdHover: "#fffff0",
        darkP: "#a7a9be",
        secondary: "#a6ff99"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        playfair: ['var(--font-playfair)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
