/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#fe7d1a',
        orangeGradientStart: '#ff9f1c',
        orangeGradientEnd: '#ff4040',
        orange: {
          50: '#fff5e6',    // Lightest
          100: '#ffebcc',
          200: '#ffd7a3',
          300: '#ffc27a',
          400: '#ffad52',
          500: '#ff9929',  // Default Orange
          600: '#e68022',
          700: '#b3661b',
          800: '#804d14',
          900: '#4d330d',  // Darkest
        },
      },
    },
  },
  plugins: [],
}


