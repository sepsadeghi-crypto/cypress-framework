class InventoryPage {

    elements = {
        inventoryItems: () => cy.get('.inventory_item'),
        sortDropdown: () => cy.get('[data-test="product_sort_container"]'),
        addToCartButtons: () => cy.get('.btn_inventory'),
        cartBadge: () => cy.get('.shopping_cart_badge'),
        cartLink: () => cy.get('.shopping_cart_link')
    }

    addFirstItemToCart() {
        this.elements.addToCartButtons().first().click();
    }

    sortBy(optionValue) {
        this.elements.sortDropdown().select(optionValue);
    }

    goToCart() {
        this.elements.cartLink().click();
    }
}

export default new InventoryPage();
