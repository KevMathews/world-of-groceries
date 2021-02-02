import React from 'react';

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
			<div className="totalCost">Total Cost: ${getTotalSum()}</div>
			<div className="productsBoughtList">
				{cart.map((product, idx) => (
					<div className="productList" key={idx}>
						<h3>{product.name}</h3>
						<h4>${product.cost}</h4>
						<img className="foodPics" src={product.image} alt={product.name} />
						<br />
						<input
							value={product.quantity}
							onChange={e => setQuantity(product, parseInt(e.target.value))}
						/>
						<button onClick={() => removeFromCart(product)}>Remove</button>
					</div>
				))}
			</div>
		</>
	);
}
