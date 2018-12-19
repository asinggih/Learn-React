import React from "react";
import { connect } from "react-redux";

// destructuring to song so that no need to write props.song.blabla
const SongDetail = ({ selectedSong }) => {
	if (!selectedSong) {
		return (
			<div>
				<h3>Select a song</h3>
			</div>
		);
	}

	return (
		<div>
			<h3>Details for current song:</h3>
			<p>
				Title: {selectedSong.title}
				<br />
				Duration: {selectedSong.duration}
			</p>
		</div>
	);
};

const mapStateToProps = state => {
	return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
