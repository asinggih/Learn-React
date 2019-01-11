import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		console.log(this.props.posts);
		return <div>PostList</div>;
	}
}

const mapStateToProps = state => {
	// key of the returned object needs to match
	// the key in combineReducers
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchPosts } // same as { fetchPosts: fetchPosts }
)(PostList);
