describe('Sort Products Test', () => {

  it('Sort products by price low to high', () => {

    cy.visit('/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.product_sort_container').select('lohi')

    cy.get('.inventory_item_price').then(($prices) => {

      const prices = [...$prices].map(el =>
        parseFloat(el.innerText.replace('$', ''))
      )

      const sorted = [...prices].sort((a, b) => a - b)

      expect(prices).to.deep.equal(sorted)

    })

  })

})
