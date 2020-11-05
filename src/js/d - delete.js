const BASE_URL = 'http://localhost:3000';

function updateBookByID(bookId) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}
