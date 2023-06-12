// <reference types="cypress"/>
//Clear Field's Data and Rewrite a new ones

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
              cy.get('#username').type('Bassantatef@testsupport.com');
              cy.get('#password').type('Test12345{enter}');
            });
     });
    
     describe('Fill Checkout form' , () =>{
    
      it('Clear and rewrite data in form fields', () => {
        
        // Clear and enter new data in the billing phone field
        cy.get('[name="billing_phone"]', { timeout: 10000 }).should('exist').clear().type('012141516178');
      
        // Clear and enter new data in the city selection field
        cy.get('[id="select2-billing_city-container"]').click();
        cy.get('.select2-results__option').should('be.visible');
        cy.contains('.select2-results__option', 'El Abbaseya').click();
        cy.get('[id="payment_method_cod"]').check({force:true});
        //cy.get('[class="button alt"]').click();
      });       
     });
    
       });
    
    });
    
    });