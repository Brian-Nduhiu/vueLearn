/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: 'Dancing Script',
        abril: 'Abril Fatface',
        signika: 'Signika',
        marhey: 'Marhey',
      }
    },
  },
  plugins: [],
};
