# Cypress with TypeScript: QA Automation Project

This project demonstrates my skills as a QA Engineer in using Cypress with TypeScript for automated testing using Page Object Pattern. The project includes a test suite for a login functionality, where login credentials are securely stored in a `.env` file.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Environment Variables](#environment-variables)

## Project Overview

This project is designed to showcase my ability to write automated tests using Cypress in a TypeScript environment. The focus is to show variety of Cypress functions. Project uses Page Object Model as a pattern to write code. Login credentials are securely stored in a `.env` file.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Cypress](https://www.cypress.io/) (will be installed as a dependency)

## Setup

1. **Clone the repository:**

   ```bash
   git clone git@github.com:michaldranicki/Cypress.git
   ```

2. **Install dependencies**

  ```bash
  npm install
  ``` 

3. **Set up environment variables:**

Create a .env file in the root directory of the project and add your login credentials:

  ```plaintext
  
  SAUCE_DEMO_USERNAME=standard_user
  SAUCE_DEMO_PASSWORD=secret_sauce
  
  CYPRESS_BASE_URL=https://www.saucedemo.com/
  
  ```
Note: Ensure that the .env file is added to your .gitignore to avoid committing sensitive information to version control. Also please be aware that this is a demo project to show my skills. Normally content of the .env file is not displayed in README file.

##Running Tests
To run the Cypress tests, use the following command:

  ```bash
  
  npx cypress open
  ```
This will open the Cypress Test Runner, where you can select and run the tests interactively.

Alternatively, you can run the tests headlessly using:

  ```bash
  
  npx cypress run
  ```
