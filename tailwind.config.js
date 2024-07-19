/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          primary: '#FFD34E',
          secondary: '#13353D',
          accent: '#E74C3C',
          background: '#F1F3F9',
          foreground: '#333333',
          'background-secondary': '#F2F2F2',
          border: '#DDDDDD',
        },
        dark: {
          primary: '#D9D9E3',
          secondary: '#0D81EC',
          accent: '#CF6679',
          background: '#1A1B1F',
          foreground: '#E0E0E0',
          'background-secondary': '#121212',
          border: '#333333',
        },
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

