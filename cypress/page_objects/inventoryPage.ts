export class InventoryPage {
    // Page elements
    private inventoryContainer = '.inventory_container';
    private itemName = '.inventory_item_name';
  
    // Verify the inventory page is loaded
    isInventoryPageLoaded() {
      return cy.get(this.inventoryContainer).should('exist').then(() => true);
    }
  
    // Get the name of the first item in the inventory
    getFirstItemName() {
      return cy.get(this.itemName).first().invoke('text');
    }
  }