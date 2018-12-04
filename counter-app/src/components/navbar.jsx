import React, { Component } from "react";

class Navbar extends Component {
	// Display nothing if totalCounters is 0
	displayTotal = () => {
		/* this is equal to
		
		if (this.props.totalCounters === 0) {
			return "";
		}
		return this.props.totalCounters;
		
		*/

		return this.props.totalCounters === 0 ? "" : this.props.totalCounters;
	};

	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
					<a className="navbar-brand" href=".">
						Navbar{" "}
						<span
							className={
								this.props.totalCounters === 0
									? ""
									: "badge badge-pill badge-secondary" // Only display css when counter is not 0
							}
						>
							{this.displayTotal()}
						</span>
					</a>
				</nav>
			</div>
		);
	}
}

export default Navbar;
