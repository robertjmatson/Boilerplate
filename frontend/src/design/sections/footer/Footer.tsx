import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Link, Grid, Typography, Paper}from '@mui/material';
import { Container } from '@mui/system';

const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us'
		],
	},
	{
		title: 'Features',
		description: [
			'Cool stuff',
			'Random feature',
			'Team feature',
			'Developer stuff',
			'Another one',
		],
	},
	{
		title: 'Resources',
		description: [
			'Resource',
			'Resource name',
			'Another resource',
			'Final resource',
		],
	}

];


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));
export default function Footer() {
  return (
	<Box
	component="footer"
	sx={{
	  py: 3,
	  px: 2,
	  mt: 'auto',
	  backgroundColor: (theme) =>
		theme.palette.mode === 'light'
		  ? theme.palette.grey[200]
		  : theme.palette.grey[800],
	}}
  >

			<Grid container justifyContent="center">
				{footers.map((footer) => (
					<Item key={footer.title}
					sx={{ 
						minWidth: "10%",
					margin: ".2rem",
					backgroundColor: "secondary.main",
					
					}}> 
						<Box
							id={footer.title}
							sx={{ 
								fontSize: '14px', 
								textTransform: 'uppercase',
								textAlign: 'Left',
							}}
						>
							{footer.title}
						</Box>
						<Box 
							component="ul" 
							aria-labelledby={footer.title}
							sx={{ 
								textAlign: 'Left',
								margin: 0,
								padding: 1
							}}>
							{footer.description.map((item) => (
								<li key={item}>
								<Link  href="#" variant="subtitle1" color="textSecondary">
									{item}
								</Link>
								</li>
							))}
						</Box>
					</Item>
			))}
			</Grid>
    </Box>
  );
}
