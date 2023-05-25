Feature: API Testing

  Background:
    Given A base Url for API Test

Scenario: Registration
    Given A base Url for API Test
    When We request the Post Registeration API
    Then The response status code should be 200
    And ID and Token will be in response

Scenario: Registration - Unseccussful
    
    When We request the Post Registeration API with Wrong details
    Then The response status code should be 400
    And Error message will be shown