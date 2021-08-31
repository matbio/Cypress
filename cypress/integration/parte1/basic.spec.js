/// <reference types="cypress"/>

describe('Cypress básico', () => {

    it('Visitar uma página', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title()
                .should('equal', 'Campo de Treinamento')
                .and('contain', 'Campo')

    })

    it('Clicar no botão [click me!]', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
                                .should('have.value', 'Obrigado!')
    })

    it('Validar texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
            cy.get('.facilAchar')
                                .should('contain', 'Cuidado')
                                .and('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })



})