import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('A web browser for API Test', () => {
//   cy.visit('/');
});

When("We request the API for delete User data", () => {
    cy.request('DELETE',"/api/users/2").as('response');
  });

  Then('The response status code should be 204', () => {
    cy.get('@response').its('status').should('eq', 204);
  });