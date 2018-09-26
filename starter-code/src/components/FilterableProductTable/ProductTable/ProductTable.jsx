import React, { Component } from "react";

import data from "../../../data.json";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <span>
          Name {"\u00A0"} {"\u00A0"} {"\u00A0"} Price
        </span>
        <div style={{ border: "solid 1px turquoise" }}>
          <ProductCategoryRow category={"sporting goods"} />
        </div>
        <div>{this.props.handleShow("Sporting Goods")}</div>
        <div style={{ border: "solid 1px turquoise" }}>
          <ProductCategoryRow category="Electronics" />
        </div>
        <div>{this.props.handleShow("Electronics")}</div>
      </div>
    );
  }
}

export default ProductTable;
