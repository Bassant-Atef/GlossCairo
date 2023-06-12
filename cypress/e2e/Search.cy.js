// <reference types="cypress"/>

describe('Search Functionality', () => {
  it('User can search for any item', () => {
    const searchParameter = 'Amanda';

    cy.visit('https://www.glosscairo.com/?lang=en');

    cy.get('[id="newSearch"]').should('be.visible').first().type(searchParameter);
    cy.get('[id="searchSubmit"]').click({ force: true  ,multiple: true });

    // Validate the search results
    cy.get('.all-products-cat').should('be.visible');
    cy.url().should('include', searchParameter);
    });
  });
