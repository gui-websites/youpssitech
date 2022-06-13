function getThemeColor(var_name) {
  return `var(--${var_name})`;
}

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: getThemeColor("primary"),
          dark: getThemeColor("primary-dark"),
        },

        grey: {
          DEFAULT: getThemeColor("gray"),
          light: getThemeColor("gray-light"),
        },
      },

      fontFamily: {
        sans: ["Dosis", "Quicksand", "sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
