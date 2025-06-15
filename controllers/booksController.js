import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const booksData = require("../data/books.json");

// Your controller functions...
export const getAllBooks = (req, res) => res.json(booksData.books);

// Other exports remain the same...

export const getBookByISBN = (req, res) => {
  const book = booksData.books.find((b) => b.isbn === req.params.isbn);
  book ? res.json(book) : res.status(404).send("Book not found");
};

export const getBooksByAuthor = (req, res) => {
  const books = booksData.books.filter((b) => b.author === req.params.author);
  res.json(books);
};

export const getBooksByTitle = (req, res) => {
  const books = booksData.books.filter((b) =>
    b.title.includes(req.params.title)
  );
  res.json(books);
};

export const getBookReview = (req, res) => {
  const book = booksData.books.find((b) => b.isbn === req.params.isbn);
  book ? res.json(book.reviews) : res.status(404).send("Book not found");
};
