Feature: API Testing

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser for API Test
    Scenario: Success Login
        When We request the API
        # Then the response code is 200