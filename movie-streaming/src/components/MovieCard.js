import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.poster} alt={movie.title} />
          <div className="movie-overlay">
            <button className="play-btn">▶ Play</button>
            <button className="add-btn">+ Add to Watchlist</button>
          </div>
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-meta">
            <span className="movie-year">{movie.year}</span>
            <span className="movie-rating">⭐ {movie.rating}</span>
          </div>
          <p className="movie-genre">{movie.genre}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
