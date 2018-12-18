import React from "react";
import SongList from "./SongList";
/*
  Since we're gonna use redux, we will have less class-based components,
  since we will store most of the states on redux instead of the classes itself.
*/
const App = () => {
	return (
		<div>
			<SongList />
		</div>
	);
};

export default App;
