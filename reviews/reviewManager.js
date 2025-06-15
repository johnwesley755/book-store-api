import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const booksData = require("../data/books.json");

export const addOrUpdateReview = (req, res) => {
  const { isbn } = req.params;
  const { user, review } = req.body;
  const book = booksData.books.find((b) => b.isbn === isbn);
  if (!book) return res.status(404).send("Book not found");
  book.reviews[user] = review;
  res.send("Review added/updated");
};

export const deleteReview = (req, res) => {
  const { isbn, user } = req.params;
  const book = booksData.books.find((b) => b.isbn === isbn);
  if (book?.reviews[user]) {
    delete book.reviews[user];
    res.send("Review deleted");
  } else {
    res.status(404).send("Review not found");
  }
};
