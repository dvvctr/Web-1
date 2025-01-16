function myFunction(movieId) {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(block => {
    block.style.display = 'none';
  });

  const movieBlock = document.getElementById(movieId);
  if (movieBlock) {
    movieBlock.style.display = 'block';
  }
}
