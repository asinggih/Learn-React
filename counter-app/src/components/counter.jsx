import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
		tags: ['t1', 't2', 't3']
	};

	render() {
		return (
			<div>
				{ 
				/* 
					Some parts of the code were removed to clean up a bit
					for the tutorial
				 */ 
				}
				{
					/*
					 * 
					 * Below is a conditional rendering example
					 * using truthy / falsy statement
					 * which will print "Please create tags"
					 * if tags array is empty
					 *  
					*/ 
					this.state.tags.length === 0 && "Please create tags" 
				}
				{ this.renderList() }
			</div>
		);		
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

export default Counter

