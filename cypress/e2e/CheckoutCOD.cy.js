// <reference types="cypress"/>
//For The First Time making an order 
describe(' Checkout with CashOnDelivery ' , () => {

describe('Add items to cart' , () => {

    it('Add items to cart and login' , () =>
    {

        cy.visit("https://www.glosscairo.com/product-category/skin-care/?lang=en");
        cy.get('.add_to_cart_button').each(($button, index) => {
            if (index <= 4) 
              { 
                cy.wait(200);
                cy.wrap($button).click({ multiple: true });
              }
        });

describe(' Go to checkout page and login ' , () => {

        cy.visit("https://www.glosscairo.com/checkout/?lang=en").wait(2000);
        cy.contains("Enter an existing account by e-mail").click();
          cy.get('#popup-login').should('be.visible').within(() => {
          cy.get('#username').type('Test@support.com');
          cy.get('#password').type('Test12345{enter}');
        });
 });

 describe('Fill Checkout form' , () =>{

    cy.get('[name="billing_phone"]', { timeout: 10000 }).should('exist').then(($input) => {
    cy.wrap($input).type('01272199962'); })
    cy.get('[title="Choose city"]').click();
    cy.get('.select2-results__option').should('be.visible');
    cy.contains('.select2-results__option', 'Ain shams').click();
    cy.get('#billing_address_1').type("Ahmed Essmat Street");
    cy.get('#billing_building_2').type("35");
    cy.get('#billing_building').type("4");
    cy.get('#billing_address_2').type("10");
    cy.get('[id="payment_method_cod"]').check({force:true});
    //cy.get('[class="button alt"]').click();

  });
  
    

    
 });

   });

});