
exports.up = function(knex) {
  return knex("movieNotes").insert([
    {
      title: "teste 1",
      description: "aaa",
      rating: 3,
      user_id: 1,
    },
    {
      title: "teste 2",
      description: "aaa",
      rating: 3,
      user_id: 1,
    },
    {
      title: "teste 3",
      description: "aaa",
      rating: 3,
      user_id: 2,
    },
    {
      title: "teste 4",
      description: "aaa",
      rating: 3,
      user_id: 3,
    },
    {
      title: "teste 5",
      description: "aaa",
      rating: 3,
      user_id: 4,
    },
    {
      title: "teste 6",
      description: "aaa",
      rating: 3,
      user_id: 2,
    }
  ])  
};

exports.down = function(knex) {
  return knex("movieNotes").whereIn("id", [
    1,
    2,
    3,
    4,
    5,
    6
  ]).del();
};
