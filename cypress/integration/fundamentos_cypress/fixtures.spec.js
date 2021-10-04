/// <reference types="cypress"/>

describe('Preenchendo o formulário', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    // Utilizando um fixture
    it('Preenchendo o formulário com base em uma fixture', function () {
        cy.fixture('userData').as('usuario').then(() => {
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click()
            cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
            cy.get(`#formEscolaridade`).select(this.usuario.escolaridade)
            cy.get(`#formEsportes`).select(this.usuario.esportes)
            cy.get('#formCadastrar').click()
        })
    })

})