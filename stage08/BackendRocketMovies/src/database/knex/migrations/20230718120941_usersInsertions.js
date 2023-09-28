const { hash } = require("bcrypt");

exports.up = async function (knex) {
  return knex("users").insert([
    {
      name: "Vitor",
      email: "vitor@email.com",
      password: await hash("123", 8),
    },
    {
      name: "Sayuri",
      email: "sayu@email.com",
      password: await hash("123", 8),
    },
    {
      name: "Rafael",
      email: "rafa@email.com",
      password: await hash("123", 8),
    },
    {
      name: "Ayumi",
      email: "ayu@email.com",
      password: await hash("123", 8),
    },
  ]);
};

exports.down = function (knex) {
  return knex("users")
    .whereIn("email", [
      "vitor@email.com",
      "sayu@email.com",
      "rafa@email.com",
      "ayu@email.com",
    ])
    .del();
};
