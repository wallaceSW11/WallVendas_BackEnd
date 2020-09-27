const respostaHome = {
  company: "WallTerdata",
  message: "Bem vindo ao Backend do WallVendas!!! Para mais informações, acesse www.wallvendas.com"
};

module.exports = {
  home(request, response) {
    return response.status(400).json(respostaHome);
  }
}