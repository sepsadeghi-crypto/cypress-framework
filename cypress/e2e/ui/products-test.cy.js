describe('Products Test', () => {

  it('Products are displayed on inventory page', () => {

    cy.visit('/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item')
      .should('have.length.at.least', 6)

  })

})
