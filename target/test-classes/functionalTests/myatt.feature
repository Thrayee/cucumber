#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

@tag
Feature: My Login and view billling statement
  As a ATT customer, I am able to login to myatt.com and will be able to view my billing reports

  @tag1
  Scenario: myatt login
    Given User has navitaged to myatt home page
    When Users enters UserID
    And User enters Password
    And Submits
    Then User lands in User dahsboard

  @tag2
  Scenario: User view billing details
    Given User is in user dashboard 
    When clicks on see my bill
    Then User is able to view his complete bill
    
  @tag3
  Scenario: User view billing reports
    Given User is in billing details 
    When clicks on view bill reports
    Then User is able to view his/her billing reports for all phones


    
    