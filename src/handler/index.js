const { getAllBooksHandler, getBookByIdHandler } = require('./read');
const addBookHandler = require('./create');
const editBookHandler = require('./update');
const deleteBookHandler = require('./delete');

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookHandler,
  deleteBookHandler,
};
