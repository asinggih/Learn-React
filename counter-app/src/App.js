import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

// Put all of the necessary components inside our
// App component
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<main className="container">
					<Counters />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
