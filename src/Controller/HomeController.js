const respostaHome = {
  company: 'WallTerdata',
  message: 'Bem vindo ao Backend do WallVendas!!! Para mais informações, acesse www.wallterdata.com/wallvendas/api',
};

module.exports = {
  home(request, response) {
    return response.json(respostaHome);
  }
}