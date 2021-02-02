import React from 'react';
import ShoppingToDo from './ShoppingToDo';

export default function ShoppingToDoList({
	toDoList,
	handleToggle,
	handleFilter
}) {
	return (
		<div className="ShoppingToDoListDiv">
			{toDoList.map(todo => {
				return (
					<ShoppingToDo
						todo={todo}
						handleToggle={handleToggle}
						handleFilter={handleFilter}
					/>
				);
			})}
			<button onClick={handleFilter}>Clear Completed</button>
		</div>
	);
}
