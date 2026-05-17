class LoginPage {
    // ۱. لیست Selectorها (لوکیتورها)
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    // ۲. متدها (اکشن‌ها)
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    login(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
    }
}

export default new LoginPage();
