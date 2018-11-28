import React, { Component } from 'react';

class Counter extends Component {
	state = {
		value: this.props.value,
	};

	// constructor(){
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// 	this.doHandleIncrement = this.doHandleIncrement.bind(this);
	// }

	render() {
		return (
			<div>
				{/* 
					We have to use className for span / div class name because
					class is obviously a reserved keyword in jsx.
				*/}
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span> 
				<button onClick = { () => this.handleIncrement({id: 1}) } className="btn btn-secondary btn-sm">Increment</button>
			</div>
		);		
	}

	// doHandleIncrement () {
	// 	this.handleIncrement({ id:1 });
	// }

	handleIncrement = (product) => {
		/* 
			We're passing a new state object (or override, if it already exist),
			to the current Class' state.
		*/
		this.setState( { value: this.state.value + 1 } );
	}

	getBadgeClasses() {
		// let is used instead of var, because we only need 
		// it within this scope, not global
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.state;
		return value === 0 ? 'Zero' : value;
	}

	renderList() {
		if (this.state.tags.length === 0) {
			return <p>No tags here!</p>;
		}
		return <ul>{ this.mapToList() }</ul>;
	}

	mapToList() {
		/* 
		This code below basically puts each item inside
		the tags array into <li> html objects
		*/
		const tags = this.state.tags;
		return tags.map(tag => <li key={tags.indexOf(tag)}>{tag}</li>);
	}
}

export default Counter;

