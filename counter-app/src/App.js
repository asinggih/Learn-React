import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

// Put all of the necessary components inside our
// App component
class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 }, // unique identifier for each counter, and initial value
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};
	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const idx = counters.indexOf(counter);
		// assign item on the particular index
		// to a new object, which is the argument of the function
		counters[idx] = {
			...counter // ... means expand whatever is inside the variable counter
		};
		counters[idx].value += 1;
		this.setState({ counters: counters }); // update state with the updated counters array
	};

	handleDecrement = counter => {
		const tempCounters = [...this.state.counters];
		const idx = tempCounters.indexOf(counter);

		if (tempCounters[idx].value > 0) {
			tempCounters[idx].value -= 1;
		}
		this.setState({ tempCounters });
	};

	// we want to pass a reference to this method
	// using props to our child component.
	handleDelete = counterID => {
		// create a new counters list but without
		// the element of the given counterID
		const counters = this.state.counters.filter(c => c.id !== counterID);
		this.setState({ counters: counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters: counters });
	};

	handleTotal = () => {
		const { counters } = this.state;
		let totalItems = 0;

		for (var i = 0; i < counters.length; i++) {
			totalItems += counters[i].value;
		}
		return totalItems;
	};

	render() {
		return (
			<React.Fragment>
				<Navbar totalCounters={this.handleTotal()} />
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
