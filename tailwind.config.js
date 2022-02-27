/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'ITC'", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        '15': '7rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
