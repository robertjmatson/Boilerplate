import React from 'react';
import {Box, Link, Grid, Typography, Container}from '@mui/material';


function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'A BoilerPlate Application'}
		</Typography>
	);
}

const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us'],
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
	},

];

function Footer() {
	return (
		<React.Fragment>
			<Container maxWidth="md" component="footer">
				<Grid container spacing={2} justify="space-evenly">
					{footers.map((footer) => (
						<Grid item xs={6} sm={3} key={footer.title}>
							<Typography variant="h6" color="textPrimary" gutterBottom>
								{footer.title}
							</Typography>
							<ul>
								{footer.description.map((item) => (
									<li key={item}>
										<Link href="#" variant="subtitle1" color="textSecondary">
											{item}
										</Link>
									</li>
								))}
							</ul>
						</Grid>
					))}
				</Grid>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</React.Fragment>
	);
}

export default Footer;