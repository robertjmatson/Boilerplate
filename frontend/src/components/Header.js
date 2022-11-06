import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom";

function Header() {

  return(
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Link to="/">Boiler Plate</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header