import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdmin(stream) {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link
						className="ui button primary"
						to={`/streams/edit/${stream.id}`}
					>
						Edit
					</Link>
					<button className="ui button negative">Delete</button>
				</div>
			);
		}
	}

	renderList() {
		return this.props.streams.map(stream => {
			return (
				<div className="item" key={stream.id}>
					{/**
					 * Need to put renderAdmin as the first item
					 * so that semantic UI renders the buttons properly
					 */
					this.renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			// Now we want to use a Link not button, since we're
			// utilising React Router
			return (
				// override css to make Link on the right side
				<div style={{ textAlign: "right" }}>
					<Link to="/streams/new" className="ui button positive">
						Create Stream
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	// mapping our state into props.stream and
	// converting object of stream objects into array of stream objects
	return {
		streams: Object.values(state.streams),
		currentUserId: state.authentication.userId,
		isSignedIn: state.authentication.isSignedIn
	};
};

export default connect(
	mapStateToProps,
	{ fetchStreams }
)(StreamList);
