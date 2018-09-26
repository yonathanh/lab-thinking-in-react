import React, { Component } from "react";

class ProductCategoryRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>{this.props.category}</h1>
      </div>
    );
  }
}

export default ProductCategoryRow;
