import React, { Component } from "react";

class ImageCard extends Component {
	state = {
		spans: 0 // to hold the span size of each card
	};

	constructor() {
		super();
		// Creating a reference that we can refer to later on
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		const imgHeight = this.imageRef.current.clientHeight; // get the height of the image
		/**
		 * calculate the span size of each of the image by
		 * dividing the image height with the grid-auto-rows value
		 * and get the rounded up number.
		 *
		 * This gives us the space that this particular image requires in terms
		 * of the grid.
		 */
		const spans = Math.ceil(imgHeight / 10);
		this.setState({ spans: spans });
	};

	render() {
		const { description, urls } = this.props.image;
		return (
			/* 
                Below is JS String interpolation to add the span value 
                of this particular image
            */
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
