import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#0e0106',
        'background': '#FFFFFF',
        'primary': '#184ca8',
        'secondary': '#647ed3',
        'accent': '#ff311f',
        'faintBackgroundBlue':'#DCE1F6',
        'darkBlueBackground':'#3F3D56',
        'dark':'#000000',
        'white':'white',
        'textColor':'#a5b4fc',
        'snowWhite':'#F5FEFD',
        'faintgreen':'#aee6b9',
        'navyblue':'#00002e',
        'textnavyblue':'#d292ff'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Removed the trailing comma
        Montserrat:["Montserrat","sans-serif"]
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
        "100px": "100px",
      },
    },
  },
  plugins: [],
});