Feature: API Testing

 
  Background:
    Given A base Url for API Test

  Scenario: Delete a user
    Given A base Url for API Test
    When We request the API for delete User data
    Then The response status code should be 204