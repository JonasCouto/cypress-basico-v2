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

    // VERIFICA OS CAMPOS OBRIGATORIOS  1
    it('Preenche os campos obrigatórios e envia o formulário', function() {

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
      cy.contains('button','Enviar')
        .click()
      
      //CLICA NO BOTÃO DE ENVIAR E MOSTRA A MSG DE "ENVIADO COM SUCCESS" 
      cy.get('.success')
      .should('be.visible')
      
    })

    // TESTE 2
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {

      cy.get('#firstName')
        .should('be.visible')
        .type('Jonas')
      
      cy.get('#lastName')
        .should('be.visible')
        .type('Couto')
      
      cy.get('#email')
        .should('be.visible')
        .type('jonascouto@teste,com') 

      cy.get('#open-text-area')
        .should('be.visible')
        .type("teste de campo")

      // CLICA NO BOTÃO DE ENVIAR O FORMULARIO
      cy.contains('button','Enviar')
        .click()
      
      //CLICA NO BOTÃO DE ENVIAR E MOSTRA A MSG DE "ENVIADO COM SUCCESS" 
      cy.get('.error')
      .should('be.visible')

    })


    //TESTE 3
    it('exibe mensagem de erro ao submeter o formulário com um telefone com formatação inválida', function() {

     
      cy.get('#phone')
      .type('testando campo')
      .should('have.value', '')

    })

    //TESTE 4
    it('exibe mensagem de erro ao submeter o formulário com um telefone com formatação inválida', function() {

      cy.get('#firstName')
        .should('be.visible')
        .type('Jonas')
      
      cy.get('#lastName')
        .should('be.visible')
        .type('Couto')
      
      cy.get('#email')
        .should('be.visible')
        .type('jonascouto@teste.com') 

      // cy.get('#phone')
      // .type('')
      // .should('have.value', '')

      cy.get('#phone-checkbox')
      .click()

      cy.get('#open-text-area')
        .should('be.visible')
        .type("teste de campo")

      // CLICA NO BOTÃO DE ENVIAR O FORMULARIO
      cy.contains('button','Enviar')
        .click()
      
      //CLICA NO BOTÃO DE ENVIAR E MOSTRA A MSG DE "ENVIADO COM SUCCESS" 
      cy.get('.error')
      .should('be.visible')
 

    })


     //TESTE 5
     it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {

      cy.get('#firstName')
        .should('be.visible')
        .type('Jonas')
        .should('have.value', 'Jonas')
        .clear()
        .should('have.value', '') 

        cy.get('#lastName')
        .should('be.visible')
        .type('Couto')
        .should('have.value', 'Couto')
        .clear()
        .should('have.value', '') 

        cy.get('#email')
        .should('be.visible')
        .type('jonascouto@teste.com')
        .should('have.value', 'jonascouto@teste.com')
        .clear()
        .should('have.value', '') 

        cy.get('#phone')
        .should('be.visible')
        .type('992997999')
        .should('have.value', '992997999')
        .clear()
        .should('have.value', '') 
    })

    //TESTE 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {

      // CLICA NO BOTÃO DE ENVIAR O FORMULARIO
      cy.contains('button','Enviar')
        .click()
      
      //CLICA NO BOTÃO DE ENVIAR E MOSTRA A MSG DE "ENVIADO COM SUCCESS" 
      cy.get('.error')
      .should('be.visible')
 
    })

    //TESTE 7
    it('envia o formuário com sucesso usando um comando customizado', function() {
      
      cy.fillMandatoryFieldsAndSubmit();
      cy.get('.success')
      .should('be.visible')    
    
 
    })

      //TESTE 1 - aula 3
      it('seleciona um produto (YouTube) por seu texto', function() {
        
        // Seleciona um elemento SELECT no formulario que tem o valor YOUTUBE e verifica
        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
  
      })


      it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        
        // Seleciona um elemento SELECT no formulario que tem o valor MENTORIA e verifica
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
  
      })

      it.only('seleciona um produto (Blog) por seu índice', function() {
        
        // Seleciona um elemento SELECT no formulario que tem o valor YOUTUBE e verifica
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
        
  
      })
  


})

  