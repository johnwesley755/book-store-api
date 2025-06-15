import express from "express";
import {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview,
} from "../controllers/booksController.js";
import { registerUser, loginUser } from "../users/userManager.js";
import { addOrUpdateReview, deleteReview } from "../reviews/reviewManager.js";

const router = express.Router();

// General users
router.get("/", getAllBooks);
router.get("/isbn/:isbn", getBookByISBN);
router.get("/author/:author", getBooksByAuthor);
router.get("/title/:title", getBooksByTitle);
router.get("/review/:isbn", getBookReview);
router.post("/register", registerUser);
router.post("/login", loginUser);

// Registered users
router.put("/review/:isbn", addOrUpdateReview);
router.delete("/review/:isbn/:user", deleteReview);

export default router;
