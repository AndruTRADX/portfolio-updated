/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8453ddff',
        secondary: "#3d0aafff",
        "dark-0":"#09080c",
        "dark-1": "#110f14",
        "dark-2": "#1a1820",
        "dark-3": "#282234",
        "light-1":"#fbfbfbff",
        "light-2": "#89909aff",
        "light-3": "#5E5D61"
      },
      screens: {
        'xmd': '800px'
      }
    },
  },
  plugins: [],
}