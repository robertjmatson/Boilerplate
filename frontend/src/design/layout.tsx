import React, { FC, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "100vh",
          maxWidth: "100vw",
          flexGrow: 1,
        }}
      >
        <Header />

        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;