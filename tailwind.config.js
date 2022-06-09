module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      lora: ["Lora", "sans-serif"],
    },
    extend: {
      colors: {
        xorange: "#fed9ca",
        xoranged: "#ffb699",
        xgray: "#c5c5c5",
        xblack: "#2b2b2b",
        xtextgray: "#747474",
        xstyle: "#f7f7f7a8",
      },
    },
  },
  plugins: [],
};
