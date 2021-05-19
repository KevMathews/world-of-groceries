import React, { useState } from 'react';
import data from './data.json';
import ShoppingToDoList from './ShoppingToDoList';
import ShoppingToDoForm from './ShoppingToDoForm';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {
	Card,
	CardMedia,
	Typography,
	CardHeader,
	Divider,
	CardContent,
	CardActions
} from '@material-ui/core';

import Container from '@material-ui/core/Container';
// import Tablet from '/public/img/tablet2.png';
const useStyles = makeStyles({
	root: {
		width: 900,
		maxWidth: '100%',
		border: 'solid',
		borderWidth: 2,
		borderRadius: 10,
		marginTop: 10,

		textAlign: 'center'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 19,
		color: 'white'
	},
	pos: {
		marginBottom: 12
	}
});

export default function ShoppingList() {
	const [toDoList, setToDoList] = useState(data);
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	const handleToggle = id => {
		let mapped = toDoList.map(task => {
			return task.id === Number(id)
				? { ...task, complete: !task.complete }
				: { ...task };
		});
		setToDoList(mapped);
	};

	const handleFilter = () => {
		let filtered = toDoList.filter(task => {
			return !task.complete;
		});
		setToDoList(filtered);
	};

	const addTask = userInput => {
		let copy = [...toDoList];
		copy = [
			...copy,
			{ id: toDoList.length + 1, task: userInput, complete: false }
		];
		setToDoList(copy);
	};

	return (
		<>
			<Card className={classes.root} elevation={8}>
				<Box boxShadow={8}>
					<CardHeader
						className={classes.title}
						style={{ backgroundColor: 'blue' }}
						title="Shopping List"
						color="white"
						elevation={8}
					></CardHeader>
				</Box>
				<CardContent>
					<Typography
						className={classes.pos}
						color="textSecondary"
					></Typography>
					<Typography variant="body2" component="p">
						<ShoppingToDoList
							toDoList={toDoList}
							handleToggle={handleToggle}
							handleFilter={handleFilter}
						/>
					</Typography>
				</CardContent>
				<CardActions>
					<ShoppingToDoForm addTask={addTask} />
				</CardActions>
			</Card>
			{/* <Box mb={-4} pb={-2}>
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					ma
					spacing={0}
				>
					<Grid xs={12} sm={12} md={12} lg={12} item>
						<Typography
							gutterBottom
							className={classes.shoppingArea}
						></Typography>

					</Grid>
				</Grid>
			</Box> */}
		</>
	);
}
