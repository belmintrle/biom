/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'gray': '#F2F2F2',
        'gray-light': '#FFFAFA',
        'teal': {
          light: '#DAE5E5',
          DEFAULT: '#004A4C',
          dark: '#002D33',
        },
        'black': '#000000',
        'gold': '#DDA74A',
      },
      backgroundImage: {
        'hero-bg': "url('./src/assets/images/section1bg.png')",
        'second-bg': "url('./src/assets/images/section2bg.png')",
      },
      fontFamily: {
        brandon: ['Brandon Grotesque', 'sans-serif'],
        chronicle: ['Chronicle Display', 'serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
}

