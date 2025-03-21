/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import { PageFactory } from "../page_objects/pageFactory";

describe("Inventory Page Tests", () => {
  const pm = new PageFactory();

  beforeEach(() => {
    const URL = Cypress.env("BASE_URL");
    const username = Cypress.env("USERNAME");
    const password = Cypress.env("PASSWORD");

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log(URL);
    cy.visit(URL);
    pm.loginPage.login(username, password);
    pm.inventoryPage.isInventoryPageLoaded().should("eq", true);
    pm.inventoryPage.checkNumberOfItemOnCartIcon(0);
  });

  it("Add to cart backack", () => {
    pm.inventoryPage.addToCartItem();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(1);
    pm.inventoryPage.isRemoveButtonVisible();
    pm.inventoryPage.goToCart();
    pm.cartPage.isCartPageLoaded();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(1);
  });

  it("Add to cart backpack, go back, then remove from cart", () => {
    pm.inventoryPage.addToCartItem();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(1);
    pm.inventoryPage.goToCart();
    pm.cartPage.isCartPageLoaded();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(1);
    pm.cartPage.continueShopping();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(1);
    pm.inventoryPage.goToCart();
    pm.cartPage.removeFromCart();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(0);
  });

  it("Add to cart backpack, then checkout", () => {
    const firstName = faker.person.firstName("male");
    const lastName = faker.person.lastName("male");
    const zipCode = faker.location.zipCode();

    pm.inventoryPage.addToCartItem();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(1);
    pm.inventoryPage.goToCart();
    pm.cartPage.isCartPageLoaded();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(1);
    pm.cartPage.checkout();
    pm.checkoutFormPage.isCheckoutFormLoaded();
    pm.checkoutFormPage.fillFirstName(firstName);
    pm.checkoutFormPage.fillLastName(lastName);
    pm.checkoutFormPage.fillZipCode(zipCode);
    pm.checkoutFormPage.clickContinueBtn();
    pm.checkoutOverviewPage.clickFinishButton();
    pm.checkoutOverviewPage.isPurchaseFinished();
    pm.checkoutOverviewPage.clickBackHomeButton();
    pm.inventoryPage.checkNumberOfItemOnCartIcon(0);
  });
});
