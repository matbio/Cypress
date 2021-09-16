/// <reference types="cypress"/>

describe('Cypress básico', () => {
    //EXECUTAR ANTES DE TUDO
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    //EXECUTAR ANTES DE CADA CASO
    beforeEach(() => {
        cy.reload()
    })
    it('[TESTE VISIT PAGE]', () => {
        cy.title()
            .should('equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

    })

    it('[TESTE CLICK BUTTON]', () => {
        cy.get('#buttonSimple').click()
            .should('have.value', 'Obrigado!')
    })

    it('[TESTE VALIDAÇÃO DE TEXT]', () => {
        cy.get('.facilAchar')
            .should('contain', 'Cuidado')
            .and('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('[TESTE CLICK EM LINK]', () => {
        cy.contains('Voltar')
            .click()
            .get('#resultado')
            .should('have.text', 'Voltou!')
    })

    //Nos inputs os textos ficam no atributo value
    //.clear() limapa o campo
    // tecla para apagar {backspace}
    // tecla para selecionar tudo escrito em um campo {selectAll} 
    it('[TESTE INPUT TEXT]', () => {
        cy.get('#formNome')
            .type('escrevendo algo')
        cy.get('#formNome')
            .should('have.value', 'escrevendo algo')
    })

    it('[TESTE RADIO BUTTON]', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexoMasc').should('not.be.checked')
        cy.get("[name='formSexo']").should('have.length', 2)
    })

    it('[TESTE CHECKED BOXES]', () => {
        cy.get("[name='formComidaFavorita']").click({ multiple: true })
            .get('#formComidaPizza').should('be.checked')
            .get('#formComidaFrango').should('be.checked')
            .get('#formComidaCarne').should('be.checked')
        cy.get("#formComidaVegetariana").click()
            .should('be.not.checked')
    })

    it('[TESTE COMBO SELECT]', () => {
        cy.get("#formEscolaridade").select('Superior').should('have.value', 'superior')
    })

    it('[TESTE COMBO MÚLTIPLO SELECT]', () => {
        cy.get("#formEsportes").select(['nada','natacao'])
    })



    


})