import React, { Component } from 'react';
import Products, { products } from './Products';
import axios from 'axios';
class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			category: '',
			name: '',
			cost: '',
			image: ''
		};
	}
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	submitHandler = e => {
		e.preventDefault();

		// const newItem = this.state;
		// const theProps = props.products;
		// console.log(theProps);
		// theProps.push(newItem);
	};

	render() {
		const { category, name, cost, image } = this.state;
		return (
			<div className="postFormDiv">
				<form onSubmit={this.submitHandler}>
					<div>
						Category:
						<input
							type="text"
							name="category"
							value={category}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						Name:
						<input
							type="text"
							name="name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						Cost:
						<input
							type="text"
							name="cost"
							value={cost}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						Image
						<input
							type="text"
							name="image"
							value={image}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
export default PostForm;
