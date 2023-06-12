// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

Cypress.Commands.add('waitUntil', { prevSubject: 'optional' }, (subject, callback, options) => {
    const { timeout = 4000, interval = 100 } = options;
  
    const checkCondition = (resolve, reject, startTime) => {
      const currentTime = new Date().getTime();
  
      if (callback(subject)) {
        resolve();
      } else if (currentTime - startTime >= timeout) {
        reject(new Error('Timed out waiting for condition'));
      } else {
        setTimeout(() => {
          checkCondition(resolve, reject, startTime);
        }, interval);
      }
    };
  
    return new Cypress.Promise((resolve, reject) => {
      checkCondition(resolve, reject, new Date().getTime());
    });
  });
  