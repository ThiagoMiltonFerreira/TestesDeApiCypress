//Funcionalidade
describe("Buscar dispositivos", () => {
  it("Buscar dispositivo especifico", () => {
    cy.request({
      // Envia requisição para url do tipo get
      method: "GET",
      url: "https://api.restful-api.dev/objects/1",
    }).then((response) => {
      // o ten executa apos o envio da requisição
      // Faz a validação no campo do response status se e igual a 200
      expect(response.status).to.equal(200);
    });
  });
  it("Buscar dispositivo inexistente", () => {
    cy.request({
      // Envia requisição para url do tipo get
      method: "GET",
      url: "https://api.restful-api.dev/objects/inexistente",
      //ignora o erro para fazer a validação no then
      failOnStatusCode: false,
    }).then((response) => {
      // o ten executa apos o envio da requisição
      // Valida se o status e igual a 404
      expect(response.status).to.equal(404);
      //Valida  se o campo error no body e igual a Oject with id=inexistente was not found.
      expect(response.body.error).to.equal(
        "Oject with id=inexistente was not found."
      );
    });
  });
});

//Cenarios de teste
