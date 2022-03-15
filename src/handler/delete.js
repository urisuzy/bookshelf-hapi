const books = require('../books');

const deleteBookHandler = (request, h) => {
  const { id } = request.params;

  const bookIndex = books.findIndex((obj) => obj.id === id);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    return {
      status: 'success',
      message: 'Buku berhasil dihapus',
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = deleteBookHandler;
