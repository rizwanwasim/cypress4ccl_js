Feature: API Testing

  Background:
    Given A base Url for API Test

  Scenario: Create a new user
    When We request the API for Create User
    Then The response status code should be 201
    And The create user response should have all user properties