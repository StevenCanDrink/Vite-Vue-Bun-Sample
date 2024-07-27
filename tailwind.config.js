/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      boxShadow: {},
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '1rem',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
      },
    },
  },
  plugins: [],
};
