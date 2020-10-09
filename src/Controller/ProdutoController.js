const connection = require('../database/connection');

module.exports = {
  async produtos(request, response) {

    try {
      const produto = await connection('produto')
        .select('id', 'codigo', 'descricao', 'valorprecovenda')
        .orderBy('descricao');

      return response.json(produto);

    } catch (error) {
      return response.status(400).json({ message: 'não foi possível realizar a consulta, mensagem original: ' + error.message })
    }
  },

  async produtoDetalhe(request, response) {
    try {
      const { idproduto } = request.query;

      const produtoComposicao = await connection('produtocomposicao')
        .where('idproduto', '=', idproduto)
        .select('*');

      const produto = await connection('produto')
        .where('id', '=', idproduto)
        .select('*')
        .first();

      return response.json({ produto, produtoComposicao });

    } catch (error) {
      return response.status(400).json({ message: 'não foi possível realizar a consulta, mensagem original: ' + error.message })
    }
  },

  async novoCadastro(request, response) {
    const { codigo, descricao, valorprecovenda, possuicomposicao, produtocomposicao } = request.body;

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

      tran.commit();

      return response.json({ id: id });

    } catch (error) {

      tran.rollback();

      return response.status(400).json({ message: 'não foi possível cadastrar o produto, mensagem original: ' + error.message })

    }
  },

  async atualizarCadastro(request, response) {
    const { id, codigo, descricao, valorprecovenda, produtocomposicao } = request.body;

    const tran = await connection.transaction();

    try {

      await tran('produto')
        .where('id', '=', id)
        .update({
          codigo,
          descricao,
          valorprecovenda
        });

      await tran('produtocomposicao')
        .where('idproduto', '=', id)
        .delete();

      const produtodetalhe = produtocomposicao.map(itens => {
        return {
          'idproduto': id,
          ...itens
        }
      });

      await tran('produtocomposicao').insert(produtodetalhe);

      tran.commit();

      return response.json({ id: id });

    } catch (error) {

      tran.rollback();
      return response.status(400).json(
        { message: 'não foi possível atualizar o cadastrar o produto, mensagem original: ' + error.message })

    }

  },


}