// <reference types="cypress"/>

describe('User can apply a valid promocode only ' , () =>
{
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

  it('should click on promo code hyperlink and enter promo code', () => {
    const promoCode = 'FREESHIPPING';
  
    cy.visit('https://www.glosscairo.com/checkout/?lang=en');
    cy.url().should('include', '/checkout');
  
    // Click on the hyperlink containing the text "Do you have a promo code?"
    cy.wait(20000);
    cy.get('[class="open-coupon"]').should('be.visible').click({ force: true });

    // Wait for the form to become active
    cy.get('.checkout_coupon').should('have.class', 'active').should('be.visible');
  
    // Retry until the form is active or timeout occurs
    cy.wait(500).then(() => {
      let retryCount = 0;
      const maxRetries = 8; // Adjust the maximum number of retries as needed
  
      // Loop until the form is active or max retries exceeded
      cy.get('.checkout_coupon').should($form => {
        const isActive = $form.hasClass('active');
        if (!isActive && retryCount < maxRetries) {
          retryCount++;
          throw new Error('Form is not active yet, retrying...');
        }
      });
    });
  
    // Verify the visibility of the promo code input field
    cy.get('.checkout_coupon.active #coupon_code').should('be.visible');
  
    // Type the promo code into the input field
    cy.get('.checkout_coupon.active #coupon_code').type(promoCode);
  
    // Click on the apply coupon button
    cy.get('.checkout_coupon.active').contains('Apply Now').click();
  
    //cy.get('.cart-discount.coupon-bk8mrj7u').should('be.visible');

    cy.get('.woocommerce-notices-wrapper').then($noticesWrapper => {
      if ($noticesWrapper.text().includes('Coupon does not exist!')) {
      
        cy.log('Invalid promo code');
        
      } else {

        cy.log('Coupon has been activiated successfully!');
        cy.get('[class="woocommerce-message"]').should('be.visible');
        
      }
    });
    cy.get('[id="payment_method_cod"]').check({force:true});
    // cy.get('[class="button alt"]').click();
  });
  
  });
  

