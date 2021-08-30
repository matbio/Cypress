/// <reference types="cypress"/>
describe('Assertivas de igualdade', () => {
    const obj = {
        a: 1,
        b: 2
    }
    context('de igualdade', () => {
        it('equal', () => {
            expect(1 + 1, 'deve ser igual a 2').equal(2)
        })
        it('Ser igual', () => {
            expect(1 + 1, 'deve ser igual a 2').to.be.equal(2)
        })
        it('Não ser igual', () => {
            expect('a', 'não deve ser igual a A').not.to.be.equal('b')
        })
        it('Deep equals', () => {
            expect(obj, 'o objeto deve ter o elemento a').to.be.deep.equals({ a: 1, b: 2 })
        })
        it('Eql', () => {
            expect(obj, 'o objeto deve ter o elemento a').eql({ a: 1, b: 2 })
        })

    })
    context('de veracidade', () => {
        const a = true;
        const b = false;


        it('Verdade', () => {
            expect(a, 'deve ser verdadeira').to.be.true
            expect(a, 'deve ser verdadeira').not.to.be.false

        })
        it('Falso', () => {
            expect(b, 'deve ser falsa').to.be.false
            expect(b, 'deve ser falsa').not.to.be.true

        })

        it('Include', () => {
            expect(obj, 'o objeto deve ter o elemento a').include({ a: 1 })
        })

        it('To have property', () => {
            expect(obj).to.have.property('b')
            expect(obj).to.have.property('b', 2)
        })

        it('Vazio', () => {
            expect(obj, 'não deve ser vazio').not.to.be.empty
            expect({}, 'deve ser vazio').to.be.empty

        })

        it('Arrays', () => {
            const array = [1, 2, 3]
            expect(array, 'ter todos os elementos').to.have.members([1, 2, 3])
            expect(array, 'ter pelo menos os elementos incluidos').to.have.include.members([1, 3])
        })

        it('Types', () => {
            const txt = 'essa é uma string'
            const num = 1

            expect(num).to.be.a('number')
            expect(txt).to.be.a('string')
            expect({}).to.be.an('object')
            expect([]).to.be.an('array')

        })

        it('String', () => {
            const txt = 'essa é uma string'

            expect(txt).to.have.length(17)
            expect(txt).to.have.contains('uma')
            expect(txt).to.match(/uma/)
            expect(txt).to.match(/.{17}/)
            expect(txt).to.match(/\w+/)
            expect(txt).to.match(/\D+/)

        })

        it('Number', () => {
            const n = 7

            expect(n).to.be.above(6)
            expect(n).to.be.below(8)
            expect(n).to.be.closeTo(6.9, 0.1)
        })

    })
})
