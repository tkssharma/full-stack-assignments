module.exports = {
  jit: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: "#CDF0EA",
        darkOverlay: "rgb(41 41 41 / 97%)",
        error: '#F56236',
        warning: '#FCE788',
        info: '#88FCA3'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}

/*
 
 * */