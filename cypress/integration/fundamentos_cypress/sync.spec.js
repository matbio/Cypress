describe('Cypress básico', () => {
    //EXECUTAR ANTES DE TUDO
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Sincronismo simples', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist').type('Existe')
    })

    it('Sincronismo retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist').type('Existe')
    })

    it('Sincronismo retrys com o find', () => {
        cy.get('#lista').should('not.exist')
        cy.get('#buttonList').click()
        cy.get('#lista li')
                            .find('span')
                            .should('contain', 'Item 1')
        cy.get('#buttonList').click()
        cy.get('#lista li span')
                            .should('contain', 'Item 2')
    })

    it('Sincronismo retrys wait e timeout', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.wait(5000)
        //cy.get('#novoCampo',{timeout: 5000}).should('exist').type('Existe')
        cy.get('#novoCampo').should('exist').type('Existe')
    })

    it('Sincronismo Should vs Then', () => {
        // Should executa constatemente até identificar o valor desejado, enquanto o then aguarda a exibição do mesmo
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then( $el => {
            console.log($el)
            expect($el).to.have.length(1)
        })
    })


    // Obs. Não existe retentativa para ações que alteram o html, exemplo: click()
})