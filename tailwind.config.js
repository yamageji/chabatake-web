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
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mdlg: '840px',
      },
      fontFamily: {
        noto: ['Noto Sans JP', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        warmGray: colors.warmGray,
        emerald: colors.emerald,
      },
      gridTemplateRows: {
        // base layout
        layout: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        // base layout
        layout: '1fr auto',
      },
      backgroundImage: {
        'hero-pattern': "url('@/assets/image/chabatake.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
