import React from 'react';
import ShoppingToDo from './ShoppingToDo';
import Grid from '@material-ui/core/Grid';

export default function ShoppingToDoList({
	toDoList,
	handleToggle,
	handleFilter
}) {
	return (
		<>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={1}
				item
			>
				{toDoList.map(todo => {
					return (
						<>
							<Grid xs={1} sm={1} md={1} lg={1} item className="groceryList">
								<ShoppingToDo
									todo={todo}
									handleToggle={handleToggle}
									handleFilter={handleFilter}
								/>
							</Grid>
						</>
					);
				})}
			</Grid>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				spacing={1}
				item
			>
				<Grid xs={3} sm={3} md={3} lg={3} item className="groceryList2">
					<button onClick={handleFilter}>Clear Completed</button>
				</Grid>
			</Grid>
		</>
	);
}
