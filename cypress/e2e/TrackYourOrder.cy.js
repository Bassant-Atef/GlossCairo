// <reference types="cypress"/>

describe('Track Your Order', () => {

  before(() => 
  {
    // Visit the website and sign in before running the tests
    cy.visit('https://www.glosscairo.com/?lang=en');
    cy.contains('Sign in').click({ force: true });
    cy.wait(2000);
    cy.url().should('include', 'my-account');

    cy.get('#username').should('be.visible').type('Test@support.com');
    cy.get('#password').should('be.visible').type('Test12345{enter}');
  
    // Verify if login was successful
    cy.get('.woocommerce-MyAccount-content').should('be.visible');

  });

  it('should display the track order form', () => 
  {
    // Verify if user can click on track your order
    cy.contains('Track Your Order').click({ force: true });
    cy.url().should('include', '/track-order');
    cy.get('input[name="order_id"]').should('be.visible');
    cy.get('[value="Track"]').should('be.visible');
  });

  it('should show an error message for invalid order details', () => 
  {
    // Verify if user can click on track your order
    cy.visit('https://www.glosscairo.com/?lang=en');
    cy.contains('Track Your Order').click({ force: true });
    cy.url().should('include', '/track-order');
    cy.get('input[name="order_id"]').should('be.visible');
    cy.get('[value="Track"]').should('be.visible');

    // Should successfully track the order with valid details
    cy.contains('Track Your Order').click({ force: true });
    cy.get('input[name="order_id"]').type('4547').wait(2000);
    cy.get('[value="Track"]').click();
    cy.contains('Sorry, your tracking attempt was not successful. Please check your Enter Order Number');

    cy.get('input[name="order_id"]').clear().type('60634');
    cy.get('[value="Track"]').click();
    cy.wait(5000);
    cy.contains('Order ');

  });
  
});
