import React from 'react';
import ShoppingToDo from './ShoppingToDo';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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
							<Grid xs={3} sm={3} md={3} lg={3} item className="groceryList">
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
			<Box mt={10} mb={-5}>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
					spacing={4}
					item
				>
					<Grid xs={6} sm={6} md={7} lg={7} item className="groceryList">
						<Button
							variant="contained"
							style={{ backgroundColor: 'red', color: '#FFFFFF' }}
							onClick={handleFilter}
						>
							Clear Completed
						</Button>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
