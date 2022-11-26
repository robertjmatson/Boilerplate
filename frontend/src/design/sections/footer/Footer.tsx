import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Link as MuiLink, Grid, Typography, Paper}from '@mui/material';
import { Link } from "react-router-dom";
import { Container } from '@mui/system';

const footers = [
	{ name: 'about us',		link: '/about',},
	{ name: 'contact us',	link: '/contact',},
	{ name: 'about us2',	link: '/about',},
	{ name: 'contact us2',	link: '/contact',},
	{ name: 'about us3',	link: '/about',},
	{ name: 'contact us3',	link: '/contact',},
]



export default function Footer() {
  return (
	<Box
		component="footer"
		sx={{
			py: 1,
			px: 1,
			mt: 'auto',
			backgroundColor: "primary.main"

		}}
  	>
		<Grid 
			container 
			justifyContent="center" 
			sx=
				{{
					backgroundColor: 'secondary.main', 
					width: '100%'
				}} 
		>
			{footers.map((footers) => 
			(
				<Grid item sm={4} lg={1}
					key={footers.name}
					sx={{ 
						fontSize: '9px', 
						textTransform: 'uppercase',
						textAlign: 'Left',
				}}>
					<Link to={footers.link }>
						{footers.name}
					</Link>
				</Grid>
			))}

		</Grid>
    </Box>
  );
}
