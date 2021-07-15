module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      darkBlue: "hsl(209, 23%, 22%)",
      veryDark: "hsl(207, 26%, 17%)",
      veryDarkLight: "hsl(200, 15%, 8%)",
      darkGray: "hsl(0, 0%, 52%)",
      veryLight: "hsl(0, 0%, 98%)",
      White: "hsl(0, 0%, 100%)",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
