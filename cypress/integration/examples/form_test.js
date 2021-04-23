describe('Pizza Tests', function() {
    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('#size-dropdown')
    const sauceInput = () => cy.get('input[name=sauce]')
    const pepperoniInput = () => cy.get('input[name=pepperoni]')
    const sausageInput = () => cy.get('input[name=sausage]')
    const buttonInput = () => cy.get('#order-button')

    beforeEach(function() {
        cy.visit('http://localhost:3000/pizza')
    })

    it('this is a sanity check', function() {
        expect(1 + 2).to.equal(3)
        // expect(1 + 2).to.equal(4)
        expect(1 + 2).to.not.equal(4)
    })


    it('checking for input existance', function(){
        nameInput().should('exist');        
        pepperoniInput().should('exist');        
        sausageInput().should('exist');        
        buttonInput().should('exist'); 
        sizeInput().should('exist');
        sauceInput().should('exist');       
    })
    
    it('check if input works!', function(){
        nameInput().should('have.value','').type('Coop').should('have.value', 'Coop');
        sizeInput().select('Small')
        sauceInput().first().check()
        pepperoniInput().should('not.be.checked').check().should('be.checked');
        sausageInput().should('not.be.checked').check().should('be.checked');
        buttonInput().click()
    })

})