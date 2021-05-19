import React, { useState } from 'react';
import ShoppingList from './ShoppingList/ShoppingList';
import Product from './Products/Product';
import Header from './Header';
import Products from './Products/Products';
import PostForm from './PostForm';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

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
			direction="column"
			justify="center"
			alignItems="center"
			spacing={1}
		>
			<Grid xs={12} md={12} lg={12} item>
				<Header />
			</Grid>
			<Box mt={-1}>
				<Grid xs={12} md={12} lg={12} item>
					<Product />
				</Grid>
			</Box>
			<Grid xs={12} md={12} lg={12} item>
				<ShoppingList />
			</Grid>
		</Grid>
	);
}
