const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      // 'sans': ['Roboto'],
      // 'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
      // 'display': ['Montserrat', ...defaultTheme.fontFamily.display]
      serif: ["Merriweather"],
    },
    extend: {
      colors: {
        // Blue
        primary: {
          dark: "#00425a",
          DEFAULT: "#00a7e1",
          light: "#8ce1ff",
        },
        // Purple
        secondary: {
          DEFAULT: "#53599a",
          dark: "#3a3e6b",
        },
        // Snow
        ysnow: "#fbf5f3",
        // Black
        yblack: "#041b15",
        // Yellow
        yyellow: "#ffb140",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
