exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('produtocomposicao', function (table) {
    table.increments('id');
    table.integer('idproduto').notNullable();
    table.integer('idprodutocomposicao').notNullable();
    table.string('descricao').notNullable();
    table.float('valorcustoreposicao').nullable();
    table.float('quantidadecomposicao').nullable();
    table.float('valoritem').nullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('produtocomposicao');
};