const connection = require('../database/connection');

module.exports = {
  async listaProdutos(request, response) {

    try {
      const produto = await connection('produto')
        .select('codigo', 'descricao', 'valorprecovenda')
        .orderBy('descricao');

      return response.json(produto);

    } catch (error) {
      return response.status(201).json({ message: 'não foi possível realizar a consulta, mensagem original: ' + error.message })
    }
  },

  async produtoDetalhe(request, response) {
    try {
      const produtoComposicao = await connection('produtocomposicao')
        .select('*');
      //.where('idproduto', '=', '1');

      return response.json(produtoComposicao)

    } catch (error) {
      return response.status(201).json({ message: 'não foi possível realizar a consulta, mensagem original: ' + error.message })
    }
  },

  async create(request, response) {
    const { codigo, descricao, valorprecovenda, produtocomposicao } = request.body;


    try {

      const [id] = await connection('produto').insert({
        codigo,
        descricao,
        valorprecovenda
      }, 'id');

      const produtodetalhe = produtocomposicao.map(itens => {
        return {
          'idproduto': id,
          ...itens
        }
      });

      try {
        await connection('produtocomposicao').insert(produtodetalhe);
      }
      catch (erro) {
        return response.status(201).json({ message: 'não foi possível cadastrar o produto composto, mensagem original: ' + erro.message })
      };

      return response.json({ id: id });

    } catch (error) {
      return response.status(201).json({ message: 'não foi possível cadastrar o produto, mensagem original: ' + error.message })
    }

  },


}