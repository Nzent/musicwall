module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgimg': "url('/imgs/bg.webp')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
