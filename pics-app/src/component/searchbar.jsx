import React, { Component } from "react";

class SearchBar extends Component {
	state = {
		term: ""
	};

	handleInputChange = event => {
		this.setState({ term: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term); // this is the method that was passed as prop from the parent component
		// console.log(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.handleInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
