
exports.up = function(knex) {
  return knex("movieTags").insert([
    {
      note_id: 1,
      user_id: 1,
      name: "teste ",
    },
    {
      note_id: 2,
      user_id: 1,
      name: "teste ",
    },
    {
      note_id: 3,
      user_id: 2,
      name: "teste ",
    },
    {
      note_id: 4,
      user_id: 3,
      name: "teste ",
    },
    {
      note_id: 5,
      user_id: 4,
      name: "teste ",
    },
    {
      note_id: 6,
      user_id: 2,
      name: "teste ",
    },
  ]);
};

exports.down = function(knex) {
  return knex("movieTags").whereIn("id", [
    1,
    2,
    3,
    4,
    5,
    6
  ]).del();
};
