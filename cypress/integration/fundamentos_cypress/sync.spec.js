describe('Cypress básico', () => {
    //EXECUTAR ANTES DE TUDO
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Sincronismo simples', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist').type('Existe')
    })
})