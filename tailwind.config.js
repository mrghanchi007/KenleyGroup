/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#D8CFC6",
        ink: "#0C0D0D",
        coral: "#E69C85",
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
