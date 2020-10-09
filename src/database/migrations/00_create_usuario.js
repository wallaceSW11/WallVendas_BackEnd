
exports.up = function (knex) {
  return knex.schema.createTable('usuario', function (table) {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('login').notNullable();
    table.string('senha').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('usuario');
};
