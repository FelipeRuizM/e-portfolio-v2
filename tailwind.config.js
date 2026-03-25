/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          accent: '#C64191',
          dark: '#040404',
          light: '#EDEDE8',
        }
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
