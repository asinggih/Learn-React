import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
	componentDidMount() {
		// The 2nd argument is for the callback to initate the Oauth client,
		// after the first library has been properly loaded
		window.gapi.load("client:auth2", async () => {
			await window.gapi.client.init({
				clientId:
					"175691331158-97tv1jg8kj1lhhqil7bgkgu07jlaoj5t.apps.googleusercontent.com",
				scope: "email"
			});
			this.auth = window.gapi.auth2.getAuthInstance();
			this.onAuthChange(this.auth.isSignedIn.get());
			// Update auth status on the fly
			this.auth.isSignedIn.listen(this.onAuthChange); // no () since its a callback
		});
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(); // our action creator method
		} else {
			this.props.signOut();
		}
	};

	// Helper methods for signing in and signing out
	onSignInClick = () => {
		this.auth.signIn(); // gapi method
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		/**
		 * isSignedIn is now stored in Redux, not
		 * in component level state.
		 *
		 * Hence, this.props is used as opposed to
		 * this.state.
		 */

		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn === true) {
			return (
				<button
					className="ui red google button"
					onClick={this.onSignOutClick}
				>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					className="ui red google button"
					onClick={this.onSignInClick}
				>
					<i className="google icon" />
					Sign In With Google
				</button>
			);
		}
	}

	render() {
		return (
			<div>
				<b>{this.renderAuthButton()}</b>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isSignedIn: state.authentication.isSignedIn // can be null, true, or false
	};
};

export default connect(
	mapStateToProps,
	{ signIn, signOut } // actions that we imported
)(GoogleAuth);
