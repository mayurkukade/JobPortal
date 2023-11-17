
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'NavColour': '#657ED4',
        'BackHeader': '#3F3D56',
        'Details': '#DCE1F6',
        'Text': '#080101',
        'save': '#3626A7',
        'Table': '#657ED480',
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
