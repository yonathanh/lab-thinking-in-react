import React, { Component } from "react";
import data from "../../data.json";

import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable/ProductTable";
import ProductRow from "./ProductTable/ProductRow/ProductRow";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalData: data.data,
      theData: data.data,
      toggleInStock: true
    };
  }

  toggleInStock = () => {
    this.setState({ toggleInStock: !this.state.toggleInStock });
    console.log(this.state.toggleInStock);
  };

  showDataByCategory = category => {
    return this.state.theData
      .filter(onePruduct => onePruduct.category === category)
      .map((onePruduct, index) => {
        if (this.state.toggleInStock || onePruduct.stocked) {
          return (
            <ProductRow
              key={index}
              category={onePruduct.category}
              price={onePruduct.price}
              stocked={onePruduct.stocked}
              name={onePruduct.name}
            />
          );
        }
      });
  };

  searchFunction = searchTerm => {
    let tempData = [...this.state.originalData];
    this.setState({
      theData: tempData.filter(pruduct =>
        new RegExp(searchTerm, "i").exec(pruduct.name)
      )
    });
    //console.log(this.state.theData);
  };

  render() {
    return (
      <div style={{ border: "solid 1px orange" }} className="App">
        <div style={{ border: "solid 1px blue" }}>
          <SearchBar
            handleCheckBox={this.toggleInStock}
            handleSearch={this.searchFunction}
          />
        </div>
        <div style={{ border: "solid 1px green" }}>
          <ProductTable handleShow={this.showDataByCategory} />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
