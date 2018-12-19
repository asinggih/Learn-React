import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

/*
  Since we're gonna use redux, we will have less class-based components,
  since we will store most of the states on redux instead of the classes itself.
*/
const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="ui column eight wide">
					<SongList />
				</div>

				<div className="ui column centered eight wide">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export default App;
