// <reference types="cypress"/>

describe('SignUp Functionality' , () => {

    it('Fill the required fields to signup successfully' , () => {
        it('should sign up successfully', () => {
            // Intercept the reCAPTCHA API request
            cy.intercept('POST', 'https://www.google.com/recaptcha/api2/userverify', (req) => {
              req.reply({
                statusCode: 200,
                body: {
                  success: true
                }
              });
            });
            });

    });
    it('Sign Up' , () => {
        cy.visit("https://www.glosscairo.com/my-account/");
        cy.get('#first_name').should('be.visible').type('New');
        cy.get('#last_name').should('be.visible').type('User');
        cy.get('#reg_email').should('be.visible').invoke('val', 'Importanttest@gmail.com');
        cy.get('#phone_number').should('be.visible').type('01011121314');
        cy.get('#reg_password').should('be.visible').type('Test12345');
        cy.get('#reg_password2').should('be.visible').type('Test12345');
        cy.wait(2000);
        cy.get('[class="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"]').should('be.visible').click({multiple:true , force:true});
        cy.wait(2000);
    });

    });

    

