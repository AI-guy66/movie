const moviesData = [
  {
    id: 1,
    title: 'Cosmic Adventure',
    year: 2023,
    rating: 8.5,
    genre: 'Action',
    duration: '2h 15m',
    poster: 'https://via.placeholder.com/300x450?text=Cosmic+Adventure',
    description: 'A thrilling journey through space as a team of astronauts discovers an ancient civilization on a distant planet. They must uncover its secrets before a dangerous force threatens the entire galaxy.',
    director: 'James Smith',
    writer: 'Robert Johnson',
    cast: ['Chris Hemsworth', 'Zoe Saldana', 'Oscar Isaac'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 2,
    title: 'Love in Paris',
    year: 2023,
    rating: 7.8,
    genre: 'Drama',
    duration: '2h 5m',
    poster: 'https://via.placeholder.com/300x450?text=Love+in+Paris',
    description: 'Two strangers meet in the City of Light and discover an unexpected connection. As they explore the romantic streets of Paris, they must decide if their love can overcome the obstacles in their lives.',
    director: 'Sofia Coppola',
    writer: 'Emma Watson',
    cast: ['Timothée Chalamet', 'Florence Pugh', 'Marion Cotillard'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 3,
    title: 'The Last Detective',
    year: 2023,
    rating: 8.2,
    genre: 'Action',
    duration: '2h 20m',
    poster: 'https://via.placeholder.com/300x450?text=Last+Detective',
    description: 'A retired detective is drawn back into the game when a serial killer emerges from the shadows. With nothing left to lose, he must solve the case before it\s too late.',
    director: 'Christopher Nolan',
    writer: 'Jonathan Nolan',
    cast: ['Leonardo DiCaprio', 'Margot Robbie', 'Tom Hardy'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 4,
    title: 'Ocean of Secrets',
    year: 2023,
    rating: 7.5,
    genre: 'Drama',
    duration: '1h 55m',
    poster: 'https://via.placeholder.com/300x450?text=Ocean+Secrets',
    description: 'A young marine biologist discovers a mysterious creature in the deep ocean. As she investigates, she uncovers a conspiracy that could change the world forever.',
    director: 'James Cameron',
    writer: 'David S. Goyer',
    cast: ['Saoirse Ronan', 'Matthew McConaughey', 'Anne Hathaway'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 5,
    title: 'Midnight Heist',
    year: 2023,
    rating: 8.0,
    genre: 'Action',
    duration: '2h 10m',
    poster: 'https://via.placeholder.com/300x450?text=Midnight+Heist',
    description: 'A master thief assembles the perfect team for one last job. But when things go wrong, they must think fast to survive and escape with the prize.',
    director: 'Denis Villeneuve',
    writer: 'Jason Bourne',
    cast: ['Ryan Gosling', 'Jessica Chastain', 'Michael B. Jordan'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 6,
    title: 'Starlight Romance',
    year: 2023,
    rating: 7.3,
    genre: 'Drama',
    duration: '1h 50m',
    poster: 'https://via.placeholder.com/300x450?text=Starlight+Romance',
    description: 'Under the stars, two souls find each other. But their love is tested when reality threatens to tear them apart in this emotional romantic drama.',
    director: 'Joe Wright',
    writer: 'Richard Curtis',
    cast: ['Saoirse Ronan', 'Andrew Garfield', 'Keira Knightley'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 7,
    title: 'Rise of the Phoenix',
    year: 2023,
    rating: 8.6,
    genre: 'Action',
    duration: '2h 25m',
    poster: 'https://via.placeholder.com/300x450?text=Phoenix',
    description: 'From the ashes of defeat, a warrior rises to challenge an empire. An epic tale of redemption, vengeance, and triumph against all odds.',
    director: 'Ang Lee',
    writer: 'Tony Gilroy',
    cast: ['Tom Hiddleston', 'Lupita Nyong\'o', 'Dev Patel'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 8,
    title: 'The Silent Letter',
    year: 2023,
    rating: 7.7,
    genre: 'Drama',
    duration: '2h',
    poster: 'https://via.placeholder.com/300x450?text=Silent+Letter',
    description: 'A mysterious letter arrives that changes everything. As its contents are revealed, secrets buried for decades come to light in this gripping drama.',
    director: 'Lynne Ramsay',
    writer: 'Ari Aster',
    cast: ['Tilda Swinton', 'Ralph Fiennes', 'Claire Foy'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
];

export const getMovies = () => moviesData;

export const getMovieById = (id) => moviesData.find(movie => movie.id === id);

export const searchMovies = (query) =>
  moviesData.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

export const getMoviesByGenre = (genre) =>
  moviesData.filter(movie =>
    movie.genre.toLowerCase().includes(genre.toLowerCase())
  );
