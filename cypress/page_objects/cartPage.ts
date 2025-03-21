/// <reference types="cypress" />

export class CartPage {
  //Page elements
  private cartContainer = "#cart_contents_container";
  private continueShoppingBtn = "#continue-shopping";
  private checkoutBtn = "#checkout";
  private removeBackpackBtn = "#remove-sauce-labs-backpack";

  // Verify the cart page is loaded
  isCartPageLoaded() {
    return cy
      .get(this.cartContainer)
      .should("exist")
      .then(() => {
        return cy
          .url()
          .should("include", "/cart.html")
          .then(() => true);
      });
  }

  //Continue shopping
  continueShopping() {
    cy.get(this.continueShoppingBtn).click();
  }

  //Remove from cart
  removeFromCart() {
    cy.get(this.removeBackpackBtn).click();
  }

  //Checkout
  checkout() {
    cy.get(this.checkoutBtn).click();
  }
}
