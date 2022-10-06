/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

module.exports = {
  theme: {
    colors: {
      gul: "#fffa96",
      navy: "#122851",
      blå: "#122aff",
      pink: "#ff70f0",
      sand: "#f8ead0",
    },
  },
};
