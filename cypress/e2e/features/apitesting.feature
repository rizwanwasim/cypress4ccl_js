Feature: API Testing

    Feature API Testing.

    # Background:
    #     Given A web browser for API Test
    Scenario: API Testing for Page 2
        Given A base Url for API Test
        When We request the API
        Then The response status code should be 200
        Then List user response should have all properties
    
    Scenario: API Testing for Single User
        Given A base Url for API Test
        When We request the API for Single User
        Then The response status code should be 200
        Then The response should have all user properties

    Scenario: API Testing for Single User Not Found
        Given A base Url for API Test
        When We request the API for Single User Not Found
        Then The response status code should be 404
