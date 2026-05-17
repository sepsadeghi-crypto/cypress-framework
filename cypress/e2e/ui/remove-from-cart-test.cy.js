describe('Remove From Cart Test', () => {

  it('User can remove a product from cart', () => {

    cy.visit('/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item').first().find('button').click()

    cy.get('.shopping_cart_badge').should('contain', '1')

    cy.get('.inventory_item').first().find('button').click()

    cy.get('.shopping_cart_badge').should('not.exist')

  })

})
