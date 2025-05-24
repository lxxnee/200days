/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'hexagon': 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      },
      fontFamily: {
        'corncorn': ['Ownglyph_corncorn-Rg', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-hexagon': {
          'clip-path': 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 