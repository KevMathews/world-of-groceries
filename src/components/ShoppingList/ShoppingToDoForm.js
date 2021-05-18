import React, { useState } from 'react';

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
		<div className="submitForm">
			<form onSubmit={handleSubmit}>
				<input
					value={userInput}
					type="text"
					onChange={handleChange}
					placeholder="Enter Groceries..."
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
