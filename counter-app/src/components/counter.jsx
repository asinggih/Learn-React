import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
	};

	render() {
		/* 
			We can use React.Fragment instead of div tag when returning
			multiple html items. This prevents the creation of additional and
			redundant div tags in the sourcecode.
		*/
		return (
			<div>
				{/* 
					We have to use className for span / div class name because
					class is obviously a reserved keyword in jsx.
				*/}
				<span className="badge badge-primary m-2">{ this.formatCount() }</span> 
				<button className="btn btn-secondary btn-sm">Increment</button>
			</div>
		);		
	}

	formatCount() {
		const { count } = this.state;
		return count == 0 ? 'Zero' : count;
	}
}

export default Counter

