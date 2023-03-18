const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#24396D',
        pink: '#D1A1B3',
        orange: '#FFA726',
        black: colors.black,
        'light-gray': '#898989'
      },
      fontFamily: {
        montserrat: ['Montserrat']
      }
    }
  },
  plugins: []
}
