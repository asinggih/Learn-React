import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./component/searchbar";

class App extends Component {
	handleSearchSubmit = searchTerm => {
		/* 
		
		axios has 2 arguments: URL, and objects that can be used to customies the request
		
		The request below will produce something like
		https://api.unsplash.com/search/photos?query={OUR SEARCH TERM}

		*/
		axios.get("https://api.unsplash.com/search/photos", {
			params: { query: searchTerm },
			headers: {
				Authorization:
					"Client-ID 2cf69ccc2d5dd3c76b56227ad5e47f480c8aca2564adb0ab23f000abd65b278e"
			}
		});
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
