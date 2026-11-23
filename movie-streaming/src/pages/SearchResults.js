import React from 'react';
import MovieGrid from '../components/MovieGrid';
import '../styles/SearchResults.css';

function SearchResults({ searchQuery }) {
  return (
    <div className="search-results">
      <div className="search-header">
        <h1>Search Results</h1>
        <p>Results for: <strong>{searchQuery}</strong></p>
      </div>
      <MovieGrid search={searchQuery} />
    </div>
  );
}

export default SearchResults;
