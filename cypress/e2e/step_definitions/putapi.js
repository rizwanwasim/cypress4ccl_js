import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('A web browser for API Test', () => {
//   cy.visit('/');
});


When("We request the API for Update User data", () => {
    cy.request('PUT',"/api/users/2", {"name": "morpheus","job": "zion resident"}).as('response');
  });

  
Then('The update user response should have all user properties', () => {
    cy.get('@response').its('body').should('have.property', "job")
    cy.get('@response').its('body').should('have.property', "name")
    cy.get('@response').its('body').should('have.property', "updatedAt")
  });