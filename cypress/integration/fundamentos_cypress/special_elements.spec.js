/// <reference types="cypress"/>

describe('Exemplo de describe', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('Alerts JavaScript', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('Alerts JavaScript com mock', () => {
        // stub() é um função que substitui uma função
        // as() da um nome a função
        const stub =  cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it('Confirms JavaScript [OK]', () => {
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })

    it('Confirms JavaScript [CANCELAR]', () => {
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Negado')
        })
        cy.get('#confirm').click()
    })

    it('Prompt JavaScript [OK]', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click()
    })

    it('Prompt JavaScript [Cancelar]', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })
        cy.on('window:confirm', msg =>{
            expect(msg).to.be.equal('Era 42?')
            return false
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal(':(')
        })
        cy.get('#prompt').click()
    })

    
    it('Iframes', () => {
    // Uma limitação do cypress é clicar em botões que abrem eventos como alert, prompts ... etc, pois o cypress não consegue finalizar a ação e trava o teste.
    // Uma opção é visitar a página e testar a parte interna.
        cy.get('#frame1').then(iframe => {
            const body =  iframe.contents().find('body')
            cy.wrap(body).find('#tfield').type('Escreve no iframe').should('have.value', 'Escreve no iframe')
        })
    })

    it('PopUps', () => {
        // Uma limitação do cypress é não interagir com Popups, uma saída é validar o popup como uma página própria.
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Click OK!')
        })
    })

    it('Invocando PopUps', () => {
        // Podemos testar se de fato o popup foi chamado.
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })

    it('PopUps em links', () => {
        cy.contains('Popup2').should('have.prop', 'href').and('equal','https://wcaquino.me/cypress/frame.html')
    })



})