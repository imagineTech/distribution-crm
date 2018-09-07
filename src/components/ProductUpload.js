import React, { Component } from 'react';
import axios from '../axios-product';
// import 'ProductUpload.css';

class ProductUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile: '',
      title: '',
      pricePerUnit: '',
      numberOfUnits: '',
      description: '',
      takeAll: false
    };
  }

  // handles changes for text boxes

  // handles change for check box...box does not check
  handleCheckboxChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
  }

  handleChange = e => {
    const val = e.target.name;
    console.log(e.target.name);
    console.log(val);
    console.log(e.target.value);
    this.setState({val: e.target.value});

  }

  // handles submission of product
  handleSubmit = e =>  {
    alert('A product was submitted: ' + this.state.value);
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);

    axios.post('/products.json')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  // renders preview of chosen photo
  _handleImageChange = e =>  {
    e.preventDefault();

    let reader = new FileReader();
    // chooses first file if multiple are chosen
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
            <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
              <br />
            <label>
              Title:
              <input name="title" type="text" value={} onChange={(e)=>this.handleChange(e)} />
            </label>
            <br />
            <label>
              Price Per Unit:
              <input name="pricePerUnit" type="text" value={} onChange={(e)=>this.handleChange(e)} />
            </label>
            <label>
              Number of Units:
              <input name="numberOfUnits" type="text" value={} onChange={(e)=>this.handleChange(e)} />
            </label>
            <br />
            <label>
              Description:
              <textarea name="description" value={} onChange={(e)=>this.handleChange(e)} />
            </label>
            <br />
            <label>
              Take All:
              <input name="takeAll" type="checkbox" checked={} onChange={this.handleCheckboxChange} />
            </label>
            <button className="submitButton" type="submit" onClick={(e)=>this.handleSubmit(e)}>Upload Product</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductUpload;