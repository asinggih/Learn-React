import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
	// Removed fetchUser since it will be handled by fetchUserAndPosts() at PostList

	render() {
		const { currentUser } = this.props;

		return currentUser ? (
			<div className="header">{currentUser.name}</div>
		) : (
			<div>Loading...</div>
		);
	}
}

/**
 * ownProps let us use the this.props of the current component,
 * from the mapStateToProps function
 * */

const mapStateToProps = (state, ownProps) => {
	/**
	 * find the user with the same user id as the one from
	 * ownProps.userId (as opposed to this.props),
	 * from the returned users array of the api call
	 */
	return {
		currentUser: state.users.find(user => user.id === ownProps.userId)
	};
};

export default connect(mapStateToProps)(UserHeader);
