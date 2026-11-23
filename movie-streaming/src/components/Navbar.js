import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ onSearch, searchQuery }) {
  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      onSearch(localSearch);
      navigate('/search');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🎬</span>
          CineStream
        </Link>
        
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>

        <div className="navbar-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Trending</Link>
          <Link to="/" className="nav-link">My Watchlist</Link>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
