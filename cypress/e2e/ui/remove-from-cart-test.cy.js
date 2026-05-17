import loginPage from '../../support/pages/LoginPage'
import inventoryPage from '../../support/pages/InventoryPage'
import cartPage from '../../support/pages/CartPage'

describe('Remove From Cart (POM)', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('Should remove item from cart', () => {

    inventoryPage.addFirstItemToCart();
    inventoryPage.goToCart();

    cartPage.removeFirstItem();

    cartPage.elements.cartItems().should('have.length', 0);

  });

});
