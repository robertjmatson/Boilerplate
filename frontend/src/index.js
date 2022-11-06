import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import { ThemeProvider } from "@mui/material";
import { bpTheme } from "./design/theme";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={bpTheme}>
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
    </ThemeProvider>
  </React.StrictMode>

);



