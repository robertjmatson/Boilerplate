import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { routes as appRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from './design/theme';
import Layout from './design/layout';

  function App() {
    return (
      <ThemeProvider theme={theme}>
      <Router>
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
      </Router>
    </ThemeProvider>      
    )
  }
export default App
