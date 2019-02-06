import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
	renderInput({ input, inputLabel, meta }) {
		// Destructuring from Field component
		// console.log(meta);
		return (
			<div className="field">
				<label>{inputLabel}</label>
				<input {...input} />
				<div>{meta.error}</div>
			</div>
		);
	}

	onSubmit(formValues) {
		// We can do whatever with our form values in here. input sanitation etc.
		console.log(formValues);
	}

	render() {
		return (
			<form
				// Submission is handled using redux-form handleSubmit prop
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form"
			>
				<Field
					name="title"
					component={this.renderInput}
					inputLabel="Enter Title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					inputLabel="Enter Description"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};

	// Basic validation to check if it's an empty string
	if (!formValues.title) {
		errors.title = "Title must be entered";
	}

	if (!formValues.description) {
		errors.description = "Description must be entered";
	}

	return errors;
};

export default reduxForm({
	form: "streamCreate",
	validate
})(StreamCreate);
