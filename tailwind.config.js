/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html, scss}",
  ],
  /*
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },*/
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['src/*.html'],
  },
  corePlugins: {
    preflight: false,
  },
}

