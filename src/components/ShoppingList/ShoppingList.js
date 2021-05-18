import React, { useState } from 'react';
import data from './data.json';
import ShoppingToDoList from './ShoppingToDoList';
import ShoppingToDoForm from './ShoppingToDoForm';

export default function ShoppingList() {
	const [toDoList, setToDoList] = useState(data);

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
		<div className="shoppingListDiv" id="sld">
			<img className="phone" src="./img/tablet.png"></img>
			<div className="shoppingListInnerDiv">
				<h1 className="shoppingListTitle">Shopping List</h1>
				<hr />
				<ShoppingToDoList
					toDoList={toDoList}
					handleToggle={handleToggle}
					handleFilter={handleFilter}
				/>
				<ShoppingToDoForm addTask={addTask} />
			</div>
		</div>
	);
}
