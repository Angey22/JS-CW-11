//! Проверочное обращение к нашему локальному серверу.
// Запрашиваем всю базу данных.
// fetch('http://localhost:4040/books')
//   .then(res => res.json())
//   .then(console.log);

// Запрашиваем данные конкретного элемента по его "id".
// fetch('http://localhost:4040/books/2')
//   .then(res => res.json())
//   .then(console.log);


//! Создаем функции для работы с нашим сервером
// const BASE_URL = 'http://localhost:4040';

// Функция-запрос базы-данных книг.
// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then(res => res.json());
// }

// Функция запрос конкретной книги по "id".
// function fetchBookById(bookId) {
//   return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
// }

// Активируем функции.
// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);
