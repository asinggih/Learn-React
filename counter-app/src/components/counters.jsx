import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		console.log("COunters rendered");
		// No more this.props.method in these defined
		// methods below (Destructuring)
		const { onReset, counters, onDelete, onIncrement } = this.props;

		return (
			<div>
				<button
					onClick={onReset}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{/* 
                    Changed this.state.counters into
                    counters since we already lifted the counters array
                    to App.js 
                */}
				{counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
