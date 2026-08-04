/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/**/*.{html,jsx}", "./index.html",],
  theme: {
    extend: {
      colors: {
        "black": "#1a1a1a",
        "white": "#ffffff",
        "cream": "#F9F5ED",
        "gold": "#C9A24B",
        "gold-light": "#E8D5A4",
        "gold-dark": "#8E6A23"
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"],
        "sans": ["Montserrat", "sans-serif"],
        "script": ["Great Vibes", "cursive"]
      },
    },
  },
  plugins: [],
}

