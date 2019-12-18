import React, { Component } from "react";
import Icon from "../logoIcon/logoIcon";
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
        <div className="logo">
          <Icon
          fill="#fff"
          />
        </div>
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
