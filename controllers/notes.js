import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../database.js";

export const getAllNotes = async (req, res) => {
  const notes = await getNotes();
  res.json(notes);
};

export const getNote = async (req, res) => {
  const { id } = req.params;
  const note = await getNoteById(id);
  res.json(note);
};

export const addNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await createNote(title, content);
  res.status(201).json(note);
};

export const editNote = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const note = await updateNote(id, title, content);
  res.json(note);
};

export const removeNote = async (req, res) => {
  const { id } = req.params;
  const note = await deleteNote(id);
  res.json(note);
};
