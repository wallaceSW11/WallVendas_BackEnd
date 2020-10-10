const { response } = require('express');
const connection = require('../database/connection');

const produtoDAO = require('../DAO/produtoDAO');

module.exports = {
  async consulta(request, response) {
    const { idproduto } = request.query;

    try {
      if (idproduto) {
        const produto = await produtoDAO.consultaProdutoPorId(idproduto);
        const produtoCoposicao = await produtoDAO.consultaProdutoComposicaoPorId(idproduto);
        const resposta = { produto, produtoCoposicao };
        return response.json(resposta);
      } else {
        return response.json(await produtoDAO.consultaProduto());
      }
    } catch (error) {
      return response.status(400).json({ erro: 'falha na consulta de produtos.', message: error.message });
    }
  },

  async novoCadastro(request, response) {

    produtoDAO.cadastrarProduto(request.body).then(idProdutoCadastrado => {
      if (!Number.isInteger(idProdutoCadastrado)) {
        return response.status(400).json({ erro: 'Falha ao cadastrar produto', message: idProdutoCadastrado });
      } else {
        return response.status(200).json({ id: idProdutoCadastrado });
      }
    })

  },

  async atualizarCadastro(request, response) {
    const { id, codigo, descricao, valorprecovenda, possuicomposicao, produtocomposicao } = request.body;

    const tran = await connection.transaction();

    try {

      await tran('produto')
        .where('id', '=', id)
        .update({
          codigo,
          descricao,
          valorprecovenda
        });

      if (possuicomposicao) {
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
      }
      tran.commit();

      return response.json({ id: id });

    } catch (error) {

      tran.rollback();
      return response.status(400).json(
        { message: 'não foi possível atualizar o cadastrar o produto, mensagem original: ' + error.message })

    }

  },


}