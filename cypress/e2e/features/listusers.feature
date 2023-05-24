Feature: API Testing

 
  Background:
    Given A base Url for API Test

  Scenario: List of All users
    Given A base Url for API Test
    When We request the Unknown API
    Then The response status code should be 200
    And List unknown user response should have all properties