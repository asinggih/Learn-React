import React, { Component } from "react";

class Counter extends Component {
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.counter.value !== this.props.counter.value) {
			// do ajax call to pull new value
		}
	}

	componentWillUnmount() {
		console.log("Counter - removed");
	}

	getBadgeClasses() {
		// let is used instead of var, because we only need
		// it within this scope, not global
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const value = this.props.counter.value;
		return value === 0 ? "Zero" : value;
	}

	render() {
		console.log("Counter rendered");
		return (
			<div>
				{/* {this.props.children} */}
				<h3>Counter #{this.props.counter.id}</h3>
				{/* 
					We have to use className for span / div class name because
					class is obviously a reserved keyword in jsx.
				*/}
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button
					// passing the counter ID parameter into the function
					// via props.
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}
}

export default Counter;
