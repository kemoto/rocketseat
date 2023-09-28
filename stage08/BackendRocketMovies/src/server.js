require("express-async-errors");
const express = require("express");
const errorHandler = require("./utils/errorHandler.js")
const knex = require("./database/knex");
const routes = require("./routes");

const app = express();
knex.queryBuilder();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

const PORT = 3334;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));