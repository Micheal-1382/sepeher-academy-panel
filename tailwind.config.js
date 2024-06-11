const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xs": "380px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      mdb: "867px",
      lgl: "920px",
      lg: "1024px",
      lgb: "1150px",
      xl: "1280px",
      xlb: "1390px",
      xll: "1450px",
      "2xl": "1536px",
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        kalamehBold: ["kamalehBold"],
        kalamehBlack: ["kalamehBlack"],
        vazir: ["vazir"],
        peyda: ["peyda"],
      },
      colors: {
        shadowColor: "#ececec",
        mainBodyBg: "#F3F4F6",
        dark: {
          DEFAULT: "#111827",
          lighter: "rgb(36 42 56)",
          darker: "#050506",
        },
        primary: {
          DEFAULT: "#436E8E",
          lighter: "#6088A8",
          darker: "#2D526E",
        },
        secondary: {
          DEFAULT: "#E38569",
        },
        lightTitle: {
          DEFAULT: "#4D4D4D",
          lighter: "#666666",
          darker: "#333333",
        },
        darkTitle: {
          DEFAULT: "#fff",
        },
        lightBody: {
          DEFAULT: "#8D8D8D",
        },
        darkBody: {
          DEFAULT: "#B3B3B3",
        },
        btnText: {
          DEFAULT: "#fff",
        },
        gray: {
          darker: "#4D4D4D",
          lighter: "#B3B3B3",
        },
        white: {
          DEFAULT: "#FFF",
        },
      },
      container: {
        center: true,
        padding: {
          DEAFAULT: "2rem",
          "2xs": "0rem",
          xs: "0rem",
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "1.5rem",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#111827",
            primary: "#436E8E",
          },
        },
        light: {
          colors: {
            background: "#F3F4F6",
          },
        },
      },
    }),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
