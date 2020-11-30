const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: [...defaultTheme.fontFamily.serif],
      sans: [...defaultTheme.fontFamily.sans],
    },
    // container: {
    //   center: true,
    //   padding: '1rem',
    // },
    extend: {},
  },
  variants: {},
  plugins: [],
};
