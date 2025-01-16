const images = ['1.jpg', '2.jpg', '3.jpeg', '4.jpg'];
let flippedCards = [];
let matchedCards = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(img) {
  const card = document.createElement('div');
  card.classList.add('card');
  const imgElement = document.createElement('img');
  imgElement.src = `./icons/${img}`;
  card.appendChild(imgElement);
  card.addEventListener('click', () => flipCard(card, imgElement));
  return card;
}

function flipCard(card, imgElement) {
  if (flippedCards.length === 2 || card.classList.contains('flipped')) return;

  card.classList.add('flipped');
  imgElement.style.display = 'block';
  flippedCards.push({ card, imgElement });

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [firstCard, secondCard] = flippedCards;
  if (firstCard.imgElement.src === secondCard.imgElement.src) {
    matchedCards++;
    if (matchedCards === images.length) {
      setTimeout(() => alert('You win!'), 500);
    }
  } else {
    setTimeout(() => {
      firstCard.card.classList.remove('flipped');
      secondCard.card.classList.remove('flipped');
      firstCard.imgElement.style.display = 'none';
      secondCard.imgElement.style.display = 'none';
    }, 1000);
  }
  flippedCards = [];
}

function initializeGame() {
  shuffle(images);
  const cardsContainer = document.querySelector('.cards-container');
  [...images, ...images].forEach(img => {
    const card = createCard(img);
    cardsContainer.appendChild(card);
  });
}

initializeGame();
