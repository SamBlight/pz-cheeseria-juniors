/// <reference types="cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Add items to cart', () => {

    cy.get('[data-cy=add-to-cart-1]').click();
    cy.get('[data-cy=add-to-cart-5]').click();

    cy.get('[data-cy=badge-count]').should('have.text', '2');
    cy.get('[data-cy=badge-count]').click();
    cy.get('[data-cy=purchase-button]').click();
    cy.get('[data-cy=recent-purchases]').click();

    cy.get('[data-cy="data-cy-ABBAYE DE BELLOC"]').should('have.text', 'ABBAYE DE BELLOC');
    cy.get('[data-cy="data-cy-JARLSBERG"]').should('have.text', 'JARLSBERG');

  })
})
