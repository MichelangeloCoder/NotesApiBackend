const express = require("express");
const { getNote, createNote, deleteNote, updateNote } = require("../controllers/noteControllers");
const noteRouter = express.Router();
const auth = require("../middlewares/auth");

noteRouter.get("/", auth, getNote); // In get Method() we are fetching all the notes, before fetching note auth is passed to see user have valid token or not

noteRouter.post("/", auth, createNote); // In Post Method() we are creating a new notes, before fetching note auth is passed to see user have valid token or not

noteRouter.delete("/:id", auth, deleteNote); // In delete Method() we are passing id to delete notes
noteRouter.put("/:id", auth, updateNote); // In update Method() we are passing id to update notes

module.exports = noteRouter;