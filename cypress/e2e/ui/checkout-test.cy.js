import loginPage from '../../support/pages/LoginPage'
import inventoryPage from '../../support/pages/InventoryPage'
import cartPage from '../../support/pages/CartPage'
import checkoutPage from '../../support/pages/CheckoutPage'

describe('Checkout Process (POM)', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('Should complete checkout successfully', () => {

    // Step 1: Add item
    inventoryPage.addFirstItemToCart();
    inventoryPage.goToCart();

    // Step 2: Go to checkout
    cartPage.goToCheckout();

    // Step 3: Fill info
    checkoutPage.fillInformation('Sep', 'Sadeghi', '12345');

    // Step 4: Finish
    checkoutPage.finishCheckout();

    // Step 5: Assert success
    checkoutPage.elements.successHeader()
      .should('contain', 'Thank you for your order!');

  });

});
