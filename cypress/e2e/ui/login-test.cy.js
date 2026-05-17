import loginPage from '../../support/pages/LoginPage'

describe('Login Tests (POM)', () => {

    beforeEach(() => {
        loginPage.visit();
    });

    it('Should login with valid credentials', () => {
        loginPage.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
    });

    it('Should show error for invalid credentials', () => {
        loginPage.login('wrong_user', 'wrong_password');
        loginPage.elements.errorMessage().should('be.visible')
            .and('contain', 'Username and password do not match');
    });

});
