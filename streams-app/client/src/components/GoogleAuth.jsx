import React, { Component } from "react";

class GoogleAuth extends Component {
	state = {
		// initial state is null cos we don't know if user is signed in or not
		isSignedIn: null
	};

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
			this.setState({
				isSignedIn: this.auth.isSignedIn.get()
			});
			// Update auth status on the fly
			this.auth.isSignedIn.listen(this.onAuthChange); // no () since its a callback
		});
	}

	onAuthChange = () => {
		this.setState({
			isSignedIn: this.auth.isSignedIn.get()
		});
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>I don't know if we are signed in</div>;
		} else if (this.state.isSignedIn === true) {
			return <div>Yay! I am signed in</div>;
		} else {
			return <div>Not signed in</div>;
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

export default GoogleAuth;
