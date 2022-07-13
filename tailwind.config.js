const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#24396D',
        pink: '#D1A1B3',
        black: colors.black,
        'light-gray': '#A8A8A8'
      },
      fontFamily: {
        montserrat: ['Montserrat']
      }
    }
  },
  plugins: []
}
