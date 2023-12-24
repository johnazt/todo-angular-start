/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      container: {
        maxWidth: "1280px",
        margin: "0 auto",
        padding: {
          DEFAULT: "1rem",
          lg: "4rem",
        },
      },
    },
  },
  plugins: [],
};
