import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
export default function Header() {
	return (
		<Box mt={-2}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={0}
			>
				<Grid xs={12} sm={10} md={12} lg={12} item>
					<img className="headerImage" id="mainLogo" src="./img/logo2.gif" />;
				</Grid>
			</Grid>
		</Box>
	);
}
