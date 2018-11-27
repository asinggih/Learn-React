import React, { Component } from 'react';

class Counter extends Component {
	render() {
		/* 
		We can use React.Fragment instead of div tag when returning
		multiple html items. This prevents the creation of additional and
		redundant div tags in the sourcecode.
		*/
		return (
			<React.Fragment>		
				<h1>Hello World</h1>
				<button>Increment</button>
			</React.Fragment>
		);		
	}
}

export default Counter

