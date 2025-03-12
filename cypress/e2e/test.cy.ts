/// <reference types="cypress" />

import { PageFactory } from '../page_objects/pageFactory';

describe('Login Page Tests', () => {
    const loginPage = new PageFactory().getLoginPage;
    const inventoryPage = new PageFactory().getInventoryPage();

    beforeEach(() => {
    
        cy.clearCookies();
        cy.clearLocalStorage();
    })
  
    it('should log in successfully with valid credentials', () => {
        const username = Cypress.env('SAUCE_DEMO_USERNAME');
        const password = Cypress.env('SAUCE_DEMO_PASSWORD');
    
        loginPage.login(username, password);
    
        // Verify the URL after successful login
        cy.url().should('include', '/inventory.html');
    
        // Verify the inventory page is loaded
        inventoryPage.isInventoryPageLoaded().should('eq', true);
    
        // Get the name of the first item in the inventory
        inventoryPage.getFirstItemName().then((itemName) => {
          cy.log(`First item in inventory: ${itemName}`);
        });
      });
    
      it('should display an error message with invalid credentials', () => {
        loginPage.login('invalid_user', 'invalid_password');
    
        // Verify the error message
        loginPage.getErrorMessage().should('eq', 'Epic sadface: Username and password do not match any user in this service');
      });
  
  })