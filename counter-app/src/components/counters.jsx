import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		return (
			<div>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{/* 
                    Changed this.state.counters into
                    this.props.counters since we already lifted the counters array
                    to App.js 
                */}
				{this.props.counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
