import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
export default function Header() {
	return (
		<Grid container>
			<Grid item>
				<img className="headerImage" id="mainLogo" src="./img/logo2.gif" />;
			</Grid>
		</Grid>
	);
}
