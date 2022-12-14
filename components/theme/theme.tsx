import { createTheme } from "@mui/material/styles";

export let appTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffffff",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#000000",
    },
    secondary: {
      light: "#5884b9",
      main: "#092349",
      contrastText: "#ffffff",
    },

    warning: { main: "#D20000" },
    info: { main: "#FF5031" },
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "Fira Sans",
  },
});

appTheme = createTheme(appTheme, {
  typography: {
    h2: {
      fontSize: "45px",
      [appTheme.breakpoints.down("sm")]: {
        fontSize: "35px",
      },
    },
    h4: {
      fontSize: "32px",
      [appTheme.breakpoints.down("sm")]: {
        fontSize: "26px",
      },
    },
    h5: {
      fontSize: "24px",
      [appTheme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
    h6: {
      fontSize: "20px",
      [appTheme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
  },
});
