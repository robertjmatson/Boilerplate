import { Route, Routes } from "react-router-dom";
import { routes as appRoutes } from "./utils/routes";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { getDesignTokens } from "./design/theme";
import Layout from "./design/layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./utils/react-query/queryClient";
import { useState, useMemo } from "react";
import { createTheme, PaletteMode } from "@mui/material";


import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export default function App() {
  const [mode, setMode] = useState<'dark' | 'light'> ('light')
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
