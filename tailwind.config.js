module.exports = {
  purge: [],
  darkMode: "class",
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
    extend: {
      backgroundColor: ["hover", "responsive", " focus", "dark", "dark-hover"],
      textColor: ["hover", "responsive", "focus", "dark", "dark-hover"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
