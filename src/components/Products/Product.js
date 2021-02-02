import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import PostForm from '../PostForm';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
const PAGE_ADD = 'add';

export default function Product(props) {
	const [cart, setCart] = useState([]);
	const [page, setPage] = useState(PAGE_PRODUCTS);
	const navigateTo = nextPage => {
		setPage(nextPage);
	};
	const getCartTotal = () => {
		return cart.reduce((sum, { quantity }) => sum + quantity, 0);
	};
	const clearCart = () => {
		setCart([]);
	};
	return (
		<div className="productsListDiv">
			<div className="productsHeader">
				<button className="gocartButton" onClick={() => navigateTo(PAGE_CART)}>
					Go to Cart ({getCartTotal()})
				</button>
				<button
					className="storeButton"
					onClick={() => navigateTo(PAGE_PRODUCTS)}
				>
					Go to Store
				</button>
				<button className="clearCartButton" onClick={clearCart}>
					Clear Cart
				</button>
				<button className="cartButton" onClick={() => navigateTo(PAGE_ADD)}>
					AddItem
				</button>
			</div>

			<div className="productsListingsDiv">
				{page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
				{page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
				{page === PAGE_ADD && <PostForm cart={cart} setCart={setCart} />}
			</div>
		</div>
	);
}
