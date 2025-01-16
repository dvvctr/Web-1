function filterMovies(genre) {
  const allMovies = document.querySelectorAll('.movie-card');
  
  if (genre === 'all') {
    allMovies.forEach(movie => {
      movie.style.display = 'block';
    });
  } else {
    allMovies.forEach(movie => {
      const movieGenre = movie.getAttribute('data-genre');
      if (movieGenre === genre) {
        movie.style.display = 'block';
      } else {
        movie.style.display = 'none';
      }
    });
  }
}
