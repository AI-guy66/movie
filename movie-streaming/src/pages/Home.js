import React from 'react';
import MovieGrid from '../components/MovieGrid';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to CineStream</h1>
          <p>Stream thousands of movies instantly</p>
          <button className="cta-button">Start Watching</button>
        </div>
      </div>

      <div className="category-section">
        <h2 className="section-title">Featured Movies</h2>
        <MovieGrid category="all" />
      </div>

      <div className="category-section">
        <h2 className="section-title">Action Movies</h2>
        <MovieGrid category="action" />
      </div>

      <div className="category-section">
        <h2 className="section-title">Drama & Romance</h2>
        <MovieGrid category="drama" />
      </div>
    </div>
  );
}

export default Home;
