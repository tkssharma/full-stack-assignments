const colors = require('tailwindcss/colors');
module.exports = {
  jit: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      barleyWhite: '#FFF2CE',
      crusta: '#fe812e',
      eggWhite: '#ffecc1',
      gigas: '#45419c',
      goldenTainoi: '#FDCC57',
      grandis: '#fed27f',
      hitPink: '#f9b085',
      lightningYellow: '#fdb717',
      soapStone: '#fffdfc',
      treePoppy: '#fd9f19',
      varden: '#fff6db',
      waterloo: '#86829e',
      zeus: '#28251e',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}