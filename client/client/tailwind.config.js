/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#000000",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(15px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-filters")],
};
