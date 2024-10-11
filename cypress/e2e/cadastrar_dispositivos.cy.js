//Funcionalidade
describe("Buscar dispositivos", () => {
  it("Cadastrar dispositivocom sucesso", () => {
    cy.request({
      // Envia requisição para url do tipo post
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      //Passa o corpo da req
      body: {
        name: "Me contrata sou QA",
        data: {
          year: 2019,
          price: 1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      },
    }).then((response) => {
      // o ten executa apos o envio da requisição
      // Faz a validação no campo do response status se e igual a 200
      expect(response.status).to.equal(200);
      //Valida se o campo no response body e igual a Me contrata sou QA
      expect(response.body.name).to.equal("Me contrata sou QA");
    });
  });
});

//Cenarios de teste
