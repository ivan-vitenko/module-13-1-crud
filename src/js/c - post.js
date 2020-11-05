const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'Тестова книга',
  author: 'Я',
  genres: ['JS'],
  rating: 10,
};

function fetchBooks() {
  fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookById(bookId) {
  fetch(`h${BASE_URL}/books/${bookId}`).then(res => res.json());
}

function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}
