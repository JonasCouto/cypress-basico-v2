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

      cy.get('#phone-checkbox')
      .check()
      .should('be.checked')

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

      //TESTE 2 - aula 3
      it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        
        // Seleciona um elemento SELECT no formulario que tem o valor MENTORIA e verifica
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
  
      })

      //TESTE 3 - aula 3
      it('seleciona um produto (Blog) por seu índice', function() {
        
        // Seleciona um elemento SELECT no formulario que tem o valor BLOG e verifica
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
        
      })
  
      //TESTE 1 - aula 4
      //Marca um campo do tipo radio e depois valida pelo valor
      it('marca o tipo de atendimento "Feedback', function() {
        
        //
        cy.get('[type="radio"]')
        .check('feedback')
        .should('have.value', 'feedback')
        
      })

      //TESTE 2 - aula 4
      // Marca todos tipo de campo radio um de cada vez e dps verifica se todos foram marcados
      it('marca cada tipo de atendimento', function() {
        
        // 
        cy.get('[type="radio"]')
        .each((product) => {
          cy.wrap(product)
          .check()
          .should('be.checked')
        })
        
      })

      //TESTE 1 - aula 5
      // Marca todos campos checke e depois desmarca o ultimo
      it('marca ambos checkboxes, depois desmarca o último', function() {

        cy.get('[type="checkbox"]')  
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')
        
      })

      
    //TESTE 2 aula 5
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

      cy.get('#phone-checkbox')
      .check()
      .should('be.checked')

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

    //TESTE 1 - aula 6
      // Seleciona um arquivo para envio em determinada pasta e verifica o seu nome
      it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json')
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')
        }
        )     
        
      })

      //TESTE 2 - aula 6

      it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json',{ action: 'drag-drop' })
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')
        })     
      })


      //TESTE 3 - aula 6
      // Nomeia um ALIAS para o arSSquivo e verifica a seleção dele
      it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('@sampleFile')
        .should(input => {
          expect(input[0].files[0].name).to.equal('example.json')
        })    
           
        })

        //TESTE 1 - aula 7
        it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
          cy.get('#privacy a')
          .should('have.attr', 'target', '_blank')
          })

          //TESTE 2 - aula 7
          // Pega e remove o elemento target que direciona para outra pagina e abre na mesma aba
        it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        // .should('have.attr', 'target', '_blank')
        .click()

        cy.contains('Talking About Testing')
        .should('be.visible')
        })

          //TESTE 3 - aula 7
        // it('testa a página da política de privacidade de forma independentes', function() {
        //   cy.get('#privacy a')
        //   .invoke('removeAttr', 'target')
        //   // .should('have.attr', 'target', '_blank')
        //   .click()
  
        //   cy.contains('Talking About Testing')
        //   .should('be.visible')
         
        //   })
  



  

})

  