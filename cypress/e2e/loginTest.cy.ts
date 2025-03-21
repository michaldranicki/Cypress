/// <reference types="cypress" />

import { PageFactory } from "../page_objects/pageFactory";

describe("Login Page Tests", () => {
  const pm = new PageFactory();

  beforeEach(() => {
    const URL = Cypress.env("BASE_URL");

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log(URL);
    cy.visit(URL);
  });

  it("should log in successfully with valid credentials", () => {
    const username = Cypress.env("USERNAME");
    const password = Cypress.env("PASSWORD");

    pm.loginPage.login(username, password);
    // Verify the inventory page is loaded
    pm.inventoryPage.isInventoryPageLoaded().should("eq", true);
    // Get the name of the first item in the inventory
    pm.inventoryPage.getFirstItemName().then((itemName) => {
      cy.log(`First item in inventory: ${itemName}`);
    });
  });

  it("should display an error message with invalid credentials", () => {
    pm.loginPage.login("invalid_user", "invalid_password");

    // Verify the error message
    pm.loginPage
      .getErrorMessage()
      .should(
        "eq",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});
