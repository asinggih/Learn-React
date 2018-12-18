import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
	render() {
		console.log(this.props);
		return <div>SongList</div>;
	}
}

// we can name this function anything, we
// use mapStateToProps just because of the naming convention
const mapStateToProps = state => {
	return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
