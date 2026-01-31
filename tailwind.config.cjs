/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        pixel: ['VT323', 'monospace'],
      },
      colors: {
        primary: 'var(--primary)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
