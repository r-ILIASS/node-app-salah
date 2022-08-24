/** @type {import('tailwindcss').Config} */
const defaulTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // prettier-ignore
        'sans': ['Roboto', ...defaulTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
