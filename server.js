import express from "express";
import bodyParser from "body-parser";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
app.use(bodyParser.json());

app.use("/books", bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
