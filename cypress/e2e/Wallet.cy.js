describe('Check the wallet Functionality', () => {
    let initialBalance;
  
    before(() => {
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

    it('Store the initial wallet balance' , () => {
      
      cy.contains('Wallet', { timeout: 10000 })
        .click()
        .get('[class="woocommerce-Price-amount amount"]', { timeout: 15000 })
        .invoke('text')
        .then((balance) => {
          initialBalance = parseFloat(balance.trim().replace('EGP', ''));
          cy.log(`Initial Wallet Balance: ${initialBalance} EGP`);
        });

   /* it('Go back to the wallet and check the updated balance' , () => {
        cy.contains('Wallet', { timeout: 10000 })
        .click()
        .get('[class="woocommerce-Price-amount amount"]', { timeout: 15000 })
        .should(($balance) => {
        const updatedBalance = parseFloat($balance.text().trim().replace('EGP', ''));
        const cashbackAmount = 10; // Enter the expected cashback amount

        // Validate if the wallet balance has been updated correctly after the order
        expect(updatedBalance).to.eq(initialBalance + cashbackAmount);
        }); */
        
    });
    });
    