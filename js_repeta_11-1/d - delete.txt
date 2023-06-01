// "Эндпоинт".
const BASE_URL = 'http://localhost:4040';

// Код функции для удаления.
function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}

// Активируем функцию с заданным "id".
// removeBook(10);
// removeBook(11);

