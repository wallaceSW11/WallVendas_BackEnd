
exports.seed = function (knex) {
  return knex('salario').del()
    .then(function () {
      return knex('salario').insert([
        {
          valorsalario: 1000,
          totalhoraspordia: 7,
          totaldiassemana: 5,
          totalhorasporsemana: 35,
          totalhorasmes: 140,
          valorcustoporhora: 7.14,
          valorcustoporminuto: 0.12,
          valortotaldespesas: 0
        }
      ]);
    });
};
