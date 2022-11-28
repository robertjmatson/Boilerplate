import { createTheme } from "@mui/material"
import { useState, useMemo, createContext } from "react";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#67c98d",
        contrastText: "#000",
      },
      secondary: {
        main: "#bce3cb",
        contrastText: "#000",
      },
    },
  });