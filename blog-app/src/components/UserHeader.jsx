import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}

	render() {
		const { users, userId } = this.props;

		// find the user with the same user id as the one from
		// this.props.userId, from the returned users array of the api call
		const currentUser = users.find(user => user.id === userId);

		return currentUser ? (
			<div className="header">{currentUser.name}</div>
		) : (
			<div>Loading...</div>
		);
	}
}

const mapStateToProps = state => {
	return { users: state.users };
};

export default connect(
	mapStateToProps,
	{ fetchUser }
)(UserHeader);
