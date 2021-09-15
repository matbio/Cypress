/// <reference types="cypress"/>

describe('Cypress básico', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })
    it('Visitar uma página', () => {
        cy.title()
                .should('equal', 'Campo de Treinamento')
                .and('contain', 'Campo')

    })

    it('Clicar no botão [click me!]', () => {
        cy.get('#buttonSimple').click()
                                .should('have.value', 'Obrigado!')
    })

    it('Validar texto', () => {
            cy.get('.facilAchar')
                                .should('contain', 'Cuidado')
                                .and('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Clicar em um link a usando seu texto', () => {
        cy.contains('Voltar')
                            .click()
                                    .get('#resultado')
                                                    .should('have.text', 'Voltou!')
    })

    //Nos inputs os textos ficam no atributo value
    //.clear() limapa o campo
    // tecla para apagar {backspace}
    // tecla para selecionar tudo escrito em um campo {selectAll} 
    it('Inserir textos em campos', () => {
        cy.get('#formNome')
                            .type('escrevendo algo')
        cy.get('#formNome')
                            .should('have.value', 'escrevendo algo')
    })

})