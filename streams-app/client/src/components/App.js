import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
	return (
		<div>
			Page One Here
			<Link to="/pageTwo">Navigate to page two</Link>
		</div>
	);
};

const PageTwo = () => {
	return (
		<div>
			Page Two Here
			<button>Click Here</button>
			<Link to="/">Navigate to page one</Link>
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
