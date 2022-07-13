const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue': '#24396D',
        pink: '#D1A1B3',
        black: colors.black
      },
      fontFamily: {
        montserrat: ['Montserrat']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
