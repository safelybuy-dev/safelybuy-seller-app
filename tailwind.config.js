module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        morebg: {
          100: 'rgba(134, 97, 255, 0.15)',
        },
        safebuyColor: 'rgba(134, 97, 255, 1)',
      },
      flex: {
        0.7: '0.65',
        0.3: '0.3',
      },
      height: {
        70: '70vh',
      },
      backgroundImage: {
        landing: 'linear-gradient(166.22deg, #FFFFFF 12.49%, #EEEDFF 24.29%)',
        hero: "url('./assets/images/herobg.svg')",
        'landing-widget-one':
          'radial-gradient(117% 117% at -19.41% -17%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
};
