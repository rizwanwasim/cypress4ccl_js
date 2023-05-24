import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Given("A base Url for API Test", () => {
  // cy.visit("/");
});

When("We request the API", () => {
  cy.request("/api/users?page=2").as('response');
});

When("We request the API for Single User", () => {
  cy.request("/api/users/2").as('response');
});

When("We request the API for Single User Not Found", () => {
  cy.request({url:"api/users/23", failOnStatusCode: false}).as('response');
});


Then("The response status code should be 200", () => {
  cy.get('@response').its('status').should('eq', 200);
});

Then("List user response should have all properties", () => {
  cy.get('@response').its('body').should('have.property', "page")
  cy.get('@response').its('body').should('have.property', "per_page")
  cy.get('@response').its('body').should('have.property', "total")
  cy.get('@response').its('body').should('have.property', "total_pages")
});

Then('The response should have all user properties', () => {
  cy.get('@response').its('body.data').should('have.property', "id")
  cy.get('@response').its('body.data').should('have.property', "email")
  cy.get('@response').its('body.data').should('have.property', "first_name")
  cy.get('@response').its('body.data').should('have.property', "last_name")
  cy.get('@response').its('body.data').should('have.property', "avatar")
});

Then("The response status code should be 404", () => {
  cy.get('@response').its('status').should('eq', 404);
});