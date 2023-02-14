Feature: Login Test

    Scenario: Successful login with valid credentials
        Given a user launches an application
        When  a user enters valid credentials
        Then  a user gets logged in

    Scenario: Unsuccessful login with invalid credentials
        Given a user launches an application
        When  a user enters invalid credentials
        Then  a user gets error message