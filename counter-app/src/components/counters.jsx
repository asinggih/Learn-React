import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 }, // unique identifier for each counter, and initial value
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	// we want to pass a reference to this method
	// using props to our child component.
	handleDelete = counterID => {
		// create a new counters list but without
		// the element of the given counterID
		const counters = this.state.counters.filter(c => c.id !== counterID);
		this.setState({ counters: counters });
	};

	render() {
		return (
			<div>
				{this.state.counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={this.handleDelete}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
