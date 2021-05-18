import React, { useState } from 'react';
import ShoppingList from './ShoppingList/ShoppingList';
import Product from './Products/Product';
import Header from './Header';
import Products from './Products/Products';
import PostForm from './PostForm';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function App(props) {
	const [cart, updateCart] = useState([]);
	const products = useState([
		{
			item: '',
			brand: '',
			units: '',
			quantity: 0,
			isPurchased: false
		}
	]);
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			spacing={5}
		>
			<div className="pageLayoutDiv">
				{/* <Grid item xs={6} sm={6} md={6} lg={12} xl={12}> */}
				<Header />
				{/* </Grid> */}
				<Product />
				{/* <ShoppingList /> */}
			</div>
		</Grid>
	);
}
