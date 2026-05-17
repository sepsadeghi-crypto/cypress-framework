class CheckoutPage {

  elements = {
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    successHeader: () => cy.get('.complete-header')
  }

  fillInformation(first, last, zip) {
    this.elements.firstNameInput().type(first);
    this.elements.lastNameInput().type(last);
    this.elements.postalCodeInput().type(zip);
    this.elements.continueButton().click();
  }

  finishCheckout() {
    this.elements.finishButton().click();
  }
}

export default new CheckoutPage();
