Feature: API Testing

    Feature API Testing.

    # Background:
    #     Given A web browser for API Test
    Scenario: API Testing for Page 2
        Given A web browser for API Test
        When We request the API
        Then The response status code should be 200
    
    Scenario: API Testing for Single User
        Given A web browser for API Test
        When We request the API for Single User
        Then The response status code should be 200