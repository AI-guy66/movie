import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import MovieGrid from '../components/MovieGrid';
import { getMovieById, getMovies } from '../data/moviesData';
import '../styles/MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const movieData = getMovieById(parseInt(id));
    setMovie(movieData);
  }, [id]);

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }

  const toggleWatchlist = () => {
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <div className="movie-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <VideoPlayer movieTitle={movie.title} videoUrl={movie.videoUrl} />

      <div className="detail-content">
        <div className="detail-header">
          <div className="detail-info">
            <h1>{movie.title}</h1>
            <div className="detail-meta">
              <span className="year">{movie.year}</span>
              <span className="rating">⭐ {movie.rating}/10</span>
              <span className="duration">⏱ {movie.duration}</span>
              <span className="genre">{movie.genre}</span>
            </div>
          </div>
          <div className="detail-actions">
            <button className="play-btn-large">▶ Play</button>
            <button 
              className={`watchlist-btn ${isInWatchlist ? 'active' : ''}`}
              onClick={toggleWatchlist}
            >
              {isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
            </button>
            <button className="share-btn">📤 Share</button>
          </div>
        </div>

        <div className="detail-body">
          <div className="synopsis">
            <h2>Synopsis</h2>
            <p>{movie.description}</p>
          </div>

          <div className="cast-crew">
            <div className="cast-section">
              <h3>Cast</h3>
              <div className="cast-list">
                {movie.cast && movie.cast.map((actor, index) => (
                  <div key={index} className="cast-member">
                    {actor}
                  </div>
                ))}
              </div>
            </div>

            <div className="crew-section">
              <h3>Director</h3>
              <p>{movie.director}</p>
              <h3 style={{ marginTop: '20px' }}>Writer</h3>
              <p>{movie.writer}</p>
            </div>
          </div>

          <div className="reviews-section">
            <h2>Reviews</h2>
            <div className="reviews-placeholder">
              <p>Be the first to leave a review!</p>
              <button className="review-btn">Write a Review</button>
            </div>
          </div>
        </div>
      </div>

      <div className="recommendations">
        <h2>You Might Also Like</h2>
        <MovieGrid category={movie.genre} />
      </div>
    </div>
  );
}

export default MovieDetail;
