import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	/**
	 * This is just a helper method for rendering each
	 * of the item inside this.props.posts to hv proper css
	 * classes. It's just looping each of them
	 *
	 * All of the classes are taken from the Semantic UI Library
	 */
	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="ui relaxed divided list">{this.renderList()}</div>
		);
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
