import React, { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleKeyPress = event => {
      if (event.key === 'Enter') {
          this.search();
      }
  }

  render() {
    return (
      <div className="SearchBar">
          <h1>Spot-On</h1>
        <input
          onChange={this.handleTermChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button onClick={this.search} className="SearchButton">
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
