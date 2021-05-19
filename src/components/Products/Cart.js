import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

export default function Cart({ cart, setCart }) {
	const getTotalSum = () => {
		let total = cart.reduce(
			(sum, { cost, quantity }) => sum + cost * quantity,
			0
		);
		total = total.toFixed(2);
		return total;
	};
	// const getCartTotal = () => {
	// let total = cart.reduce((sum, { quantity }) => sum + quantity, 0);

	// };
	// };

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
					{cart.map((product, idx) => (
						<Grid item key={idx} className="product">
							<Typography variant="subtitle1" justify="center">
								{product.name}
							</Typography>
							<Typography variant="body2" justify="center">
								${product.cost}
							</Typography>
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
								onChange={e =>
									setQuantity(product, parseInt(e.target.value || 0))
								}
							/>
							<button onClick={() => removeFromCart(product)}>Remove</button>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}
