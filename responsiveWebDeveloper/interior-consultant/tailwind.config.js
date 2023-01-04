/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        CrimsonPro: ['"Crimson Pro"', "serif"],
        Lora: ["Lora", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        uniqueblack: "#181719",
        uniquegray: "#828282",
      },
    },
  },
  plugins: [],
};
