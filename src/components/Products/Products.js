import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PostForm from '../PostForm';
import Container from '@material-ui/core/Container';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
const HOME_GARDEN = 'Home and Garden';
const DAIRY = 'Dairy';
const MEAT = 'Meat';
const FRUITSVEGGIES = 'Fruits & Veggies';
const CANNEDGOODS = 'Canned Goods';
const FROZENFOODS = 'Frozen Foods';
const BEVERAGES = 'Beverages';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	chip: {
		margin: 2
	},
	noLabel: {
		marginTop: theme.spacing(3)
	}
}));

export default function Products({ setCart, cart }) {
	const classes = useStyles();
	const [products] = useState([
		{
			category: FRUITSVEGGIES,
			name: 'Banana',
			cost: 0.39,
			image: 'https://i.imgur.com/jJTK0bS.jpg',
			id: 1.1
		},
		{
			category: FRUITSVEGGIES,
			name: 'Strawberries',
			cost: 3.99,
			image: 'https://i.imgur.com/XoAHviU.jpg',
			id: 1.2
		},
		{
			category: FRUITSVEGGIES,
			name: 'Pineapple',
			cost: 0.39,
			image: 'https://i.imgur.com/iILIsdp.jpg',
			id: 1.3
		},
		{
			category: FRUITSVEGGIES,
			name: 'Bell Pepper',
			cost: 0.79,
			image: 'https://i.imgur.com/0LusTr7.jpg',
			id: 1.4
		},
		{
			category: FRUITSVEGGIES,
			name: 'Avocado',
			cost: 0.99,
			image: 'https://i.imgur.com/s5Jl7ZJ.jpg',
			id: 1.5
		},
		{
			category: MEAT,
			name: 'Ground Beef',
			brand: '',
			units: '1 lb',
			instock: 30,
			cost: 3.99,
			isPurchased: false,
			image: 'https://i.imgur.com/uN8Bz9P.jpg',
			id: 2.1
		},
		{
			category: MEAT,
			name: 'Pork Chops',
			brand: '',
			units: '1 lb',
			instock: 30,
			cost: 5.99,
			isPurchased: false,
			image: 'https://i.imgur.com/ZNYARmN.jpg',
			id: 2.2
		},
		{
			category: MEAT,
			name: 'Chicken Thighs',
			brand: '',
			units: '2 lb',
			instock: 30,
			cost: 6.99,
			isPurchased: false,
			image: 'https://i.imgur.com/Cnj0W7a.jpg',
			id: 2.3
		},
		{
			category: MEAT,
			name: 'Brats',
			brand: '',
			units: '5 pack',
			instock: 30,
			cost: 3.99,
			isPurchased: false,
			image: 'https://i.imgur.com/qYQ6n65.jpg',
			id: 2.4
		},
		{
			category: MEAT,
			name: 'Ribeye',
			brand: '',
			units: '2 lb',
			instock: 30,
			cost: 21.99,
			isPurchased: false,
			image: 'https://i.imgur.com/WD6jQec.jpg',
			id: 2.5
		},
		{
			category: CANNEDGOODS,
			name: 'Corn',
			brand: '',
			units: '16 oz',
			instock: 30,
			cost: 1.99,
			isPurchased: false,
			image: 'https://i.imgur.com/mjxOSbh.jpg',
			id: 3.1
		},
		{
			category: CANNEDGOODS,
			name: 'Chicken Noodle',
			brand: 'Progressive',
			units: '16 oz',
			instock: 30,
			cost: 2.99,
			isPurchased: false,
			image: 'https://i.imgur.com/mrrKwFg.jpg',
			id: 3.2
		},
		{
			category: CANNEDGOODS,
			name: 'Clam Chowder',
			brand: 'Progressive',
			units: '16 oz',
			instock: 30,
			cost: 2.99,
			isPurchased: false,
			image: 'https://i.imgur.com/0vWvtIk.jpg',
			id: 3.3
		},
		{
			category: CANNEDGOODS,
			name: 'Baked Beans',
			brand: "Bush's",
			units: '16 oz',
			instock: 30,
			cost: 1.99,
			isPurchased: false,
			image: 'https://i.imgur.com/EIEdnjd.png',
			id: 3.4
		},
		{
			category: CANNEDGOODS,
			name: 'Pasta Sauce',
			brand: 'Bertolli',
			units: '20 oz',
			instock: 30,
			cost: 1.99,
			isPurchased: false,
			image: 'https://i.imgur.com/aKK2IB4.jpg',
			id: 3.5
		},
		{
			category: FROZENFOODS,
			name: 'Chicken Strips',
			brand: 'Tyson',
			units: '2 lbs',
			instock: 30,
			cost: 8.99,
			isPurchased: false,
			image: 'https://i.imgur.com/9qiHoIh.jpg',
			id: 4.1
		},
		{
			category: FROZENFOODS,
			name: 'Mini Corn Dogs',
			brand: '',
			units: '2 lbs',
			instock: 30,
			cost: 6.99,
			isPurchased: false,
			image: 'https://i.imgur.com/VT5I78i.jpg',
			id: 4.2
		},
		{
			category: FROZENFOODS,
			name: 'Hot Pockets',
			brand: 'Tyson',
			units: '2 pack',
			instock: 30,
			cost: 3.99,
			isPurchased: false,
			image: 'https://i.imgur.com/53RMfnm.jpg',
			id: 4.3
		},
		{
			category: FROZENFOODS,
			name: 'Cauliflower Mac',
			brand: 'Tyson',
			units: '16 oz',
			instock: 30,
			cost: 4.99,
			isPurchased: false,
			image: 'https://i.imgur.com/VelLDBY.jpg',
			id: 4.4
		},
		{
			category: FROZENFOODS,
			name: 'Pad Thai',
			brand: '',
			units: '16 oz',
			instock: 30,
			cost: 3.99,
			isPurchased: false,
			image: 'https://i.imgur.com/XG6BPG8.jpg',
			id: 4.5
		},
		{
			category: DAIRY,
			name: 'Milk',
			brand: 'DairyPure',
			units: '1 Gallon',
			instock: 30,
			cost: 3.99,
			isPurchased: false,
			image: 'https://i.imgur.com/Jah0pQA.jpg',
			id: 5.1
		},
		{
			category: DAIRY,
			name: 'Eggs',
			brand: 'Great Value',
			units: '18 eggs',
			instock: 30,
			cost: 2.99,
			isPurchased: false,
			image: 'https://i.imgur.com/KTYjv1N.jpg',
			id: 5.2
		},
		{
			category: DAIRY,
			name: 'Swiss Cheese',
			brand: 'Kraft',
			units: '16 slices',
			instock: 30,
			cost: 2.99,
			isPurchased: false,
			image: 'https://i.imgur.com/SBoerDZ.jpg',
			id: 5.3
		},
		{
			category: DAIRY,
			name: 'String Cheese',
			brand: 'DairyPure',
			units: '24 pack',
			instock: 30,
			cost: 3.99,
			isPurchased: false,
			image: 'https://i.imgur.com/D8lLO4z.jpg',
			id: 5.4
		},
		{
			category: BEVERAGES,
			name: 'Fat Tire Beer',
			brand: 'Fat Tire',
			units: '6 12oz bottles',
			instock: 30,
			cost: 10.99,
			isPurchased: false,
			image: 'https://i.imgur.com/hXgOaZb.jpg',
			id: 6.1
		},
		{
			category: BEVERAGES,
			name: 'Apothic Red',
			brand: 'Apothic',
			units: '750ml',
			instock: 30,
			cost: 9.99,
			isPurchased: false,
			image: 'https://i.imgur.com/c4R6ouY.jpg',
			id: 6.2
		},
		{
			category: BEVERAGES,
			name: 'Pink Lemonade',
			brand: 'Simply',
			units: '1 Gallon',
			instock: 30,
			cost: 4.99,
			isPurchased: false,
			image: 'https://i.imgur.com/4UBfRDf.jpg',
			id: 6.3
		},
		{
			category: BEVERAGES,
			name: 'Orange Juice',
			brand: 'Sunny D',
			units: '1 Gallon',
			instock: 30,
			cost: 4.59,
			isPurchased: false,
			image: 'https://i.imgur.com/imXSGFx.jpg',
			id: 6.4
		},
		{
			category: BEVERAGES,
			name: 'Coke',
			brand: 'Coca Cola',
			units: '12oz 24 pack',
			instock: 30,
			cost: 8.99,
			isPurchased: false,
			image: 'https://i.imgur.com/uqBAixr.jpg',
			id: 6.5
		}
	]);

	const addToCart = product => {
		let newCart = [...cart];
		let itemInCart = newCart.find(item => product.name === item.name);
		if (itemInCart) {
			itemInCart.quantity++;
			product.instock--;
		} else {
			itemInCart = {
				...product,
				quantity: 1
			};
			newCart.push(itemInCart);
			// product.quantity--;
		}
		setCart(newCart);
	};

	// const removeFromCart = product => {
	// 	// let newCart = [...cart];
	// 	// let itemInCart = newCart.indexOf(product);
	// 	// if (pr)
	// 	console.log(product);
	// 	console.log(newCart);
	// 	console.log(itemInCart);
	// 	let newCart = [...cart];
	// 	let itemInCart = newCart.find(item => product.name === item.name);
	// 	console.log(cart);
	// 	if (itemInCart.quantity > 0) {
	// 		itemInCart.quantity--;
	// 		product.instock--;
	// 	} else if (!itemInCart) {
	// 		itemInCart = {
	// 			...product
	// 		};
	// 		newCart.push(itemInCart);
	// 		product.quantity--;
	// 	}
	// 	setCart(newCart);
	// };

	const removeFromCart = product => {
		let newCart = [...cart];
		let itemInCart = newCart.find(item => product.name === item.name);
		if (itemInCart.quantity >= 1) {
			itemInCart.quantity--;
			product.instock--;
		} else if (!itemInCart) {
			itemInCart = {
				...product
			};
			newCart.push(itemInCart);
			// product.quantity--;
		}
		setCart(newCart);
	};

	const [category, setCategory] = useState(FRUITSVEGGIES);
	const getProductsInCategory = () => {
		return products.filter(product => product.category === category);
	};

	return (
		<>
			<Box mt={1}>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
					spacing={0}
				>
					<Grid item xs={9} sm={9}>
						{/* Select a category:
						<select onChange={e => setCategory(e.target.value)}>
							<option id="selVal" value={FRUITSVEGGIES}>
								{FRUITSVEGGIES}
							</option>
							<option id="selVal" value={DAIRY}>
								{DAIRY}
							</option>
							<option id="selVal" value={MEAT}>
								{MEAT}
							</option>
							<option id="selVal" value={CANNEDGOODS}>
								{CANNEDGOODS}
							</option>
							<option id="selVal" value={FROZENFOODS}>
								{FROZENFOODS}
							</option>
							<option id="selVal" value={BEVERAGES}>
								{BEVERAGES}
							</option>
						</select> */}
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="select">Select a category:</InputLabel>
							{/* Select a category&nbsp;&nbsp; */}
							<NativeSelect
								id="select"
								onChange={e => setCategory(e.target.value)}
							>
								<option id="selVal" value={FRUITSVEGGIES}>
									{FRUITSVEGGIES}
								</option>
								<option id="selVal" value={DAIRY}>
									{DAIRY}
								</option>
								<option id="selVal" value={MEAT}>
									{MEAT}
								</option>
								<option id="selVal" value={CANNEDGOODS}>
									{CANNEDGOODS}
								</option>
								<option id="selVal" value={FROZENFOODS}>
									{FROZENFOODS}
								</option>
								<option id="selVal" value={BEVERAGES}>
									{BEVERAGES}
								</option>
							</NativeSelect>
						</FormControl>
					</Grid>
				</Grid>
			</Box>
			<Box mt={3}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={2}
					item
				>
					{getProductsInCategory().map((product, id) => (
						<Grid item key={id} className="product">
							<Typography variant="subtitle1" justify="center">
								{product.name}
							</Typography>
							<Typography variant="body2">${product.cost}</Typography>
							<h3></h3>
							<h4></h4>
							<img
								className="foodPics"
								src={product.image}
								alt={product.name}
							/>
							<br />

							<Button
								size="small"
								startIcon={
									<RemoveShoppingCartIcon
										style={{ marginRight: -14 }}
										elevation={8}
									/>
								}
								variant="contained"
								style={{ backgroundColor: 'red', color: '#FFFFFF' }}
								onClick={() => removeFromCart(product)}
								className="minusButton"
							></Button>
							<Button
								size="small"
								startIcon={<AddShoppingCartIcon style={{ marginRight: -14 }} />}
								variant="contained"
								style={{ backgroundColor: '#12824C', color: '#FFFFFF' }}
								onClick={() => addToCart(product)}
								className="addButton"
							></Button>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}
