import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Given("A web browser for API Test", () => {
  cy.visit("/");
});

When("We request the API", () => {
  cy.request("/api/users?page=2").as('response');
});

When("We request the API for Single User", () => {
  cy.request("/api/users/2").as('response');
});


Then("The response status code should be 200", () => {
  cy.get('@response').its('status').should('eq', 200);
});
