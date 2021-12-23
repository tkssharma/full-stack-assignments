const colors = require('tailwindcss/colors');
module.exports = {
  jit: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.blueGray,
      white: colors.white,
    },
    screens: {
      'sm': '300px',
      'lg': '700px'
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/src/assets/hero.png')",
        'action': "url('/src/assets/action.png')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}