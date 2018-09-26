import React, { Component } from "react";
import "bulma/css/bulma.css";
import logo from "./logo.svg";
import "./App.css";

import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
//import AddFood from "./components/AddFood";
//import TodaysFood from "./components/TodaysFood";
//import data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column">colum</div>
          <div className="column">
            <img src={logo} className="App-logo" alt="logo" />
            <FilterableProductTable />
          </div>
          <div className="column">colum</div>
        </div>
      </div>
    );
  }
}

export default App;
