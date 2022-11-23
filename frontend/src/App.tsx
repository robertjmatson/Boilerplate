import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { routes as appRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from './design/theme';
import Layout from './design/layout';



export default function App() { 
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

function Notelist() {
  const apiURL = 'http://127.0.0.1:8000/api/';
  fetch(apiURL)
            .then((response) => response.json())
            .then((data) => console.log(data));
  return (
    <h1>hello</h1>
  )
}



