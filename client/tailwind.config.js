/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "themeColor": "#000000",
      },
      boxShadow: {
        "inset-black": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
