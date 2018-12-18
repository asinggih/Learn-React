import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
	renderSongList() {
		const { songs } = this.props;
		/*
        We have 2 returns statements here:
            - inner return statement is to return to jsx item of each songs
            - outer return statement is to return the list itself
        */
		return songs.map(song => {
			return (
				<div className="item" key={songs.indexOf(song)}>
					<div className="right floated content">
						<button
							className="ui button primary"
							onClick={() => this.props.selectSong(song)}
						>
							Select
						</button>
					</div>

					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui divided list">{this.renderSongList()}</div>;
	}
}

// we can name this function anything, we
// use mapStateToProps just because of the naming convention
const mapStateToProps = state => {
	console.log(state);
	return { songs: state.songs };
};

export default connect(
	mapStateToProps,
	{ selectSong: selectSong }
)(SongList);
