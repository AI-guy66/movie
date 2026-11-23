# CineStream - Movie Streaming Website

A modern, responsive movie streaming website built with **React**, **HTML5**, **CSS3**, and **JavaScript**. Stream your favorite movies with a sleek interface and smooth user experience.

## Features

✨ **Core Features:**
- 🎬 Browse thousands of movies
- 🔍 Search functionality for quick movie discovery
- 🎥 Video player with playback controls
- ⭐ Movie ratings and descriptions
- ➕ Add movies to watchlist
- 📱 Fully responsive design
- 🌙 Dark theme optimized for streaming

## Tech Stack

- **Frontend Framework:** React 18.2.0
- **Routing:** React Router DOM 6.14.0
- **HTTP Client:** Axios 1.4.0
- **Styling:** CSS3 with responsive design
- **Build Tool:** Create React App / React Scripts

## Project Structure

```
movie-streaming/
├── public/
│   └── index.html                 # HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.js             # Navigation bar component
│   │   ├── MovieCard.js          # Individual movie card
│   │   ├── MovieGrid.js          # Grid of movie cards
│   │   └── VideoPlayer.js        # Custom video player
│   ├── pages/
│   │   ├── Home.js               # Home page
│   │   ├── MovieDetail.js        # Movie detail & player page
│   │   └── SearchResults.js      # Search results page
│   ├── data/
│   │   └── moviesData.js         # Sample movie data
│   ├── styles/
│   │   ├── index.css             # Global styles
│   │   ├── App.css               # App component styles
│   │   ├── Navbar.css            # Navbar styles
│   │   ├── MovieCard.css         # Movie card styles
│   │   ├── MovieGrid.css         # Movie grid styles
│   │   ├── VideoPlayer.css       # Video player styles
│   │   ├── Home.css              # Home page styles
│   │   ├── MovieDetail.css       # Movie detail page styles
│   │   └── SearchResults.css     # Search results styles
│   ├── App.js                    # Main App component
│   └── index.js                  # React DOM render
├── package.json                   # Project dependencies
└── README.md                      # This file

```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Navigate to the project directory:**
   ```bash
   cd movie-streaming
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open in your browser at `http://localhost:3000`

## Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot reload.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

## Components Overview

### Navbar
- Search functionality
- Navigation links
- Sign-in button
- Responsive mobile menu

### MovieCard
- Movie poster image
- Play overlay on hover
- Add to watchlist button
- Movie metadata (rating, year, genre)

### MovieGrid
- Responsive grid layout
- Dynamic filtering by category or search
- Loads multiple MovieCard components

### VideoPlayer
- Play/Pause controls
- Progress bar with seek functionality
- Quality selection (1080p, 720p, 480p)
- Fullscreen button
- Time display
- Keyboard controls support

### Pages

**Home Page:**
- Hero banner with call-to-action
- Featured movies section
- Movies by category (Action, Drama, etc.)

**Movie Detail Page:**
- Full video player
- Movie metadata
- Cast and crew information
- Synopsis
- Reviews section
- Recommended movies

**Search Results Page:**
- Search query display
- Filtered movie grid
- Dynamic filtering

## Styling Features

- 🎨 Modern dark theme optimized for movie streaming
- 📱 Mobile-first responsive design
- ✨ Smooth transitions and hover effects
- 🎭 Gradient backgrounds and overlays
- ⚡ CSS custom properties for consistent theming

## Sample Movies

The app includes 8 pre-loaded movies:
1. Cosmic Adventure - Action/Sci-Fi
2. Love in Paris - Drama/Romance
3. The Last Detective - Action/Mystery
4. Ocean of Secrets - Drama/Thriller
5. Midnight Heist - Action/Crime
6. Starlight Romance - Romance/Drama
7. Rise of the Phoenix - Action/Fantasy
8. The Silent Letter - Drama/Mystery

## Customization

### Add More Movies
Edit `src/data/moviesData.js` and add movie objects to the `moviesData` array:

```javascript
{
  id: 9,
  title: 'Your Movie Title',
  year: 2024,
  rating: 8.5,
  genre: 'Action',
  duration: '2h 30m',
  poster: 'image-url',
  description: 'Movie description...',
  director: 'Director Name',
  writer: 'Writer Name',
  cast: ['Actor 1', 'Actor 2'],
  videoUrl: 'video-url'
}
```

### Customize Colors
Edit CSS files to change the primary color (currently #e50914 - Netflix red):
```css
--primary-color: #your-color;
```

### Change Branding
Update:
- Logo text in `Navbar.js`
- Site title in `public/index.html`
- Hero content in `Home.js`

## Performance Tips

- Use optimized image URLs
- Lazy load video players
- Implement infinite scroll for large movie lists
- Cache API responses

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- 🔐 User authentication
- 💾 User accounts and watchlist persistence
- ⭐ User reviews and ratings
- 🎯 Personalized recommendations
- 📺 TV series support
- 🎬 Multiple video quality streaming
- 📲 Mobile app
- 🌍 Multi-language support
- 🎨 Light/Dark theme toggle

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please create an issue in the project repository.

---

**Happy Streaming! 🎬**
