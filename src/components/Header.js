import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
export default function Header() {
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			spacing={0}
		>
			<Grid xs={11} sm={10} md={12} lg={12} item>
				<img className="headerImage" id="mainLogo" src="./img/logo2.gif" />;
			</Grid>
		</Grid>
	);
}
