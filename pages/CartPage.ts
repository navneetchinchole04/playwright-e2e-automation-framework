import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async verifyItemInCart() {
    await this.cartItem.first().waitFor();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
