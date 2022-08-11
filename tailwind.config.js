const colors = require("tailwindcss/colors");

function getThemeColor(var_name) {
  return `var(--${var_name})`;
}

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: colors.orange[500],
      },

      fontFamily: {
        sans: ["Dosis", "Quicksand", "sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
