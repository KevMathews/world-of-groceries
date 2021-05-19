import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

export default function Cart({ cart, setCart }) {
	const getTotalSum = () => {
		return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
	};
	const clearCart = () => {
		setCart([]);
	};
	const setQuantity = (product, amount) => {
		const newCart = [...cart];
		newCart.find(item => item.name === product.name).quantity = amount;
		setCart(newCart);
	};
	const removeFromCart = productToRemove => {
		setCart(cart.filter(product => product !== productToRemove));
	};

	return (
		<>
			<Box mt={2}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={1}
				>
					<Grid item>
						<Typography variant="h6">Total Cost: ${getTotalSum()}</Typography>
						<div className="totalCost"></div>
					</Grid>
				</Grid>
			</Box>
			<Box mt={3}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={1}
				>
					{/* <div className="productsBoughtList"> */}
					{cart.map((product, idx) => (
						<Grid item key={idx} className="product">
							{/* <div className="productList" key={idx}> */}
							<Typography variant="subtitle1" justify="center">
								{product.name}
							</Typography>
							{/* <h3></h3> */}
							<Typography variant="body2" justify="center">
								${product.cost}
							</Typography>
							{/* <h4></h4> */}
							<img
								className="foodPics"
								src={product.image}
								alt={product.name}
							/>
							<br />
							<Input
								className="inputValue"
								value={product.quantity}
								helperText="Set Quantity"
								onChange={e => setQuantity(product, parseInt(e.target.value))}
							/>
							<button onClick={() => removeFromCart(product)}>Remove</button>
							{/* </div> */}
						</Grid>
					))}
					{/* </div> */}
				</Grid>
			</Box>
		</>
	);
}
