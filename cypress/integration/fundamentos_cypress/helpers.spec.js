describe('Cypress básico', () => {
    //EXECUTAR ANTES DE TUDO
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('[FUNÇÃO WRAP]', () => {
        const obj = {nome: 'teste', versao: 1}
        cy.wrap(obj).should('have.property', 'nome', 'teste')
    })

    it('[FUNÇÃO ITS]', () => {
        const obj = {nome: 'teste', versao: 1}
        cy.wrap(obj).its('nome').should('be.equal', 'teste')
        cy.wrap(obj).its('versao').should('be.equal', 1)
    })

    it('[FUNÇÃO INVOKE]', () => {
        const getValue = () => 1;
        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.window().invoke('alert', 'Da pra ver?')

    })

})