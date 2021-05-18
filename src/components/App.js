import React, { useState } from 'react';
import ShoppingList from './ShoppingList/ShoppingList';
import Product from './Products/Product';
import Header from './Header';
import Products from './Products/Products';
import PostForm from './PostForm';

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
		<div className="pageLayoutDiv">
			<Header />
			<Product />
			<ShoppingList />
		</div>
	);
}
