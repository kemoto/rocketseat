exports.up = function(knex) {
  return knex.schema.createTable("movieTags", function(table) {
    table.increments().primary();
    table.integer("note_id").references("movieNotes.id").onDelete("CASCADE");
    table.integer("user_id").references("users.id").onDelete("CASCADE");
    table.string("name").notNullable();
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable("movieTags");
};
