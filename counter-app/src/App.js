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

	render() {
		return (
			<React.Fragment>
				<Navbar
					totalCounters={
						this.state.counters.filter(counter => counter.value > 0)
							.length
					}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
