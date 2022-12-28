import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ?
      {
        primary: {
          main: "#67c98d",
          contrastText: "#000",
        },
        secondary: {
          main: "#bce3cb",
          contrastText: "#000",
        },
      }
      :
      {
        primary: {
          main: "#678d",
          contrastText: "#000",
        },
        secondary: {
          main: "#678d",
          contrastText: "#000",
        },
      }),
  },
});
