/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#000000", s
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
