import express from "express";
import dotenv from "dotenv";
import { getNotes } from "./database.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/notes", async (req, res) => {
  const notes = await getNotes();
  res.json(notes);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
