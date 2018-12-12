import React, { Component } from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./component/searchbar";
import ImageList from "./component/imagelist";

class App extends Component {
	state = {
		images: [] // we use an empty array because we eventually will populate this
		// with image objects
	};

	handleSearchSubmit = async searchTerm => {
		/* 
		
		axios has 2 arguments: URL, and objects that can be used to customies the request
		
		The request below will produce something like
		https://api.unsplash.co/search/photos?query={OUR SEARCH TERM}

		*/
		const res = await unsplash.get("/search/photos", {
			params: { query: searchTerm }
		});
		this.setState({ images: res.data.results });

		// console.log(this.state.images);
	};

	render() {
		return (
			<div className="ui container m-3">
				<SearchBar onSubmit={this.handleSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
