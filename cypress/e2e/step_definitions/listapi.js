import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



When("We request the Unknown API", () => {
    cy.request("/api/unknown").as('response');
  });


Then("List unknown user response should have all properties", () => {
    cy.get('@response').its('body').should('have.property', "page")
    cy.get('@response').its('body').should('have.property', "per_page")
    cy.get('@response').its('body').should('have.property', "total")
    cy.get('@response').its('body').should('have.property', "total_pages")
  });
  