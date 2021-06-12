const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    maxWidth: {
      main: "1280px",
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      indigo: colors.indigo,
      white: colors.white,
      pitari: "#fff4ef",
    },
    fontFamily: {
      main: [
        "Avenir",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "Hiragino Sans",
        "ヒラギノ角ゴシック",
        "YuGothic",
        "Yu Gothic",
        "メイリオ",
        "Meiryo",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      width: {
        cardPc: "400px",
      },
      height: {
        cardPc: "247px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
