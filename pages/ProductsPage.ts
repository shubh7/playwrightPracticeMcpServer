import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly inventoryItemLabels: Locator;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItemLabels = page.locator('.inventory_item_name');
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async getCartCount() {
    return this.cartBadge;
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
