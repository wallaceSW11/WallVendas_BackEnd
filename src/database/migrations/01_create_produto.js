exports.up = function (knex) {
  return knex.schema.createTable('produto', function (table) {
    table.increments('id');
    table.string('codigo').notNullable();
    table.string('descricao').notNullable();
    table.string('unidadecompra').nullable();
    table.float('quantidadeembalagemcompra').nullable();
    table.float('valorcustocompra').nullable();
    table.float('valorfretecompra').nullable();
    table.float('acrescimodescontocompra').nullable();
    table.float('valorcustoreposicao').nullable();
    table.float('datacompra').nullable();
    table.boolean('possuicomposicao').defaultTo(false);
    table.float('acrescimodescontovenda').nullable();
    table.float('valorprecovenda').nullable();
    table.integer('tempomontagem').nullable();
    table.float('valorcustominuto').nullable();
    table.float('valorcustomontagem').nullable();
    table.float('porcentagemmargemlucro').nullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('produto');
};