import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
		tags: ['t1', 't2', 't3']
	};

	render() {
		return (
			<div>
				{/* 
					We have to use className for span / div class name because
					class is obviously a reserved keyword in jsx.
				*/}
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span> 
				<button className="btn btn-secondary btn-sm">Increment</button>
				<ul>
					{ this.mapToList() }
				</ul>
			</div>
		);		
	}

	mapToList() {
		/* 
		This code below basically puts each item inside
		the tags array into <li> html objects
		*/
		const tags = this.state.tags;
		return tags.map(tag => <li key={tags.indexOf(tag)}>{tag}</li>);
	}

	getBadgeClasses() {
		// let is used instead of var, because we only need 
		// it within this scope, not global
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter

