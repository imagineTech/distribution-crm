import React, { Component } from 'react';
import './ProductUpload.css';

class ProductUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      takeAll: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
  }

  handleSubmit(e) {
    alert('A product was submitted: ' + this.state.value);
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="product-uploader">
        <div className="previewComponent">
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <div className="imgPreview">
            {$imagePreview}
            </div>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
              <br />
            <label>
              Title:
              <input 
              type="text"
              value={this.state.value} 
              onChange={(e)=>this.handleChange(e)} />
            </label>
            <br />
            <label>
              Price Per Unit:
              <input 
              type="text"
              value={this.state.value}
              onChange={(e)=>this.handleChange(e)} />
            </label>
            <label>
              Number of Units:
              <input 
              type="text"
              value={this.state.value}
              onChange={(e)=>this.handleChange(e)} />
            </label>
            <br />
            <label>
              Description:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            <label>
              Take All:
              <input
                name="takeAll"
                type="checkbox"
                checked={this.state.takeAll}
                onChange={this.handleInputChange} />
            </label>
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this.handleSubmit(e)}>Upload Product</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductUpload;