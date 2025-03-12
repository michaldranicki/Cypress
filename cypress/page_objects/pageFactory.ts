
import { LoginPage } from './loginPage';
import { InventoryPage } from './inventoryPage';

export class PageFactory {
  readonly loginPage: LoginPage;
  readonly inventoryPage: InventoryPage;

  constructor() {
    this.loginPage = new LoginPage();
    this.inventoryPage = new InventoryPage();
  }

  getLoginPage() {
    return this.loginPage;
  }

  getInventoryPage() {
    return this.inventoryPage;
  }
}  