//! Метод PUT - производит полное удаление старых данных (тех, которые были в базе данных), и заменяет их на новые (те, которые были пересланы в запросе).

//! Метод PATCH - производит обновление существуещих в базе данных, заменяя только те элементы, которые были пересланы в запросе.

// Создаем переменную-ссылку на "эндпоинт".
const BASE_URL = 'http://localhost:4040';

// Создаем переменную с набором обязательных настроек (свойств) запроса - "options".
const options = {
  method: 'PATCH',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ title: 'Большая навая тестовая книга по HTML' }),
};

// Пробуем "вручную" обновить данные на бекк-енде по "id - 11", используя переменную "options" с нужными данными.
// fetch(`${BASE_URL}/books/11`, options)
//   .then(res => res.json())
//   .then(console.log);


//!=============================================================


// Пишем код функции для типизации и автоматизации процедуры выполнения PATCH запросов.
function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

// Активируем функцию и передаем в нее соответствующие аргументы.
// updateBookById({ title: 'Большая новая книга по NODEJS' }, 7);

// updateBookById({ rating: 1 }, 10);

// updateBookById({ rating: 4, author: 'Манго' }, 8);
