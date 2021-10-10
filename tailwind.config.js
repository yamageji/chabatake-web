const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
      },
      gridTemplateRows: {
        // base layout
        layout: 'auto 1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
