import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#87ceeb",
    },
    secondary: {
      main: "#ff91a4",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#003366",
    },
  },
});

export default theme;
