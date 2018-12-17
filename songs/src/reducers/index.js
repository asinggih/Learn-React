/*---------------------------------------------
                Reducers
----------------------------------------------*/
const songsReducer = () => {
	return [
		{
			title: "Smells Like Teen Spirit",
			duration: "4:05"
		},
		{
			title: "It's My Life",
			duration: "2:10"
		},
		{
			title: "Torn",
			duration: "3:25"
		},
		{
			title: "All The Small Things",
			duration: "3:10"
		}
	];
};

// default selected song when our app just launched.
// Nothing's selected. That's why it's null
const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};
