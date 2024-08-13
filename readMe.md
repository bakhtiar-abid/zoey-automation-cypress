# Cypress Automation Test Project

## Project Overview
This project is designed to automate testing for the Zoey Travel business dashboard. The automation scripts are developed using Cypress, a powerful end-to-end testing framework that simplifies the process of testing modern web applications.

## Project Structure
- **cypress/**: Contains all test-related files.
    - **fixtures/**: Contains test data in JSON format.
    - **pages/**: Contains each web page of the applicatio.
    - **integration/**: Contains the actual test scripts.
    - **support/**: Reusable functions and custom commands.
    - **reports/**: Contains Mochawesome reporter for Cypress with screenshots attached to tests
- **cypress.config.js**: Configuration file for Cypress.
- **package.json**: Dependencies and scripts for the project.

## Prerequisites
- Node.js (v12 or later)
- npm or yarn

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/bakhtiar-abid/zoey-automation-cypress.git

2. Navigate to the project directory:
   ```bash
   cd zoey-automation-cypress

3. Install the dependencies:
   ```bash
   npm install
   or
   yarn install

## Running Tests

4. To run the tests, use the following command:
   ```bash
   npx cypress open

   This will open the Cypress Test Runner, where you can select and run your tests.

   For headless mode (runs tests in the background):
   
   npx cypress run

## Test Cases
The project includes automated test cases for the following functionalities:


- Login: Ensure proper user authentication and robust error handling during the login process.
- Incoming Events: Validate that the list of incoming events is accurate and up-to-date.
- Users: Verify the correctness of user data and its proper display.
- Employees: Confirm that employee records are accurately maintained when adding new employees.
- Experience: Ensure that experiences are added successfully to facilitate business operations.
- Experience List: Verify that all experiences appear in the list after new ones are added.
- Category & Sub-Category: Validate the addition of categories and sub-categories when adding experiences.
- Add-ons: Ensure the accurate creation, modification, and deletion of add-ons.
- New Requests: Confirm that all new requests are displayed correctly and accurately.

## CI/CD Integration
This project is integrated with CI/CD pipelines with GitHub Actions to automate test execution on every commit.


## Reporting
The project generates test reports using [Mocha Reporter]. The reports are saved in the `reports/` directory.

## Browser Configuration

### For now, This project has configured with one browser, we can easily create more browser later on.

1. Chrome

![browser, support!](https://playwright.dev/java/img/logos/Browsers.png)

## License
This project is licensed under the MIT License.
