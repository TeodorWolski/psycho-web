/** @type {import('tailwindcss').Config} */
/* eslint-disable indent */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#034626',
        'secondary': '#efeee5',
        'tertiary': '#3f745b',
      },
      fontWeight: {
        customLight: 300,
        customNormal: 400,
        customMedium: 500,
      },
      screens: {
        customXs: '400px',
        customSm: '640px',
        customMd: '768px',
        customLg: '1024px',
        customXl: '1280px',
      },
    },
  },
  plugins: [],
};
