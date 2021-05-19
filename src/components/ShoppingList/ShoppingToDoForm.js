import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
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
			<Grid xs={12} sm={12} md={12} lg={12} item>
				<form onSubmit={handleSubmit}>
					<input
						value={userInput}
						type="text"
						onChange={handleChange}
						placeholder="Enter Groceries..."
					/>
					<button>Submit</button>
				</form>
			</Grid>
		</Grid>
	);
}
