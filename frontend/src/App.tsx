import React, { useState, useEffect } from 'react';
import { createTheme } from "@mui/material"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { routes as appRoutes } from "./utils/routes";
import { ThemeProvider, CssBaseline, Switch } from "@mui/material";
import { theme } from './design/theme';
import Layout from './design/layout';



export default function App() { 
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
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



