const books = require('../books');

const getAllBooksHandler = (request) => {
  const { name = '', reading = '', finished = '' } = request.query;

  let allBooks = [...books];

  if (name) {
    allBooks = allBooks.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading) {
    if (reading === '1') {
      allBooks = allBooks.filter((item) => item.reading);
    } else {
      allBooks = allBooks.filter((item) => !item.reading);
    }
  }

  if (finished) {
    if (finished === '1') {
      allBooks = allBooks.filter((item) => item.finished);
    } else {
      allBooks = allBooks.filter((item) => !item.finished);
    }
  }

  allBooks = allBooks.map(({ id, name: nName, publisher }) => ({ id, name: nName, publisher }));

  return {
    status: 'success',
    data: {
      books: allBooks,
    },
  };
};

const getBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const book = books.filter((item) => item.id === id)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { getAllBooksHandler, getBookByIdHandler };
