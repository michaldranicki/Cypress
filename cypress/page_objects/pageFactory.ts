import { LoginPage } from "./loginPage";
import { InventoryPage } from "./inventoryPage";
import { CartPage } from "./cartPage";
import { CheckoutFormPage } from "./checkoutFormPage";
import { CheckoutOverviewPage } from "./checkoutOverviewPage";

export class PageFactory {
  readonly loginPage: LoginPage;
  readonly inventoryPage: InventoryPage;
  readonly cartPage: CartPage;
  readonly checkoutFormPage: CheckoutFormPage;
  readonly checkoutOverviewPage: CheckoutOverviewPage;

  constructor() {
    this.loginPage = new LoginPage();
    this.inventoryPage = new InventoryPage();
    this.cartPage = new CartPage();
    this.checkoutFormPage = new CheckoutFormPage();
    this.checkoutOverviewPage = new CheckoutOverviewPage();
  }
}
