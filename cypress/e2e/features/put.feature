Feature: API Testing

  Background:
    Given A base Url for API Test

  Scenario: Update a user
    When We request the API for Update User data
    Then The response status code should be 200
    And The update user response should have all user properties