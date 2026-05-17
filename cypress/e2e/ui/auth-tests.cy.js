/// <reference types="cypress" />

// Page objects
import LoginPage from "../../../support/page-objects/login-page"

// Configurations
let username
let password

before(() => {
    cy.section("Suite Setup")
    username = Cypress.env('username')
    password = Cypress.env('password')
})

describe('Authentication Tests', { tags: ['@ui'] }, () => {

    beforeEach(() => {
        cy.section("Test Setup")
        cy.visit('/', { failOnStatusCode: false })
    })

    it('Should login with valid credentials', { tags: ['@smoke', '@regression'] }, () => {
        cy.section("Test Body")

        cy.step("ARRANGE: Enter valid credentials")
        cy.get(LoginPage.usernameInput).type(username)
        cy.get(LoginPage.passwordInput).type(password)

        cy.step("ACT: Click login button")
        cy.get(LoginPage.loginButton).click()

        cy.step("ASSERT: User should be redirected to inventory page")
        cy.url().should('include', '/inventory.html')
    })

    it('Should show error with invalid credentials', { tags: ['@regression'] }, () => {
        cy.section("Test Body")

        cy.step("ARRANGE: Enter invalid credentials")
        cy.get(LoginPage.usernameInput).type('invalid_user')
        cy.get(LoginPage.passwordInput).type('wrong_password')

        cy.step("ACT: Click login button")
        cy.get(LoginPage.loginButton).click()

        cy.step("ASSERT: Error message should appear")
        cy.get(LoginPage.errorMessage).should('be.visible')
    })

})
