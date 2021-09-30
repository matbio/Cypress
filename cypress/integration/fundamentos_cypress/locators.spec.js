/// <reference types="cypress"/>

describe('Exemplo de describe', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    // Utilizando um plugin
    it('XPATH', () => {
        cy.xpath('//input') // Procura por toda árvore do html até achar o primeiro INPUT
        cy.xpath("//input[@value='Clique aqui']") // Procura por toda árvore do html até achar o primeiro INPUT e com valor especifico.
    })

})