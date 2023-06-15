// <reference types="cypress"/>
//Clear Field's Data and Rewrite a new ones

describe(' Checkout with CashOnDelivery ' , () => {

    //before(() => 
    //{
        it('login', ()=> {
      // Visit the website and sign in before running the tests
      cy.visit('https://cloudhosta.com:63/myaccount/user-login.php');
      cy.get('[class="login-form MD-form MD-inputs"]').should('be.visible');
      cy.get('#login_email').should('be.visible').type('Bassant.atef@mitchdesigns.com');
      cy.get('#login_password').should('be.visible').type('UM*ynM2KGEPX83zYfQcLY@wC{enter}', { force: true });

    });
  //  });

    describe('Add items to cart' , () => {
    
        it('Add items to cart and login' , () =>
        {
    
            cy.visit("https://cloudhosta.com:63/shop/");
            cy.get('[class="icon_add  product_448"]').click({multiple:true ,force: true });
            cy.get('[class="open_checkout"]').should('be.visible').click({multiple:true});
            cy.wait(200);
            cy.get('#billing_first_name').should('be.visible').type('Bassant');
            cy.get('#billing_last_name').should('be.visible').type('Atef');
            cy.get('#billing_email').should('be.visible').type('Bassant.atef@mitchdesigns.com');
            cy.get('#billing_phone').should('be.visible').type('01272199962');
            cy.get('#billing_state').select('الفيوم');
            cy.get('select[name="billing_street"]').select('الفيوم');
            cy.get('select[name="billing_city"]').select('السلخانه');
            //cy.get('.woocommerce-input-wrapper').should('be.visible').select(1);
            //cy.contains('.select2-results__option', 'Ain shams').click();
            //billing_state
            cy.get('#billing_address_1').should('be.visible').type('1');
            cy.get('#billing_building').should('be.visible').type('1');
            cy.get('#billing_building_2').should('be.visible').type('1');
            cy.get('[id="payment_method_cod"]').check({force:true});
            cy.get('[class="button alt"]').click();
        });
         
        

        });
    });
 /*   describe(' Go to checkout page and login ' , () => {
    
            cy.visit("https://www.glosscairo.com/checkout/?lang=en").wait(2000);
            cy.contains("Enter an existing account by e-mail").click();
    
              cy.get('#popup-login').should('be.visible').within(() => {
              cy.get('#username').type('Bassant.atef@mitchdesigns,com');
              cy.get('#password').type('UM*ynM2KGEPX83zYfQcLY@wC{enter}');
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
    
    });*/
    