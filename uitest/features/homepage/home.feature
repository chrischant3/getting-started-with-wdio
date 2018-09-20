Feature: Homepage

  Scenario: Home Page has title
    Given I visit "http://www.google.com"
    Then the page title "Google" is present