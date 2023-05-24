const { Given, When, Then} = require('@cucumber/cucumber')
Given('User visits the login page', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log('pending1')
});

When('Sign in using valid credentials', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log('pending2')
});

Then('User is logged-in and redirected to the dashboard', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending3';
});