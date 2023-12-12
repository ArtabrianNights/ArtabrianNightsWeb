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
    extend: {
        gridTemplateColumns: {
          // Simple 21 column grid         
          '13': 'repeat(13, minmax(0, 1fr))',
          '15': 'repeat(15, minmax(0, 1fr))',
          '21': 'repeat(21, minmax(0, 1fr))',
        },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  purge: {
    enabled: true,
    content: ['src/*.html'],
  },
  corePlugins: {
    preflight: false,
  },
}

