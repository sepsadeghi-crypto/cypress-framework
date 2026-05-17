describe('Invalid Login Test', () => {

  it('User cannot login with wrong credentials', () => {
    cy.visit('/')

    cy.get('#user-name').type('wrong_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface')
  })

})
