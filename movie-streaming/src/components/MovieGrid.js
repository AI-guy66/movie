import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { getMovies } from '../data/moviesData';
import '../styles/MovieGrid.css';

function MovieGrid({ category = 'all', search = '' }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const allMovies = getMovies();
    setMovies(allMovies);

    if (search) {
      const results = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(results);
    } else if (category !== 'all') {
      const results = allMovies.filter(movie =>
        movie.genre.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies(allMovies);
    }
  }, [category, search]);

  return (
    <div className="movie-grid">
      {filteredMovies.length > 0 ? (
        filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <div className="no-results">
          <p>No movies found. Try a different search!</p>
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
