import axios from "axios";

// Task 10 – Async/Await
async function getAllBooks() {
  const res = await axios.get("http://localhost:3000/books");
  console.log("All Books:", res.data);
}

// Task 11 – Promises
function getBookByISBN(isbn) {
  axios
    .get(`http://localhost:3000/books/isbn/${isbn}`)
    .then((res) => console.log("Book By ISBN:", res.data))
    .catch((err) => console.error(err));
}

// Task 12 – Author
async function getByAuthor(author) {
  const res = await axios.get(`http://localhost:3000/books/author/${author}`);
  console.log("By Author:", res.data);
}

// Task 13 – Title
async function getByTitle(title) {
  const res = await axios.get(`http://localhost:3000/books/title/${title}`);
  console.log("By Title:", res.data);
}

// Call all
getAllBooks();
getBookByISBN("1111");
getByAuthor("John Doe");
getByTitle("Node");
