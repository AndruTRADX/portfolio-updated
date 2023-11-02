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
        "dark-1": "#110f14",
        "dark-2": "#161616",
        "dark-3": "#212126",
        "light-1":"#fbfbfbff",
        "light-2": "#89909aff"
      },
      screens: {
        'xmd': '920px'
      }
    },
  },
  plugins: [],
}