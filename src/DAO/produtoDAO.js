const connection = require('../database/connection');

module.exports = {
  consultaProduto() {
    return connection('produto')
      .select('id', 'codigo', 'descricao', 'valorprecovenda')
      .orderBy('descricao');
  },

  consultaProdutoPorId(idproduto) {
    return connection('produto')
      .where('id', '=', idproduto)
      .select('*')
      .first();
  },

  consultaProdutoComposicaoPorId(idproduto) {
    return connection('produto')
      .where('id', '=', idproduto)
      .select('*');
  },

  async cadastrarProduto(requestBody) {
    const { codigo, descricao, valorprecovenda, possuicomposicao, produtocomposicao } = requestBody;
    const tran = await connection.transaction();

    try {
      const [id] = await tran('produto').insert({
        codigo,
        descricao,
        valorprecovenda
      }, 'id');

      if (possuicomposicao) {
        const produtodetalhe = produtocomposicao.map(itens => {
          return {
            'idproduto': id,
            ...itens
          }
        });
        await tran('produtocomposicao').insert(produtodetalhe);
      }

      await tran.commit();
      return id
    } catch (error) {
      await tran.rollback();
      return error.message;
    }
  }
}