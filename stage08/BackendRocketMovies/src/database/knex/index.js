const config = require("../../../knexfile.js");
const knex = require("knex");

const kenxConnection = knex(config.development);

module.exports = kenxConnection;