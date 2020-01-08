exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", t => {
    t.increments("id");
    t.string("name");
    t.string("email");
    t.string("password");
    t.string("spotify_uuid");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
