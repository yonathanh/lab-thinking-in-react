import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.stocked ? "black" : "red"}>
        <span>{this.props.name} </span> {"\u00A0"} {"\u00A0"} {"\u00A0"}
        <span>{this.props.price} </span>
      </div>
    );
  }
}

export default ProductRow;
