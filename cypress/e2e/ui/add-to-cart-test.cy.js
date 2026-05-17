describe('Add To Cart Test', () => {

  it('User can add a product to cart', () => {

    cy.visit('/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item').first().find('button').click()

    cy.get('.shopping_cart_badge')
      .should('exist')
      .and('contain', '1')

  })

})
