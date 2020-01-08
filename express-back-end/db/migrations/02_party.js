exports.up = function(knex, Promise) {
  return knex.schema.createTable("party", t => {
    t.increments("id");
    t.string("name");
    t.string("access_code");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};

// user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
