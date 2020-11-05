const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookById(bookId) {
  fetch(`h${BASE_URL}/books/${bookId}`).then(res => res.json());
}
