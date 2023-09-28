const { Router } = require("express");
const usersRoutes = require("./users.routes.js")
const movieNoutesRoutes = require("./movieNotes.routes.js");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/movieNotes", movieNoutesRoutes);

module.exports = routes;