import React, { Component } from "react";
import "./imagelist.css";
import ImageCard from "./imagecard";

class ImageList extends Component {
	mapImageUrl() {
		const images = this.props.images;
		return images.map(image => <ImageCard key={image.id} image={image} />);
	}

	render() {
		return <div className="image-list">{this.mapImageUrl()}</div>;
	}
}

export default ImageList;
