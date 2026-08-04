export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7fee7',
          100: '#ecfccb',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
        },
      },
      boxShadow: {
        premium: '0 20px 45px -20px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
}
