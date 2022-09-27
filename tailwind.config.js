/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'ascot-font-color' : '#334155'
      },

      screens: {
        'tablet': '412px',
      }

    },
  },
  plugins: [],
}