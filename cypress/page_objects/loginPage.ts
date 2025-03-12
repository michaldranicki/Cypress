/// <reference types="cypress" />

export class LoginPage {
  // Page elements
  private usernameField = "#user-name";
  private passwordField = "#password";
  private loginButton = "#login-button";
  private errorMessage = '[data-test="error"]';

  // Enter username
  enterUsername(username: string) {
    cy.get(this.usernameField).type(username);
  }

  // Enter password
  enterPassword(password: string) {
    cy.get(this.passwordField).type(password);
  }

  // Click the login button
  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  // Get error message text
  getErrorMessage(): Cypress.Chainable<string> {
    return cy.get(this.errorMessage).invoke("text");
  }

  // Perform login
  login(username: string, password: string) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }
}
