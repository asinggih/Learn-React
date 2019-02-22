import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../streams/StreamForm";

class StreamCreate extends Component {
	onSubmit = formValues => {
		// We can do whatever with our form values in here. input sanitation etc.
		this.props.createStream(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create Stream</h3>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(
	null, // placeholder for mapStateToProps
	{ createStream }
)(StreamCreate);
