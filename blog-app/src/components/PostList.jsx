import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return <div>PostList</div>;
	}
}

export default connect(
	null, // we will eventually put mapStateToProps, but atm its null since we don't hv any states
	{ fetchPosts } // same as { fetchPosts: fetchPosts }
)(PostList);
