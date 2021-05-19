import React from 'react';

export default function ShoppingToDo({ todo, handleToggle }) {
	const handleClick = e => {
		e.preventDefault();
		handleToggle(e.currentTarget.id);
	};

	return (
		<div
			id={todo.id}
			key={todo.id}
			name="todo"
			value={todo.id}
			onClick={handleClick}
			className={todo.complete ? 'todo strike' : 'todo'}
		>
			{todo.task}
		</div>
	);
}
