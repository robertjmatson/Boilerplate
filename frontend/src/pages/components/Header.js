import React from 'react';
import {AppBar, Toolbar, Typography, CssBaseline} from '@mui/material';
import { Link } from "react-router-dom";

function Header() {
  return(
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="titles" color="inherit" noWrap>
            <Link to="/">Boiler Plate</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header