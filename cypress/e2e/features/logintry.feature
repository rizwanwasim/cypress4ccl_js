Feature: API Testing

 
Background:
    Given A base Url for API Test

Scenario: Login Try
    Given A base Url for API Test
    When We request the Post Login API
    Then The response status code should be 200
    And Token will be in response

Scenario: Login Try with wrong details
    Given A base Url for API Test
    When We request the Post Login API with Wrong details
    Then The response status code should be 400
    And Error message will be shown