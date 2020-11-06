const BASE_URL = 'http://localhost:3000';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const newBook = await response.json();
  return newBook;
}

async function addBookAndUpdateUI() {
  try {
    const book = await addBook({});
  } catch (error) {}
}

addBookAndUpdateUI();

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const books = await response.json();
  return books;
}
