Feature: Job Portal Functionality

  Scenario: Job seeker updates profile information
    Given a job seeker is on the profile management page
    When they upload a CV
    And they update their work experiences
    And they add new skills
    And they add their education details
    Then their profile should be updated with the new information

  Scenario: Employer searches for candidates
    Given an employer is on the candidate search page
    When they search for profiles
    Then they should see a list of candidates that match their search criteria

  Scenario: Employer posts a job
    Given an employer is on the job posting page
    When they add detailed job information
    And they specify job requirements
    And they provide company information
    Then the job should be posted on the portal

  Scenario: Employer reviews job applications
    Given an employer is on the job management page
    When they view the list of job applications received
    Then they should be able to review and contact interested candidates

  Scenario: Job seeker applies for a job
    Given a job seeker is on the job listing page
    When they apply for an open position
    Then their application should be stored in the central system

  Scenario: Communication between job seeker and employer
    Given a job seeker and an employer are on the communication page
    When they send messages to each other
    Then the messages should be delivered successfully

  Scenario: Job seeker receives notification for matching job
    Given a job seeker has set up their profile
    When a new job matching their profile is posted
    Then they should receive a notification about the new job

  Scenario: User login
    Given a user is on the login page
    When they enter valid credentials
    Then they should be able to access their secure profile page

  Scenario: Unauthorized access to secure page
    Given a user is not logged in
    When they attempt to access a secure page
    Then they should be redirected to the login page

  Scenario: Platform performance testing
    Given the platform is under test
    When various functionalities are tested
    Then it should perform consistently without errors

  Scenario: Advanced search for jobs
    Given a user is on the advanced search page
    When they apply specific filters
    Then they should see search results matching the criteria

  Scenario: Employer views job posting analytics
    Given an employer is on the analytics page
    When they view the performance of their job postings
    Then they should see detailed analytics and reports

  Scenario: Job seeker views application statistics
    Given a job seeker is on their application dashboard
    When they view the statistics of their applications
    Then they should see relevant statistics

  Scenario: Feedback visibility
    Given a recruitment process has been completed
    When the employer and job seeker leave feedback for each other
    Then the feedback should be visible to other users

  Scenario: User accesses help resources
    Given a user is on the help page
    When they look for support articles
    Then they should find the information they need

  Scenario: Contact customer support
    Given a user is on the help page
    When they should be able to contact customer support
    Then they should find the information they need

  Scenario: Employer creates a training program
    Given an employer wants to organize training
    When they create a training program
    Then it should be available to candidates or current employees

  Scenario: Employer creates online tests
    Given an employer wants to assess candidates
    When they create online tests
    Then the tests should be accessible to candidates
    And the results should be available for review
