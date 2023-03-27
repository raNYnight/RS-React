import React, { Component, createRef } from 'react';

interface ImageUploaderProps {
  onUpload: (url: string) => void;
  error: string;
}

interface ImageUploaderState {
  file: File | null;
  imageUrl: string | null;
}

class ImageUploader extends Component<ImageUploaderProps, ImageUploaderState> {
  uploadInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: ImageUploaderProps) {
    super(props);
    this.uploadInputRef = createRef();
    this.state = {
      file: null,
      imageUrl: null,
    };
  }

  doSmth = () => {
    console.log('smth');
  };

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
      this.props.onUpload(imageUrl);
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { error } = this.props;
    return (
      <div className="field-block image-upload-block">
        <label
          htmlFor="image"
          className="label-block image-label"
        >
          Choose employee photo:
        </label>
        <input
          ref={this.uploadInputRef}
          id="image"
          className="image-input"
          type="file"
          title="Choose file"
          onChange={this.handleFileChange}
          accept="image/*"
        />
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default ImageUploader;
