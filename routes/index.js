import express from "express";
import notesRoutes from "./notes.js";

const router = express.Router();

router.use("/notes", notesRoutes);

export default router;
