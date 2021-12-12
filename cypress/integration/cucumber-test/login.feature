Feature: Login to application

Scenario: Log in successfully
Given the user is on the login page
When the user logs in with "valid@test.com" as username and "valid" as password
Then the user logs in successfully

Scenario Outline: Login failures
Given the user is on the login page
When the user logs in with "<username>" as username and "<password>" as password
Then the user is shown an error message

Examples:
|username         |password|
|invalid@test.com |invalid |
|invalid@test.com |valid   |
|valid@test.com   |invalid |
|empty            |valid   |
|valid@test.com   |empty   |