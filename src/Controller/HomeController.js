const connection = require('../database/connection');


const respostaHome = {
  company: "WallTerdata",
  message: "Bem vindo ao Backend do WallVendas!!! Para mais informações, acesse www.wallvendas.com"
};

module.exports = {
  async home(request, response) {
    const produto = await connection('produto').select('*');

    return response.status(400).json(produto);
  }
}