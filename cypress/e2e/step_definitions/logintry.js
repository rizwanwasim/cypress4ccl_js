import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



When("We request the Post Login API", () => {
    cy.request('POST',"/api/login", {"email": "eve.holt@reqres.in", "password": "cityslicka"}).as('response');
  });

//   Then("The response status code should be 200", () => {
//     cy.get('@response').its('status').should('eq', 200);
//   });

  Then('Token will be in response', () => {
    cy.get('@response').its('body').should("have.a.property", "token")
  });

When("We request the Post Login API with Wrong details", () => {
    cy.request({url:"/api/login",method:"POST", body: {"email": "peter@klaven"}, failOnStatusCode: false}).as('response');
  });

Then("The response status code should be 400", () => {
    cy.get('@response').its('status').should('eq', 400);
  });


Then("Error message will be shown", () => {
    cy.get('@response').its('body').should("have.property", "error")
  });