import React, { Component } from "react";

class ImageList extends Component {
	mapImageUrl() {
		const images = this.props.images;
		/*
        Below is a destructured version of 
        ... image => (
            ... key={image.id}
        etc,
        )
        */
		return images.map(({ id, urls, description }) => (
			<img key={id} src={urls.regular} alt={description} />
		));
	}

	render() {
		return this.mapImageUrl();
	}
}

export default ImageList;
