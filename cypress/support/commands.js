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
import 'cypress-iframe'
Cypress.Commands.add('getStripeIframeBody', (iframeSelector) => {
    return cy
      .get(iframeSelector, { timeout: 10000 })  // Set a longer timeout
      .first()
      .then(($iframe) => {
        cy.frameLoaded($iframe, { timeout: 10000 }); // Increase timeout here too
        return cy
          .wrap($iframe.contents().find('body'))
          .should('not.be.empty')
      })
  })

import 'cypress-real-events/support'
Cypress.Commands.add('hoverOnCategory', (xpath) => {
  cy.xpath(xpath).realHover(); // native-like mouse hover
  cy.wait(500);
});