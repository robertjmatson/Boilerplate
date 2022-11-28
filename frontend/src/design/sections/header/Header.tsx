import React from 'react';
import {AppBar, Toolbar, Typography, CssBaseline, Box} from '@mui/material';
import { Link } from "react-router-dom";
import  AccountMenu from './accountmenu';

function Header() {
  return(
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4" color="inherit" noWrap>
            <Link to="/">Boiler Plate</Link>
          </Typography>
          <Box sx={{ 
              position: 'fixed',
              right: 0,
              }}><AccountMenu/></Box>
                  
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header