/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#034626',
        'secondary': '#efeee5',
        'tertiary': '#3f745b',
      },
    },
  },
  plugins: [],
};
