import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

export class UploadImage extends Component {
    constructor(props) {
		super(props);
		 this.state = { pictures: [] };
		 this.onDrop = this.onDrop.bind(this);
	}

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
	}

    render() {
        return (
            <ImageUploader
                    withIcon={true}
                    withPreview={true}
                	buttonText='Choose images'
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	maxFileSize={5242880}
            />
        );
    }
}

export default UploadImage;
