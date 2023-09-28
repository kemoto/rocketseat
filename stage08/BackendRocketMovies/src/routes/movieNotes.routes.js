const { Router } = require("express");
const MovieNotes = require("../controller/MovieNotes.js");

const movieNotesRoutes = Router();
const movieNotes = new MovieNotes;

movieNotesRoutes.post("/:user_id", movieNotes.create);
movieNotesRoutes.get("/:note_id", movieNotes.show);
movieNotesRoutes.get("/", movieNotes.index);
movieNotesRoutes.delete("/:note_id", movieNotes.delete);

module.exports = movieNotesRoutes;