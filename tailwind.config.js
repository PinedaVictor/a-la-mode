module.exports = {
  content: [
    "./src/*",
    "./index.html",
    "./src/components/**/*.{tsx, jsx, html, js, ts}",
    "./src/pages/*",
  ],
  theme: {
    extend: {},
    colors: {
      offBlack: "#1b1b1b",
      yellow: "#e6a902",
      tan: "#d9cab8",
      offWhite: "#ebf2fa",
      satBlack: "#000000",
      orange: "#ec4826",
      blue: "#004fee",
      grey: "#dddddd",
      iBlue: "#147EFB",
      iGrey: "#d8d8d8",
    },
    fontFamily: {
      BN: ["BebasNeue"],
      TY: ["Tommy"],
      BR: ["BAYER"],
      MN: ["Marksman"],
      TE: ["Torque"],
      SFM: ["sanfranmid"],
      SFR: ["reg"],
    },
  },
  plugins: [],
};
