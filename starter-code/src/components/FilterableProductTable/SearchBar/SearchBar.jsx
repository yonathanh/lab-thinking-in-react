import React, { Component } from "react";
import data from "../../../data.json";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ""
    };
  }

  updateInput = e => {
    this.setState({ searchField: e.target.value });

    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <input
          className="input"
          type="text"
          onChange={e => this.updateInput(e)}
          value={this.state.searchField}
          placeholder="Search"
        />
        <label className="checkbox">
          <input type="checkbox" onChange={e => this.props.handleCheckBox(e)} />
          Only Show Prduct In Stuck
        </label>
      </div>
    );
  }
}

export default SearchBar;
