import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

const getNotes = async () => {
  const [rows] = await pool.query("SELECT * FROM notes");

  return rows;
};

const getNoteById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);

  return rows[0];
};

const createNote = async (title, content) => {
  const [result] = await pool.query(
    "INSERT INTO notes (title, content) VALUES (?, ?)",
    [title, content]
  );

  const id = result.insertId;

  return getNoteById(id);
};

const updateNote = async (id, title, content) => {
  const [result] = await pool.query(
    "UPDATE notes SET title = ?, content = ? WHERE id = ?",
    [title, content, id]
  );

  return getNoteById(id);
};

const deleteNote = async (id) => {
  const [result] = await pool.query("DELETE FROM notes WHERE id = ?", [id]);

  return result;
};

export { getNotes, getNoteById, createNote, updateNote, deleteNote };
