module.exports = {
  jit: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: "#CDF0EA",
        darkOverlay: "rgb(41 41 41 / 97%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}