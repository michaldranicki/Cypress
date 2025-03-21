export class InventoryPage {
  // Page elements
  private inventoryContainer = ".inventory_container";
  private itemName = ".inventory_item_name";
  private addToCartBackpack = "#add-to-cart-sauce-labs-backpack";
  private removeBackpack = "#remove-sauce-labs-backpack";
  private cartIcon = "#shopping_cart_container";

  // Verify the inventory page is loaded
  isInventoryPageLoaded() {
    return cy
      .get(this.inventoryContainer)
      .should("exist")
      .then(() => {
        return cy
          .url()
          .should("include", "/inventory.html")
          .then(() => true);
      });
  }

  // Get the name of the first item in the inventory
  getFirstItemName() {
    return cy.get(this.itemName).first().invoke("text");
  }

  // Add to cart item
  addToCartItem() {
    return cy.get(this.addToCartBackpack).click();
  }

  // Check the number of items on the cart icon
  checkNumberOfItemOnCartIcon(numberOfItems: number) {
    if (numberOfItems == 0) {
      return cy
        .get(this.cartIcon)
        .invoke("text")
        .then((text) => {
          const itemCount = text.trim();
          expect(itemCount).to.be.oneOf(["0", ""]);
        });
    } else {
      return cy.get(this.cartIcon).contains(numberOfItems);
    }
  }

  //Check if the remove button is visible
  isRemoveButtonVisible() {
    return cy.get(this.removeBackpack).should("be.visible");
  }
  //Go to cart
  goToCart() {
    cy.get(this.cartIcon).click();
  }
}
