import React, { Component } from 'react';

interface ImageUploaderProps {
  onUpload: (file: File) => void;
}

interface ImageUploaderState {
  file: File | null;
  imageUrl: string | null;
}

class ImageUploader extends Component<ImageUploaderProps, ImageUploaderState> {
  constructor(props: ImageUploaderProps) {
    super(props);

    this.state = {
      file: null,
      imageUrl: null,
    };
  }

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (!file) {
      this.setState({ file: null, imageUrl: null });
      return;
    }
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result as string;
      this.setState({ file, imageUrl });
      this.props.onUpload(file);
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { imageUrl } = this.state;

    return (
      <div className="field-block image-upload-block">
        <label
          htmlFor="image"
          className="label-block image-label"
        >
          Choose employee photo:
        </label>
        <input
          id="image"
          className="image-input"
          type="file"
          title="Choose file"
          onChange={this.handleFileChange}
          accept="image/*"
        />
        {imageUrl && (
          <div className="preview-block">
            <span className="peview-span">Preview:</span>
            <img
              src={imageUrl}
              alt="Uploaded image"
              style={{ maxWidth: '100px', maxHeight: '100px', marginTop: '10px' }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ImageUploader;
