/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      colors: {
        dark: {
          background: '#000000',
          text: '#ffffff',
        },
        light: {
          Lgrey: '#E3EBF3',
          grey: "#BFCCD9",
          caption:"#698096",
          text:"#00264D",
          primary:"#0080FF",
          background:"#F1F5F9",
          white:"#ffffff",
        },
      }
    },
  },
  plugins: [],
}