import React, { Component } from 'react';
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
		console.log(this.state);
		axios
			.post('http://localhost:3000/', this.state)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
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
