import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("We request the Post Registeration API", () => {
    cy.request('POST',"/api/register", {"email": "eve.holt@reqres.in",
    "password": "pistol"}).as('response');
  });

//   Then("The response status code should be 200", () => {
//     cy.get('@response').its('status').should('eq', 200);
//   });


Then('ID and Token will be in response', () => {
    cy.get('@response').its('body').should("have.a.property", "token")
    cy.get('@response').its('body').should("have.a.property", "id")
  });
  
When("We request the Post Registeration API with Wrong details", () => {
    cy.request({url:"/api/register",method:"POST", body: {"email": "sydney@fife"}, failOnStatusCode: false}).as('response');
  });
  
