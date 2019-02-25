import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editStream(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.stream) {
			return <div>Loading..</div>;
		}
		console.log(this.props.stream);
		return (
			<div>
				<h3>Edit Stream</h3>
				<StreamForm
					/**
					 * we use title and description as keys, because
					 * that's what we use in our Field name
					 * */
					// initialValues={{
					// 	title: "EDIT ME",
					// 	description: "EDIT ME TOO"
					// }}
					/**
					 * lodash pick creates a new object, based on
					 * the given keyname of a particular object
					 * */
					initialValues={_.pick(
						this.props.stream,
						"title",
						"description"
					)}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

export default connect(
	mapStateToProps,
	{ fetchStream, editStream }
)(StreamEdit);
