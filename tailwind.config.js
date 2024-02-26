/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        1338: '1338px',
        84: '84px',
      },
      height: {
        46: '46px',
      },
      textColor: {
        purple: { 600: '#6F2DC1' },
        gray: { 600: '#808080', 700: '#646464' },
      },
      borderColor: {
        'light-gray': '#E5E5E5',
      },
      colors: {
        purple: '#6F2DC1',
        'light-purple': '#F4EFFA',
      },
      spacing: {
        '12px': '12px',
        '24px': '24px',
        '40px': '40px',
        '84px': '84px',
        '64px': '64px',
        '200px': '200px',
        '700px': '700px',
      },
    },
  },
  plugins: [],
};
