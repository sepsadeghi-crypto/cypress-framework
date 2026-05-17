import loginPage from '../../support/pages/LoginPage'
import inventoryPage from '../../support/pages/InventoryPage'

describe('Add To Cart (POM)', () => {

    beforeEach(() => {
        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');
    });

    it('Should add product to cart', () => {
        inventoryPage.addFirstItemToCart();
        inventoryPage.elements.cartBadge().should('contain', '1');
    });

});
