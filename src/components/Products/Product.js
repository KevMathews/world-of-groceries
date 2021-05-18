import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import PostForm from '../PostForm';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import Button from '@material-ui/core/Button';
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
		<>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={2}
				style={{ backgroundColor: 'teal' }}
			>
				<Grid item>
					<Button
						onClick={() => navigateTo(PAGE_PRODUCTS)}
						startIcon={<StoreIcon />}
						variant="contained"
						color="primary"
					></Button>
				</Grid>
				<Grid item>
					<Button
						onClick={() => navigateTo(PAGE_CART)}
						startIcon={<ShoppingCartIcon />}
						variant="contained"
						size="small"
						color="primary"
					>
						({getCartTotal()})
					</Button>
				</Grid>

				<Grid item>
					<Button
						onClick={clearCart}
						startIcon={<RemoveShoppingCartIcon />}
						variant="contained"
						color="secondary"
					>
						{/* Clear */}
					</Button>
				</Grid>
			</Grid>

			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={2}
				style={{ backgroundColor: 'teal' }}
			>
				<Grid item>
					<div className="productsListingsDiv" id="plsd">
						{page === PAGE_PRODUCTS && (
							<Products cart={cart} setCart={setCart} />
						)}
						{page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
						{page === PAGE_ADD && <PostForm cart={cart} setCart={setCart} />}
					</div>
				</Grid>
			</Grid>
		</>
	);
}
