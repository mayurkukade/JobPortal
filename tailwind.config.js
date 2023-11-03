
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#005F59",
        yellow: "#FECD08",
        secondaryYellow2: "#FFCD05", // Fixed missing "#" character
        white: "#FFFFFF",
        offwhite: "#FFF",
        lightBlue: "#E9FEFF", // Fixed extra space character
        grey: "#5B5B5B",
        black: "#000000",
        darkgrey: "#B3B3B3", // Fixed missing "#" character
        red: "#660000",
        gradientblue: "#0E5F59", // Fixed missing "#" character
        darkGrey: "#D9D9D9", // Fixed missing "#" character
        aqua: "#F3F7F7",
        lightgrey: "#B6B6B6", // Fixed missing "#" character
      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"], // Removed the trailing comma
        Inter: ["Inter", "sans-serif"], // Removed the trailing comma
      },
      screens: {
        xxs: "280px",
        xs: "390px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
        laptop: "1024px",
      },
      spacing: {
        '100px': '100px',
      },
    },
  },
  plugins: [],
});
