module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      { gpea: { primary: '#66CC00', secondary: '#FF6100' } },
      'light',
      'cupcake',
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
};
