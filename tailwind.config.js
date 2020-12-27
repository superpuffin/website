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
      display: ["Montserrat"],
    },
    extend: {
      colors: {
        // Blue
        primary: "#00a7e1",
        // Purple
        secondary: "#53599a",
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
