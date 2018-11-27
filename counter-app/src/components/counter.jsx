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
			<React.Fragment>		
				<span>{ this.formatCount() }</span>
				<button>Increment</button>
			</React.Fragment>
		);		
	}

	formatCount() {
		const { count } = this.state;
		return count == 0 ? 'Zero' : count;
	}
}

export default Counter

