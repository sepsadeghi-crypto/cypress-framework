import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should login successfully with valid credentials', () => {
    LoginPage.login(
      Cypress.env('username'),
      Cypress.env('password')
    )

    cy.url().should('include', '/inventory.html')
  })

  it('should show error message for invalid login', () => {
    LoginPage.login('invalid_user', 'invalid_password')

    cy.get(LoginPage.errorMessage)
      .should('be.visible')
  })
})

