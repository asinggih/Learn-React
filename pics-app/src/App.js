import React, { Component } from "react";
import "./App.css";
import "./component/searchbar";
import SearchBar from "./component/searchbar";

class App extends Component {
	handleSearchSubmit = searchTerm => {
		console.log(searchTerm);
	};

	render() {
		return (
			<div className="ui container m-3">
				<SearchBar onSubmit={this.handleSearchSubmit} />
			</div>
		);
	}
}

export default App;
