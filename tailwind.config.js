/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#D8D3C6",
        ink: "#100F0D",
        coral: "#E28D77",
        cream: "#EFEAE0",
        card: "#161513",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
