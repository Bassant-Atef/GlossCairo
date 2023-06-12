// <reference types="cypress"/>

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
          cy.get('#username').type('Bassantatef@testsupport.com');
          cy.get('#password').type('Test12345{enter}');
        });
 });

 describe('Enter credit card and click submit' , () =>{
    it('Enter credit card and click submit', () => {
      cy.wait(20000);
     //  cy.get('[class="wc_payment_method payment_method_nodepayment"]').should('be.visible').within(() => {
      cy.getIframe('#card-number').click().type('4242 4242 4242 4242');

     // cy.get('.gw-proxy-number').should('be.visible').type('454785442655445');
      // cy.wait(2000);

      // cy.get('[id="nameOnCard"]').should('be.visible').type('Malak Mitch');
    // }); 
  });
    //cy.get('[class="button alt"]').click();
 });

   });

   

});