import { responsiveFontSizes } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0f0",
    },
    secondary: {
      main: "#ddd",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "\"Segoe UI\"",
      "Roboto",
      "\"Helvetica Neue\"",
      "Arial",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\"",
    ].join(","),
  },
  custom: {
    drawerWidth: 300,
    mainBoxShadow: "0px 0px 10px 10px rgb(207 207 207 / 50%)",
    iconBoxShadow: "0px 0px 5px 5px rgb(170 170 170 / 50%)",
    mainBorderRadius: 10,
    modalOpacityBackground: "#808080",
    modalOpacity: "0.45",
    mainBorderForBigElement: 15,
    mainBorderGreyColor: "#bababa",
  },
  overrides: {
    MuiCheckbox: {
      colorPrimary: {
        color: "blue",
        '&$checked': {
          color: "red",
        },
      },
    }
  },
});

export default theme = responsiveFontSizes(theme);
