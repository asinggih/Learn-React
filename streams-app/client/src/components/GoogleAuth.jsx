import React, { Component } from "react";

class GoogleAuth extends Component {
	componentDidMount() {
		// The 2nd argument is for the callback to initate the Oauth client,
		// after the first library has been properly loaded
		window.gapi.load("client:auth2", () => {
			window.gapi.client.init({
				clientId:
					"175691331158-97tv1jg8kj1lhhqil7bgkgu07jlaoj5t.apps.googleusercontent.com",
				scope: "email"
			});
		});
	}

	render() {
		return (
			<div>
				<b>GoogleAuth</b>
			</div>
		);
	}
}

export default GoogleAuth;
