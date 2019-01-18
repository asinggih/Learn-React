import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
	return <div>Page One Here</div>;
};

const PageTwo = () => {
	return (
		<div>
			Page Two Here
			<button>Click Here</button>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path="/" exact component={PageOne} />
					<Route path="/pagetwo" component={PageTwo} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
