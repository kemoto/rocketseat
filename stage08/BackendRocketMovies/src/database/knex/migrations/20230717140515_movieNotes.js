exports.up = function(knex) {
  return knex.schema.createTable("movieNotes", function(table) {
    table.increments().primary();
    table.string("title").notNullable();
    table.string("description");
    table.integer("rating").notNullable();
    table.integer("user_id").references("users.id").onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable("movieNotes");
};
