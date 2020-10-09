exports.up = function (knex) {
  return knex.schema.createTable('salario', function (table) {
    table.float('valorsalario').nullable();
    table.integer('totalhoraspordia').notNullable();
    table.integer('totaldiassemana').notNullable();
    table.integer('totalhorasporsemana').notNullable();
    table.integer('totalhorasmes').notNullable();
    table.float('valorcustoporhora').nullable();
    table.float('valorcustoporminuto').nullable();
    table.float('valortotaldespesas').nullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('salario');
};