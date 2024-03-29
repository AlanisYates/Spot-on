import React, { Component } from 'react';
import TrackList from "../TrackList/TrackList";
import './SearchResults.css';

export class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
            </div>
        )
    }
}

export default SearchResults
