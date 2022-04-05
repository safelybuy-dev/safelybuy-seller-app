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
    },
  },
  plugins: [],
};
