/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7354F9',
        'primary-hover': '#9780FF',
        'gray-dark': '#333333',
        'gray-light': '#F2F2F2',
        'facebook': '#1877F2',
        'linkedin': '#0A66C2',
        'black': '#000000'
      },
      fontFamily: {
        inter: ['Inter, sans-serif'],
      }
    },
  },
  plugins: [],
}