import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
	// Destructuring from meta property
	renderError = ({ error, touched }) => {
		// because we only need meta.error and meta.touched
		if (touched && error) {
			// if Field has been touched, and there's an error message
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};

	// Destructuring from Field component
	renderInput = ({ input, inputLabel, meta }) => {
		// if input has been touched and there's an error
		const dynamicClassName = `field ${
			meta.error && meta.touched ? "error" : ""
		}`;
		return (
			<div className={dynamicClassName}>
				<label>{inputLabel}</label>
				<input {...input} autoComplete="off" />
				<div>{this.renderError(meta)}</div>
			</div>
		);
	};

	onSubmit(formValues) {
		// We can do whatever with our form values in here. input sanitation etc.
		console.log(formValues);
	}

	render() {
		return (
			<form
				// Submission is handled using redux-form handleSubmit prop
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
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
