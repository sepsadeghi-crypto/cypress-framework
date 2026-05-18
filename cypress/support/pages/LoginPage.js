class LoginPage {
  static usernameInput = '[data-test="username"]'
  static passwordInput = '[data-test="password"]'
  static loginButton   = '[data-test="login-button"]'
  static errorMessage  = '[data-test="error"]'

  static visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  static login(username, password) {
    cy.get(this.usernameInput).type(username)
    cy.get(this.passwordInput).type(password)
    cy.get(this.loginButton).click()
  }
}

export default LoginPage
