const connection = require('../database/connection');

module.exports = {
  async index(request, response) {

    try {
      const produto = await connection('produto')
        .select('id', 'descricao', 'valorprecovenda')
        .orderBy('descricao');

      return response.json(produto);

    } catch (error) {
      return response.status(201).json({ message: 'não foi possível realizar a consulta, mensagem original: ' + error.message })
    }
  }
}