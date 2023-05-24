import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('A web browser for API Test', () => {
//   cy.visit('/');
});


When("We request the API for Create User", () => {
    cy.request('POST',"/api/users", {"name": "morpheus","job": "leader"}).as('response');
  });


Then("The response status code should be 201", () => {
    cy.get('@response').its('status').should('eq', 201);
  });
  
Then('The create user response should have all user properties', () => {
    cy.get('@response').its('body').should('have.property', "id")
    cy.get('@response').its('body').should('have.property', "job")
    cy.get('@response').its('body').should('have.property', "name")
    cy.get('@response').its('body').should('have.property', "createdAt")
  });