import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
export default function ShoppingToDoForm({ addTask }) {
	const [userInput, setUserInput] = useState('');
	const handleChange = e => {
		setUserInput(e.currentTarget.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		addTask(userInput);
		setUserInput('');
	};
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			spacing={0}
			item
		>
			<Grid xs={7} sm={7} md={7} lg={7} item>
				<form onSubmit={handleSubmit}>
					<Input
						value={userInput}
						type="text"
						onChange={handleChange}
						placeholder="Enter Groceries..."
					/>
					<Button
						value={userInput}
						type="text"
						onChange={handleChange}
						placeholder="Enter Groceries..."
						variant="contained"
						size="small"
						color="primary"
					>
						Submit
					</Button>
				</form>
			</Grid>
		</Grid>
	);
}
