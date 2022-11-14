import { useState, useEffect } from 'react'
import React from 'react';
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

  class connectionExample extends React.Component {
    componentDidMount() {
        const apiURL = 'http://127.0.0.1:8001/api/';
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    render() {
        return <h1>hello</h1>;
    }
}


export default connectionExample
