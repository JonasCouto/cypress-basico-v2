// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test



///<reference types="Cypress" />



// VERIFICANDO O TESTO DO TITULO É IGUAL
describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(() => {
    // VISITA A PAGINA
        cy.visit('./src/index.html')
    })  
    it('verifica o título da aplicação', function() {

        // VERIFICA O TITULO DA PAGINA
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  
    })

    // VERIFICA OS CAMPOS OBRIGATORIOS
    it.only('Preenche os campos obrigatórios e envia o formulário', function() {

      //varivel usada para guardar o texto do textarea.
      const textoLong = "Testando a variable do textarea de como passar um segundo parametro de tempo"

      cy.get('#firstName')
        .should('be.visible')
        .type('Jonas')
      
      cy.get('#lastName')
        .should('be.visible')
        .type('Couto')
      
      cy.get('#email')
        .should('be.visible')
        .type('jonascouto@teste.com') 

      cy.get('#open-text-area')
        .should('be.visible')

        //segunda parametro delay é o tempo de digitação no campo 
        .type(textoLong, { delay:0 })

      // CLICA NO BOTÃO DE ENVIAR O FORMULARIO
      cy.get('button[type="submit"]')
        .click()
      
      //CLICA NO BOTÃO DE ENVIAR E MOSTRA A MSG DE "ENVIADO COM SUCCESS" 
      cy.get('.success')
      .should('be.visible')
      
    })

    //NOVO TESTE
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {

      // VERIFICA O TITULO DA PAGINA
      cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')

  })
  })

  