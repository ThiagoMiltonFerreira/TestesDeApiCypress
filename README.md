Quando dar npm install cypress vai criar uma pasta cypress
e dentro dela crie uma pasta nome e2e e dentro dela 
vai os arquivos de teste exemplo.cy.js o cypress automaticmanete vai entender
que se trata de um arquivo de testess

................................
Criando projeto
criar pasta para o projeto no cmd rodar os codigos abaixo

npm init -y
npm install cypress

npx cypress open -> roda o cypress

Criar o arquivo de testes dentro da pasta cypress
criar uma pasta com nome e2e e dentro dela vai ficar os arquivos de teste

arquivo de teste com nome login.cy.js

npx cypress run -> roda o cypress sem abrir o navegador

// funcionalidade
describe("Login", () => {
  //Cenarios
  it("Login de sucesso", () => {

  });
  it("Login com email vazio", () => {
    
  });
  it("Login com senha vazia", () => {
    
  });
});


describe("Login", () => {
  //Cenarios
  // it.only executa somente o caso de teste atual
  it("Login de sucesso", () => {
    // Executar na visualização do iphone xr
    cy.viewport("iphone-xr");
    //Acessar tela de login
    cy.visit("https://automationpratice.com.br/login");
    //digita email
    cy.get("#user").type("edu@qazando.com");
    //digita senha
    cy.get("#password").type("123456");
    //clicar no botão de login
    cy.get("#btnLogin").click();
    //validar que o login foi realizado
    // o id tenha o texto Login realizado
    cy.get("#swal2-title").should("have.text", "Login realizado");
  });
