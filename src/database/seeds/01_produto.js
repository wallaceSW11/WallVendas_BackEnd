
exports.seed = function (knex) {
  return knex('produto').del()
    .then(function () {
      return knex('produto').insert([
        {
          codigo: 1,
          descricao: 'Impressão folha A4',
          valorprecovenda: 0.15
        },
        {
          codigo: 2,
          descricao: 'Folha A4 OffSet 180g',
          valorprecovenda: 0.15
        },
        {
          codigo: 3,
          descricao: 'Folha Fotográfico 180g',
          valorprecovenda: 0.25
        },
        {
          codigo: 4,
          descricao: 'Topo de bolo pequeno',
          valorprecovenda: 2,
          possuicomposicao: true
        }
      ]);
    });
};
