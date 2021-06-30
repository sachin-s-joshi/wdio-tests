Feature: Test Apis with axios and cucumber

    This feature deals with API testing using axios, cucumber and reports are generated on allure

    Scenario Outline: Get data
        Given I have an "<baseUrl>" to call
        When I invoke "<path>" with GET request on it
        Then I should expect 200 status
        Examples:
            | baseUrl                               | path            |
            | https://jsonplaceholder.typicode.com/ | todos           |
            | https://jsonplaceholder.typicode.com/ | comments        |
            | https://jsonplaceholder.typicode.com/ | posts           |
            | https://jsonplaceholder.typicode.com/ | todos/1         |
            | https://jsonplaceholder.typicode.com/ | comments/2      |
            | https://jsonplaceholder.typicode.com/ | posts/3         |
            | https://jsonplaceholder.typicode.com/ | posts/?userId=1 |


    Scenario Outline: Post Data
        Given I have an "<baseUrl>" to call
        When I invoke "<path>","<body>" with POST request on it
        Then I should expect 201 status
        Examples:
            | baseUrl                               | path  | body |
            | https://jsonplaceholder.typicode.com/ | posts | data |


    Scenario Outline: PUT Data
        Given I have an "<baseUrl>" to call
        When I invoke "<path>","<body>" with PUT request on it
        Then I should expect 200 status
        Examples:
            | baseUrl                               | path    | body |
            | https://jsonplaceholder.typicode.com/ | posts/2 | data |


    Scenario Outline: Delete Request
        Given I have an "<baseUrl>" to call
        When I invoke "<path>" with DELETE request on it
        Then I should expect 200 status
        Examples:
            | baseUrl                               | path    |
            | https://jsonplaceholder.typicode.com/ | posts/2 |