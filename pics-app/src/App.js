import React, { Component } from "react";
import "./App.css";
import "./component/searchbar";
import SearchBar from "./component/searchbar";

class App extends Component {
	render() {
		return (
			<div className="ui container m-3">
				<SearchBar />
			</div>
		);
	}
}

export default App;
