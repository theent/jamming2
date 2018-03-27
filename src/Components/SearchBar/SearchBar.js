import React from 'react';

import { BaseComponent } from '../BaseComponent/BaseComponent';
import './SearchBar.css';

class SearchBar extends BaseComponent {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  search(term) {
    this.props.onSearch(term);
  }

  handleTermChange(event) {
    this.search(event.target.value);
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.search(event.target.value);
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onBlur={this.handleTermChange} onKeyPress={this.handleKeyPress}  />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
