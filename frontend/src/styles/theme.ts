import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#1976D2",
    },

    secondary: {
      main: "#00BCD4",
    },

    background: {
      default: "#121212",
      paper: "#1E1E2F",
    },

    success: {
      main: "#4CAF50",
    },

    warning: {
      main: "#FF9800",
    },

    error: {
      main: "#F44336",
    },
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;